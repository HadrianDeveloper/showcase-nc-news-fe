import { useEffect, useState } from "react";
import { fetchCommentsForArticle } from "../utils/fetchers";

export default function Comments({id}) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchCommentsForArticle(id)
        .then((coms) => setComments(coms))
    }, []);

    return (
        <ul>
        {comments.map((c) => {
            return (
                <li>
                </li>
            )
        })}
        </ul>
    )
};