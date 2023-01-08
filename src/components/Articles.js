import s from '../css/Articles.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/fetchers";
import { dateformatter } from '../utils/formatters';
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

    const allArticles = articles.map((art) => {
        return (
            <Link className={s.linkcard} key={art.article_id} to={`/articles/${art.article_id}`}>
            <li className='list-item'>
                <h4>{i.title}</h4>
                <p className='metadata'>By {art.author} on {dateformatter(art.created_at)}</p>
            </li>
            </Link>
        )
    });

    return (
        <main>
            <ul>
                {allArticles}
            </ul>
        </main>
    )
};