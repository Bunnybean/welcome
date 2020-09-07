import React, { useState } from "react";

import ListContextProvider from "../contexts/ListContext";
import CountList from "../components/CountList";
import ToDoList from "../components/ToDoList";
import ListForm from "../components/ListForm";

const Main = () => {

    setInterval(timeStamp,1000);

    const date = new Date();
    const hour = date.getHours();
    const today = date.getDate();
    const now = date.toLocaleTimeString();
    const month = date.toLocaleString('default', { month: 'long' });
    const weekday = date.toLocaleDateString('default', { weekday: 'long' });
    const [time, setTime] = useState(now);

    let greeting;

    function timeStamp() {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }

    if(hour < 12) {
        greeting = "Good Morning!";
    } else if(hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Night!";
    }

    return (
        <div className="jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{greeting}</h1>
                <p className="time">{month} {today} &nbsp;&nbsp; ️{weekday} &nbsp;&nbsp; ️{time}</p>
                <hr className="hr"/>
                <h3 className="list-title"> To Do List </h3>
                <ListContextProvider>
                    <CountList />
                    <ToDoList />
                    <ListForm />
                </ListContextProvider>
            </div>
        </div>
    );
}

export default Main;