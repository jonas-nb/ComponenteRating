import { createContext, useState } from 'react'

export const MyContext = createContext()

export const GlobalStorage = ({ children }) => {
    const [rating, setRating] = useState(0)
    console.log(rating)
    return (
        <MyContext.Provider value={{ rating, setRating }}>
            {children}
        </MyContext.Provider>
    )
}
