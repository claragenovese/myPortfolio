import React, { useContext, useState } from "react";

const IdContext = React.createContext()

function IdContextProvider({children}){
    const [selectedId, setSelectedId] = useState(null)

    function handleClick(id){
        setSelectedId(id)
    }

    return (
        <IdContext.Provider value={{selectedId, handleClick}}>
            {children}
        </IdContext.Provider>
    )
}

export function useIdContext(){
    const object = useContext(IdContext)
    return object
}

export {IdContextProvider, IdContext}