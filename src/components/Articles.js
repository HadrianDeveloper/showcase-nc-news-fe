import s from '../css/Articles.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/fetchers";
import Loading from './Loading.js';


export default function Articles() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles()
        .then((articles) => {
            setArticles(articles)
            setLoading(false)
        })
    }, [articles]);

    if (loading) return <Loading />

    return (
        <ul>
            {articles.map((a) => 
                <Link
                    className={s.listItem}
                    key={a.key} 
                    to={`/articles/${a.key}`}>
                        {a}
                </Link>
            )}
        </ul>
    )
};