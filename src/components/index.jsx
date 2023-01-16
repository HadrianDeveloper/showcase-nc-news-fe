// ------ GLOBAL / REUSABLE COMPONENTS --------
import Header from './Header'
import Nav from './Nav';
import Error404 from './Error404';
import Loading from './Loading';

// ------ ROUTES --------
import Home from './Home';
import Login from './Login';
import Articles from './Articles';
import Article from './Article';

// ------ ROUTE SUB-COMPONENTS -------
import TopicFilter from './TopicFilter';
import Votes from './Votes';
import Comments from './Comments';
import Comment from './Comment';
import CommentAdder from './CommentAdder';

// ------ CUSTOM CONTEXTS --------
import useScrollToHeader from '../customEffects/useScrollToHeader';

// ------ FUNCTIONS --------
import { fetchArticles, fetchArticleById, fetchCommentsForArticle } from "../utils/fetchers"
import { dateformatter } from "../utils/formatters";

export { 
    Header, Nav, Error404, Loading, 
    Home, Login, Articles, Article, 
    TopicFilter, Votes, Comments, Comment, CommentAdder,
    useScrollToHeader, 
    fetchArticles, fetchArticleById, fetchCommentsForArticle, 
    dateformatter
};
