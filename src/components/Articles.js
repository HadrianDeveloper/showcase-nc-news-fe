import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { fetchArticles } from "../utils/fetchers";
import { dateformatter } from '../utils/formatters';
import { LoadingContext } from '../contexts/Loading';

export default function Articles() {
    const {setLoading} = useContext(LoadingContext)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchArticles()
        .then((articles) => {
            setArticles(articles)
            setLoading(false)
        })
    }, [])

    const allArticles = articles.map((i) => {
        return (
            <Link key={i.article_id} to={`/articles/${i.article_id}`}>
            <li className='list-item'>
                <h4>{i.title}</h4>
                <p className='metadata'>By {i.author} on {dateformatter(i.created_at)}</p>
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