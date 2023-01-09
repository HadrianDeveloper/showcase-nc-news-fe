import axios from "axios";

const api = axios.create({
    baseURL: 'https://persian-blue-millipede-veil.cyclic.app/api'
});

export function postComment(id, input, username) {
    const post = {
        author: username,
        article_id: id,
        body: input
    };

    return api.post(`/api/articles/${id}/comments`, post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};