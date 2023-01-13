import axios from "axios";
import { formatArticleList } from "./formatters";

axios.defaults.baseURL = 'https://persian-blue-millipede-veil.cyclic.app/api'

export function fetchArticles() {
    return axios.get('/articles')
        .then(({data}) => formatArticleList(data.allArticles))
        .then((readyList) => readyList)
};

export function fetchArticleById(id) {
    return axios.get(`/articles/${id}`)
        .then(({data}) => data.article[0]);
};

export function fetchCommentsForArticle(id) {
    return axios.get(`/articles/${id}/comments`)
        .then(({data}) => data);
};

