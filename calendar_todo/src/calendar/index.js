import React, { useState, useEffect } from "react";
import moment from "moment";
import "./styles.css";
import dayStyles from "./styles";
import Header from "./header";

import buildCalendar from "./build";

import ToDoListApp from "../todo/todolistapp";

export default function Calendar() {

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        
        setCalendar(buildCalendar(value));
    }, [value]);
    
    return (
        <div className="calendar">
            <Header value={value} setValue={setValue} />
            <div className="body">
                <div className="day-names">
                    {
                        ["s", "m", "t", "w", "t", "f", "s"].map((d) => (
                            <div className="week">{d}</div>
                        )) 
                    }
                </div>
                {calendar.map((week) => (
                        <div>
                            {week.map((day) => (
                                <div className="day" onClick={() => setValue(day)}>
                                    <div className={dayStyles(day, value)}>
                                        {day.format("D").toString()}
                                    </div>
                                    
                                </div>

                            ))}
                        </div>
                    ))}
            </div>
            <ToDoListApp />
        </div>
    );
}