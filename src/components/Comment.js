import s from '../css/Comment.module.css';
import { useState } from "react"

export default function Comment({comment}) {

    const [showAll, setShowAll] = useState(false);

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
        </li>
    )
};



