import React, { useContext, useState } from "react";

const IdContext = React.createContext()

function IdContextProvider({children}){
    const [selectedProjectId, setSelectedProjectId] = useState(null)

    return (
        <IdContext.Provider value={{selectedProjectId, setSelectedProjectId}}>
            {children}
        </IdContext.Provider>
    )
}

export function useIdContext(){
    const object = useContext(IdContext)
    return object
}

export {IdContextProvider, IdContext}