import { createContext, useContext, useState } from 'react'
import { posts } from '../App';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [posts, setPosts] = useState(posts)

    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
}


export { GlobalProvider, useGlobalContext }