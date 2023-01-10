import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedIn";
import { Link } from "react-router-dom";


export default function Nav() {

 const {loggedin} = useContext(LoggedInContext);

    return (
        <div>
            <hr />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/articles'>Articles</Link>
                <Link to='/login'>{loggedin ? 'Log out' : 'Log in'}</Link>
            </nav>
            <hr />
        </div>
    )
};