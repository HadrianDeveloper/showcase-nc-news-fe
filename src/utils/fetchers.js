import axios from "axios";
import { createTopicArr, formatArticleList } from "./formatters";

axios.defaults.baseURL = 'https://persian-blue-millipede-veil.cyclic.app/api'


export function fetchArticles(topic) {
    let query = (topic) ? `?topic=${topic}` : '';
    return axios.get(`/articles${query}`)
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

export function fetchTopics() {
    return axios.get('/topics')
        .then(({data}) => createTopicArr(data.allTopics))
        .then((topicArray) => topicArray)
};