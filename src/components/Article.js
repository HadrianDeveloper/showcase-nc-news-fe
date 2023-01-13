import s from '../css/Article.module.css';
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Loading, Votes, Comments, fetchArticleById, dateformatter } from './index';


export default function Article() {
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    
    const {article_id} = useParams();
    const navigate = useNavigate();

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
        <img  
            src='https://img.icons8.com/ios-glyphs/512/circled-left-2.png' 
            alt='go back to previous page'
            className={s.backButton}
            onClick={() => navigate(-1)} />
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