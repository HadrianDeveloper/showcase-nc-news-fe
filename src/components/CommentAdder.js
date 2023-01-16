import s from '../css/AddComment.module.css';
import { useContext, useState, useRef } from 'react';
import { LoggedInContext } from '../contexts/LoggedIn';
import { postComment } from '../utils/posters';

export default function CommentAdder({id}) {

    const {loggedin} = useContext(LoggedInContext);
    const abortRef = useRef(null);
    const [loading, setLoading] = useState(false);
    
    const [input, setInput] = useState({
        username: '',
        body: '',
    });

    function handleAbort() {
        setLoading(false);
        clearTimeout(abortRef.current);
        alert('Post aborted in the nick of time!');
    };

    function handleSubmit() {
        setLoading(true);
        abortRef.current = setTimeout(() => {
            postComment(id, input = loggedin.username)
            .then((status) => {
                setLoading(false);
                if (status === 201) {
                    setInput({
                        username: loggedin.username,
                        body: '',
                    })
                } else {
                    alert('Whoops, something went wrong. Please try again!')
                }    
            })
        }, 2000)
    };
    
    function handleInput(e) {
        setInput({...input, body: e.target.value})
    };

    if (!loggedin) return;

    return (
        <section>
            <textarea 
                className={s.textInput}
                onChange={handleInput}
                value={input.body}
                disabled={loading}
                placeholder='Enter comments...'
                required />
            <br />
            <button
                onClick={handleSubmit} 
                disabled={input.body.length < 5 || loading}>
                {loading ? 'Posting...' : 'Post'}
            </button>
            {loading && <button 
                onClick={handleAbort}>Cancel</button>}
        </section>
    )
};