import axios from "axios";

const api = axios.create({
    baseURL: 'https://persian-blue-millipede-veil.cyclic.app/api'
});

export function postComment(id, newpost) {
    return api.post(`/articles/${id}/comments`, newpost)
        .then((res) => {
            return res.status;
        })
        .catch((err) => console.log(err))
};
