import s from '../css/Votes.module.css';
import { useContext, useEffect, useState } from 'react';
import { patchVote } from '../utils/patchers';
import { LoggedInContext } from '../contexts/LoggedIn';

export default function Votes({id, votes}) {

    const [vote, setVote] = useState(votes);
    const [upvoteNext, setUpvoteNext] = useState(true);
    const [err, setErr] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const {loggedin} = useContext(LoggedInContext);

    const voteImage = <img 
        className={s.like}
        title={upvoteNext ? 'Click to like' : 'Undo like'} 
        src='https://img.icons8.com/color/512/approval.png'
    />

    useEffect(() => {
        if (err) {
            alert('We couldn\'t process your like. Please try again!');
            setUpvoteNext(!upvoteNext);
            setVote((curr) => {
                if (upvoteNext) {
                    return curr + 1;
                } else {
                    return curr - 1;
                }
            })
            setErr(!err);
        }
    }, [err]);

    useEffect(() => {
       if (!loggedin) {
        setDisabled(true)
       }
    }, [])

    function disabler() {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        },2500)
    };

    function handleClick() {
        disabler();
        setVote((curr) => {
            if (upvoteNext) {
                return curr + 1
            } else {
                return curr - 1
            }
        });
        setUpvoteNext(!upvoteNext);
        patchVote(id, upvoteNext)
        .then((res) => {
            if (res) setErr(true)
        })
    };

    return (
        <div>
            <div className={s.vote}>
                <span>{!upvoteNext && 'Liked! '}</span>
                <button name='votebutton' id='votebutton' onClick={handleClick} disabled={disabled}>
                    {voteImage}
                </button>
                <span>{vote}</span>
            </div>
        </div>
    )
};