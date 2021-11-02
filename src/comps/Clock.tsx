import React, { useState, useEffect } from "react";

import "../media/scss/comps/clock"

interface Time {
    hours: string,
    minutes: string,
    seconds: string,
}

interface Date {
    param: string
}

const prependTime = (value: number) => {
    return (value < 10) ? '0' + String(value) : String(value);
}

const updateTime = () => {

    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let newTime: Time = {
        hours: prependTime(h),
        minutes: prependTime(m),
        seconds: prependTime(s)
    };

    return newTime;
}

const updateDate = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();

    let newDate: Date = { param: today.toLocaleDateString("en-GB", options) };
    return newDate;
}

export default function Clock() {
    
    const [ time, setTime ] = useState<Time>(updateTime());
    const [ date ] = useState<Date>(updateDate());

    useEffect(() => {
        setTimeout(() => {
            setTime(updateTime());
        }, 1000);
    }, [time]);

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
                { date.param }
            </div>
        </div>
    )
}