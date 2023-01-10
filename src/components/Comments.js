import s from '../css/Comments.module.css';
import { useEffect, useState } from "react";
import { fetchCommentsForArticle } from "../utils/fetchers";
import Loading from './Loading';

export default function Comments({id}) {
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    function sectionHeader() {
        return comments.length ? 
            `${comments.length} comments` : 'No comments yet!'
    }

    useEffect(() => {
        fetchCommentsForArticle(id)
        .then((coms) => {
            if (coms.length) {
                setComments(coms);
                setLoading(false);
            } 
        })
    }, [id]);

    if (loading) return <Loading />

    return (
        <section>
            <h3>{sectionHeader()}</h3>
            <ul>
            {comments.map((c) => {
                return (
                    <li key={c.comment_id}>
                        <h4 className={s.author}>{c.author}</h4>
                        <p className={s.comment}>{c.body}</p>
                        <hr />
                    </li>
                )
            })}
            </ul>
        </section>   
    )
};

