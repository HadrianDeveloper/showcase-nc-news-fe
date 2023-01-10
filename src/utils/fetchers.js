import axios from "axios";

const api = axios.create({
    baseURL: 'https://persian-blue-millipede-veil.cyclic.app/api'
});

export function fetchArticles() {
    return api.get('/articles')
        .then(({data}) => data.allArticles)
};

export function fetchArticleById(id) {
    return api.get(`/articles/${id}`)
        .then(({data}) => data.article[0])
};


