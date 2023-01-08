import s from '../css/NewsItem.module.css';
import { useEffect, useState, useContext } from "react"
import { LoadingContext } from '../contexts/Loading';
import { useParams } from "react-router"
import { fetchArticleById } from "../utils/fetchers"
import { dateformatter } from "../utils/formatters";
import Comments from './Comments';


export default function NewsItem() {
    const {loading, setLoading} = useContext(LoadingContext);
    const [article, setArticle] = useState({});
    const {article_id} = useParams();

    useEffect(() => {
        setLoading(true)
        fetchArticleById(article_id)
        .then((article) => {
            setLoading(false)
            setTimeout(() => {
                setArticle(article)
            }, 50)
        })
    }, [])

    if (!article.body) return;

    return (
    <main>
    <section className={s.articleName}>
        <article>
            <span className={s.topic}>{article.topic.toUpperCase()}</span>
            <h2>{article.title}</h2>
            <p className={s.metadata}>By {article.author} on {dateformatter(article.created_at)}</p>
            <p>{article.body}</p>
            <div className={s.vote}>
                <img className={s.like} src='https://img.icons8.com/color/512/approval.png' />
                <span>{article.votes}</span>
            </div>
        </article>
        <hr />
        <section>
            <h3>Comments</h3>
            <Comments id={article_id} />
        </section>
    </section>
    </main> 
    )
};