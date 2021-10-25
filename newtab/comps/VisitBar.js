import React, { useRef, useEffect } from "react";

import quickLinks from "../data/QuickLinks";

const VisitBar = () => {
    const search = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            console.log("FOCUS");
            search.current.focus();
        }, 500);
    }, [])

    const handleSubmit = ((e) => {
        const query = e.target[0].value;

        console.log(quickLinks[query]);

        if (quickLinks[query]) {
            e.preventDefault();
            window.open(quickLinks[query], "_self");
        }

        if(String(query).includes("http")) {
            e.preventDefault();
            window.open(query, "_self");
        } else if(String(query).includes("www.")) {
            e.preventDefault();
            window.open("https://" + query, "_self");
        }
    })

    return (
        <form
            action="https://www.google.com/search"
            id="visit-bar"
            className="visit-bar"
            onSubmit={ handleSubmit }>
            <input
                className="gcse-searchbox"
                name="q"
                placeholder="Google me"
                autoComplete="true"
                ref={ search }
            />
        </form>
    )
}

export default VisitBar;