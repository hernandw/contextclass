import { createContext, useState } from "react";

export const MyContext = createContext()

export const ProviderContext = ({ children }) => {
    const [name, setName] = useState('')
    const numero = 12;




    return (
        <MyContext.Provider value={{name, setName, numero}}>
            {children}
        </MyContext.Provider>
    )
}