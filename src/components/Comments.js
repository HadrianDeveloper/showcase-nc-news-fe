import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchCommentsForArticle } from "../utils/fetchers";
import Loading from './Loading';
import CommentAdder from './CommentAdder';
import Comment from './Comment';
import useScrollToHeader from '../customEffects/useScrollToHeader';


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
            <CommentAdder id={id} setComments={setComments} />
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

