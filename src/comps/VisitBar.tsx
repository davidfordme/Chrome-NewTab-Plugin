import React, { useRef, useState } from "react";

import * as Styled from "../media/styled/comps/VisitBar";

import { QuickLinks } from "../data/QuickLinks";

export default function VisitBar() {
    const search = useRef(null);
    const [ query, updateQuery ] = useState<string>("");

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        updateQuery(e.currentTarget.value);
    })

    const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
        
        if (QuickLinks[query]) {
            e.preventDefault();
            window.open(QuickLinks[query], "_self");
        } else {
            if(query.includes("http")) {
                e.preventDefault();
                window.open(query, "_self");
            } else if(query.includes("www.")) {
                e.preventDefault();
                window.open("https://" + query, "_self");
            }
        }
    })

    return (
        <Styled.Form
            action="https://www.google.com/search"
            id="visit-bar"
            className="visit-bar"
            onSubmit={ handleSubmit }>
            <Styled.Input
                className="gcse-searchbox"
                name="q"
                placeholder="Google me"
                autoComplete="true"
                onChange={ handleChange }
                ref={ search }
            />
        </Styled.Form>
    )
}