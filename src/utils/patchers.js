import axios from "axios";

export function patchVote(id, change) {
    
    let newPatch = change ? { inc_votes: 1} : { inc_votes: -1}

    return axios.patch(`/articles/${id}`, newPatch)
        .then(({status}) => console.log(status))
        .catch((err) => err.response.status)
}
