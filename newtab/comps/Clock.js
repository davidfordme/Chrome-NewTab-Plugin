import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState({ hours : "00", minutes : "00", seconds : "00" });
    const [date, setDate] = useState("-");

    const prependTime = (value) => {
        return (value < 10) ? '0' + value : value
    }

    useEffect(() => {

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today  = new Date();

        setDate(today.toLocaleDateString("en-GB", options))

        setTimeout(() => {
            const date = new Date();

            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            setTime({ hours : prependTime(h), minutes : prependTime(m), seconds : prependTime(s) })
        }, 1000);
    })

    return (
        <div className="clock">
            <div className="time">
                <h1>
                    <span>{ time.hours }</span>
                    <span>{ time.minutes }</span>
                    <span>{ time.seconds }</span>
                </h1>
                <h2>
                    <span>{ time.hours }</span>
                    <span>{ time.minutes }</span>
                    <span>{ time.seconds }</span>
                </h2>
                <h2>
                    <span>{ time.hours }</span>
                    <span>{ time.minutes }</span>
                    <span>{ time.seconds }</span>
                </h2>
            </div>
            <div className="calendar">
                { date }
            </div>
        </div>
    )
}

export default Clock;