import s from '../css/Comments.module.css';
import { useEffect, useState } from "react";
import { fetchCommentsForArticle } from "../utils/fetchers";
import Loading from './Loading';
import AddComment0 from './AddComment';
import Comment from './Comment';
import useScrollToHeader from '../customEffects/useScrollToHeader';
import { Link } from 'react-router-dom';

export default function Comments({id}) {
    useScrollToHeader();

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
    }, [id, comments]);

    if (loading) return <Loading />

    return (
        <section>
            <h3>{sectionHeader()}</h3>
            <AddComment0 id={id} setComments={setComments} />
            <ul>
                {comments?.map((comment) => 
                    <Comment 
                        key={comment.comment_id} 
                        comment={comment} />
                )} 
            </ul>
            <Link to={`/articles/${id}`}><p>Top of page</p></Link>
        </section>   
    )
};

