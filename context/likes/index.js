import { createContext, useContext, useState } from "react";

const INITIAL_STATE = {
    likes: 0,
    handleLike: () => {}
}

export const LikesContext = createContext(INITIAL_STATE);

export default function LikesProvider({ children }) {
    const [likes, setLikes] = useState(INITIAL_STATE.likes);

    const handleLike = () => {
        let newLikes = likes + 1;
        setLikes(newLikes);
    }

    const value = { likes, handleLike };

    return (
        <LikesContext.Provider value={value}>
            {children}
        </LikesContext.Provider>
    )
}

export function useLikes() {
    const context = useContext(LikesContext);

    return context;
}