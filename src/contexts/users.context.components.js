import {createContext, useEffect, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext(null);
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}
    useEffect(() => {
        return onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
    }, [])
    return (<UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};