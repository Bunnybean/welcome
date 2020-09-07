import React, { useContext } from "react";
import {ListContext} from "../contexts/ListContext";


const ToDoList = () => {

    const {notes, deleteNote} = useContext(ListContext);

    return notes.length ? (
        <div className="note-list">
            <ul>
                { notes.map( note => { return (
                    <li key={note.id} onClick={() => deleteNote(note.id)}>
                        <div className="title">{note.title}</div>
                        <div>{note.content}</div>
                    </li>)
                })}
            </ul>
        </div>
    ) : [];

}

export default ToDoList;