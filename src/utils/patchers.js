import axios from "axios";

const api = axios.create({
    baseURL: 'https://persian-blue-millipede-veil.cyclic.app/api'
});

export function patchVote(id, change) {
    
    let newPatch = change ? { inc_votes: 1} : { inc_votes: -1}

    return api.patch(`/articles/${id}`, newPatch)
        .then(({status}) => console.log(status))
        .catch((err) => err.response.status)
}
