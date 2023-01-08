import { createContext, useState } from "react";
export const LoggedInContext = createContext()


export function LoggedInProvider({children}) {
    const [loggedin, setLoggedin] = useState('Zelenski');
    return (
        <LoggedInContext.Provider value={{loggedin, setLoggedin}}>
            {children}
        </LoggedInContext.Provider>
    )
};