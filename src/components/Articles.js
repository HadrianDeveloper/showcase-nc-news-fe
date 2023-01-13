import s from '../css/Articles.module.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/fetchers";
import Loading from './Loading.js';
import TopicFilter from './TopicFilter';


export default function Articles() {

    const {topic} = useParams();
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetchArticles(topic)
        .then((articles) => {
            setArticles(articles);
            setLoading(false);
        })
    }, [topic]);

    if (loading) return <Loading />

    return (
        <div>
        <h2>{topic ? `Articles on ${topic}` : 'All articles'}</h2>
        <TopicFilter />
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
        </div>
    )
};