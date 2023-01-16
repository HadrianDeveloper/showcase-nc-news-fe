import axios from "axios";
import { createCommentArr, createTopicArr, formatArticleList } from "./formatters";

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

//STARTED WORKING ON THIS PROMISE ALL! - to delete if we reassign this to BE:
// export async function fetchAllForComments(id) {
//     try {
//         const imagedComments = await Promise.all([
//             axios.get(`/articles/${id}/comments`),
//             axios.get(`/users`)
//         ])
//     }
//     catch (err) {
//         console.log(err)
//     }
// };

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