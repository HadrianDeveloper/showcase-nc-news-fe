import s from '../css/TopicFilter.module.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchTopics } from "../utils/fetchers"

export default function TopicFilter() {
    
    const navigate = useNavigate();
    const [currTopics, setCurrTopics] = useState([]);

    useEffect(() => {
        fetchTopics()
        .then((topics) => {
            setCurrTopics(topics);
        })
    }, []);

    function handleSelect(e) {
        const filter = e.target.value;
        navigate(`/articles/topic/${filter}`);
    };

    return (
        <section className={s.selectBox}>
            <select defaultValue='' onChange={handleSelect} className={s.option}>
                <option value={''} disabled>Pick a topic</option>
                {currTopics.map((topic, i) => 
                    <option value={topic} key={i}>
                        {topic}
                    </option>
                )}
            </select>
        </section>
    )
};