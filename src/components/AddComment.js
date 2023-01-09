import s from '../css/AddComment.module.css';
import { useContext, useState } from 'react';
import { LoggedInContext } from '../contexts/LoggedIn';
import { postComment } from '../utils/posters';


export default function AddComment({setComments, id}) {

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const {loggedin} = useContext(LoggedInContext);

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        postComment(id, input, loggedin)
        .then((res) => {

        })
    }

    if (!loggedin) return;

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                className={s.textInput}
                onChange={(e) => setInput(e.target.value)} />
            <br />
            <button 
                type='submit'>{loading ? 'Cancel' : 'Post'}</button>
        </form>
    )
};