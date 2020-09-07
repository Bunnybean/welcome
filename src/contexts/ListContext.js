import React, { createContext, useState, useEffect } from "react";
import { v1 as uuid } from "uuid";

export const ListContext = createContext();

const ListContextProvider = (props) => {

    const readNotes = () => {
        const localData = localStorage.getItem("notes");
        return localData ? JSON.parse(localData) : [];
    }

    const [notes, setNote] = useState(readNotes);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]);

    const addNote = (title, content) => {
        setNote([...notes, {title: title, content: content, id: uuid()}]);
    }

    const deleteNote = (id) => {
        setNote(notes.filter(note => note.id !== id ));
    }

    return(
        <ListContext.Provider value={{notes, addNote, deleteNote}}>
            {props.children}
        </ListContext.Provider>
    );
}

export default ListContextProvider;