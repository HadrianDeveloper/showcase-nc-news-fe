import s from '../css/Home.module.css';
import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedIn";


export default function Home() {
    
    const {loggedin} = useContext(LoggedInContext);

    if (!loggedin) return <p>Welcome!</p>
    
    return (
        <main className={s.loadingBody}>
            <p>Welcome {loggedin.username}!</p>
            <img src={loggedin.avatar_url} alt={"User's avatar"} />
        </main>
    )
};