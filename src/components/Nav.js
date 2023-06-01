import s from '../css/Nav.module.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { LoggedInContext } from '../contexts/LoggedIn';


export default function Nav() {

    const {loggedin} = useContext(LoggedInContext)

    return (
        <div>
            <hr />
            <nav className={s.navvv} >
                <Link className={s.navlink} to='/'>Home</Link>
                <Link className={s.navlink} to='/articles'>Articles</Link>
                <Link className={s.navlink} to='/login'>{loggedin ? 'Log out' : 'Log in'}</Link>
                {loggedin && (
                    <Link className={s.navlink} to='/upload'>Upload spike</Link>
                )}
                
            </nav>
            <hr />
        </div>
    )
};

