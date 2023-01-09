import { useEffect, useState } from 'react';
import s from '../css/Votes.module.css';
import { patchVote } from '../utils/patchers';

export default function Votes({id, votes}) {

    const [vote, setVote] = useState(votes);
    const [upvoteNext, setUpvoteNext] = useState(true);
    const [err, setErr] = useState(false);
    const [disabled, setDisabled] = useState(false);

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

    function disabler() {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        },2500)
    };

    function handleClick() {
        disabler()
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
                    <img 
                        className={s.like}
                        title={upvoteNext ? 'Click to like' : 'Undo like'} 
                        src='https://img.icons8.com/color/512/approval.png'
                         />
                </button>

                <span>
                    {vote}
                </span>
            </div>
        </div>
    )

    // return (
    //     <div>
    //         <div className={s.vote}>
    //             <span>{!upvoteNext && 'Liked!'}</span>
    //             <img 
    //                 className={s.like}
    //                 title={upvoteNext ? 'Click to like' : 'Undo like'} 
    //                 src='https://img.icons8.com/color/512/approval.png'
    //                 onClick={handleClick} />
    //             <span>
    //                 {vote}
    //             </span>
    //         </div>
    //     </div>
    // )
};