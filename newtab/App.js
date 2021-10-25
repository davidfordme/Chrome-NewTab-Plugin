import React from "react";
import { render } from "react-dom";

import VisitBar from "./comps/VisitBar";
import Clock from "./comps/Clock";
import BackgroundImage from "./comps/BackgroundImage";
import Shortcuts from "./comps/Shortcuts";

const App = () => {

    return (
        <div>
            <VisitBar />
            <BackgroundImage />
            <Clock />
            <Shortcuts />
        </div>
    )
}

render(<App />, document.getElementById("root"));