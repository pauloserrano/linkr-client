import { createContext, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        pictureUrl: 'https://picsum.photos/200/200'
    })

    return <GlobalContext.Provider value={{ user, setUser }}>
        {children}
    </GlobalContext.Provider>
}

export { GlobalContextProvider, GlobalContext }