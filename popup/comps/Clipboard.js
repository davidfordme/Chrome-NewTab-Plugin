import React from "react";

const Clipboard = ({ clips }) => {
    return (
        <div className="clipboard">
            <h3>Clipboard</h3>
            { clips.map(clip => (
                <a className="clip" data-value={ clip.value }>
                    { clip.title }
                </a>
            )) }
        </div>
    )
}

export default Clipboard