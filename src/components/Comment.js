import s from '../css/Comment.module.css';
import { useState } from "react";
import { useContext } from 'react';
import { LoggedInContext } from '../contexts/LoggedIn';
import deleteComment from '../utils/deleters';

export default function Comment({comment}) {

    const {loggedin} = useContext(LoggedInContext);
    const [showAll, setShowAll] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const binImage = <img 
        src='https://img.icons8.com/parakeet/512/delete.png'
        className={s.bin} 
        alt='Delete comment' />

    function handleDelete() {
        setDeleting(true);
        deleteComment(comment.comment_id)
        .then((status) => {
            setDeleting(false);
            if (status === 204) {
                alert('deleted')
            } 
        })
    };

    return (
        <li className={s.commentItem}>
            <h4 className={s.author}>{comment.author}</h4>
            <p>
                {showAll ? comment.body : `${comment.body.slice(0, 150)} `}
            <span 
                onClick={() => setShowAll(!showAll)}
                className={s.showMore}>
                {!showAll && comment.body.length > 150 && '...'}
            </span>
            </p>
            {(comment.author === loggedin) && (
                <button onClick={handleDelete} disabled={deleting}>{binImage}</button>
            )}
            
        </li>
    )
};