import React from "react";
import { render } from "react-dom";

import Clipboard from "./comps/Clipboard"
import clips from "./data/Clips";

const App = () => {

    return (
        <div>
            <Clipboard clips={clips} />
        </div>
    )
}

render(<App />, document.getElementById("root"));