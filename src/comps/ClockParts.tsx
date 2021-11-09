import React, { useState, useEffect } from "react";

interface Time {
    hours : string,
    minutes : string,
    seconds : string,
    class? : string
}

export default function ClockParts(time : Time) {
    
    return (
        <div className={ `base${ time.class ? ' ' + time.class : '' }` }>
            <span className="hours">{ time.hours }</span>
            <span className="minutes">{ time.minutes }</span>
            <span className="seconds">{ time.seconds }</span>
        </div>
    )
}