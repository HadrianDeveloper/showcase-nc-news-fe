import axios from "axios";

export default function deleteComment(id) {
    return axios.delete(`/comments/${id}`)
        .then((res) => res.status)
        .catch((err) => console.log(err))
};