import { useContext } from "react"
import { LoggedInContext } from "../contexts/LoggedIn"

export default function Home() {
    const {loggedin} = useContext(LoggedInContext)

    return (
        <main>
            <p>Welcome {loggedin}!</p>
        </main>
    )
};