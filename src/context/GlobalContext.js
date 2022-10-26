import { createContext, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    return <GlobalContext.Provider value={{ user, setUser }}>
        {children}
    </GlobalContext.Provider>
}

export { GlobalContextProvider, GlobalContext }