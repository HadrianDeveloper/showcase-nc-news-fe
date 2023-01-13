import axios from "axios";

export function postComment(id, newpost) {
    return axios.post(`/articles/${id}/comments`, newpost)
        .then((res) => {
            return res.status;
        })
        .catch((err) => console.log(err))
};
