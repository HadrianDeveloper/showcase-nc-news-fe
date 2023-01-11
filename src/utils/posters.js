import axios from "axios";

const api = axios.create({
    baseURL: 'https://persian-blue-millipede-veil.cyclic.app/api'
});


export function postComment(id, input, username) {
    const post = {
        username: username,
        body: input
    };

    const test = {
        username: 'grumpy19',
        body: 'Lupus non timet canem latrantem! Carpe diem!'
    };

    return api.post(`/api/articles/${id}/comments`, test)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};