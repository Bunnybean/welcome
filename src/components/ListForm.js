import React, { useContext, useState } from "react";
import {ListContext} from "../contexts/ListContext";

const ListForm = () => {

    const {addNote} = useContext(ListContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(title, content);
        setTitle("");
        setContent("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title}
                   onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Details" value={content}
                   onChange={(e) => setContent(e.target.value)} required />
            <button type="button" className="btn btn-light add-button btn-sm">Add List</button>
        </form>
    );

}

export default ListForm;