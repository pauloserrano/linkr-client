import { createContext, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [follows, setFollows] = useState()

    return <GlobalContext.Provider value={{ user, setUser, follows, setFollows }}>
        {children}
    </GlobalContext.Provider>
}

export { GlobalContextProvider, GlobalContext }