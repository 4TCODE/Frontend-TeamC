import { createContext, useState } from "react";

export let searchTerm = createContext('')


export function SearchTermProvider(props) {

    const [getTerm, setGetTerm] = useState('')

    return <searchTerm.Provider value={{ getTerm, setGetTerm }}>
        {props.children}
    </searchTerm.Provider>
}