import axios from "axios";

export function postComment(id, newpost) {
    return axios.post(`/articles/${id}/comments`, newpost)
        .then((res) => res.status)
        .catch((err) => console.log(err))
};
