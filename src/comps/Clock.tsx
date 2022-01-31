import React, { useState, useEffect } from "react";

import * as Styled from "../media/styled/comps/Clock";
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
        <Styled.Clock>
            <div>
                <Styled.TimeOne>
                    <Styled.Span>{ time.hours }</Styled.Span>
                    <Styled.Span>{ time.minutes }</Styled.Span>
                    <Styled.Span>{ time.seconds }</Styled.Span>
                </Styled.TimeOne>
                <Styled.TimeTwo>
                    <Styled.Span>{ time.hours }</Styled.Span>
                    <Styled.Span>{ time.minutes }</Styled.Span>
                    <Styled.Span>{ time.seconds }</Styled.Span>
                </Styled.TimeTwo>
                <Styled.TimeTwo>
                    <Styled.Span>{ time.hours }</Styled.Span>
                    <Styled.Span>{ time.minutes }</Styled.Span>
                    <Styled.Span>{ time.seconds }</Styled.Span>
                </Styled.TimeTwo>
            </div>
            <Styled.Calendar>
                { date.param }
            </Styled.Calendar>
        </Styled.Clock>
    )
}