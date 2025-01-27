import { createContext, useContext, useState } from 'react'
import { posts } from '../App';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [post, setPost] = useState(posts)

    return (
        <GlobalContext.Provider value={{ post }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
}


export { GlobalProvider, useGlobalContext }