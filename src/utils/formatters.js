import s from '../css/Articles.module.css';

export function dateformatter(date) {
    const d = new Date(date);
    return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
};

export function formatArticleList(fetchedArticles) {
    return fetchedArticles.map((a) => 
        <li 
            className={s.articleList} 
            key={a.article_id}>
                <h4>{a.title}</h4>
                <p>By {a.author} | {dateformatter(a.created_at)}</p>
        </li>
    )
};