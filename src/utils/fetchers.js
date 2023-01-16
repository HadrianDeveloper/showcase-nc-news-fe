import axios from "axios";
import { createTopicArr, formatArticleList } from "./formatters";

axios.defaults.baseURL = 'https://nc-news-by-hadrian.onrender.com/api'


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

export function fetchUser(input) {
    let loggedInUser = {};
    return axios.get('/users')
        .then(({data}) => {
            const users = data.allUsers;
            for (let x = 0; x < users.length; x++) {
                if (users[x].username === input.username) {
                    loggedInUser = users[x]
                }
            }
            return loggedInUser;
        })
};