import React, { useState, useEffect } from "react";
import ClockParts from "./ClockParts";

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

    let newDate : Date = { param: today.toLocaleDateString("en-GB", options) };
    return newDate;
}

export default function Clock() {
    
    const [ newTime, setNewTime ] = useState<Time>(updateTime());
    const [ date ] = useState<Date>(updateDate());

    useEffect(() => {
        setTimeout(() => {
            setNewTime(updateTime());
        }, 1000);
    }, [newTime]);

    return (
        <div className="clock">
            <div className="time">
                <ClockParts class="top" hours={ newTime.hours } minutes={ newTime.minutes } seconds={ newTime.seconds } />
                <ClockParts class="bottom" hours={ newTime.hours } minutes={ newTime.minutes } seconds={ newTime.seconds } />
            </div>
            <div className="calendar">
                { date.param }
            </div>
        </div>
    )
}