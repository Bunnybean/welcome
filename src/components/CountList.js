import React, { useContext } from "react";
import {ListContext} from "../contexts/ListContext";

const CountList = () => {
    const { notes } = useContext(ListContext);
    //console.log({notes});

    return notes.length ? (
        <div>
            <p className="task-count">Currently, you have <span>{notes.length} lists</span> to get things done.</p>
        </div>
    ) : (<div className="task-count empty"> Great job! You cleared your tasks!! </div>);
}

export default CountList;