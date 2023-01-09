import s from '../css/NewsItem.module.css';
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchArticleById } from "../utils/fetchers"
import { dateformatter } from "../utils/formatters";
import Loading from './Loading';
import Comments from './Comments';
import Votes from './Votes';


export default function NewsItem() {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    
    const {article_id} = useParams();

    useEffect(() => {
        fetchArticleById(article_id)
        .then((article) => {
            setTimeout(() => {
                setArticle(article);
                setLoading(false);
            }, 50)
        })
    }, [article_id])

    if (loading) return <Loading />

    return (
    <main>
    <section className={s.articleName}>
        <article>
            <span className={s.topic}>
                {article.topic.toUpperCase()}
            </span>
            <h2>
                {article.title}
            </h2>
            <p className={s.metadata}>
                By {article.author} on {dateformatter(article.created_at)}
            </p>
            <p>
                {article.body}
            </p>
            <Votes id={article_id} votes={article.votes} />
        </article>
        <hr />
        <Comments id={article_id} />
    </section>
    </main> 
    )
};