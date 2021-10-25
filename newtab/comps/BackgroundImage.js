import React, { useState, useEffect } from "react";

import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';
import Cookies from "universal-cookie";

const BackgroundImage = () => {
    const [image, setImage] = useState("");
    const [classes, setClasses] = useState("background");

    const unsplash = createApi({
        accessKey: '9EvNtOEpAgc1giXWCzkHj2w5H3HDTnVcVfEjXQS6CH8',
        fetch: nodeFetch,
    });

    const cookies = new Cookies();

    useEffect(() => {

        const imageUrl = cookies.get("currentImage");

        if(!imageUrl && image === "") {

            const params = {
                featured: true,
                orientation : "landscape",
                content_filter : "high",
                query : "landscape"
            };

            unsplash.photos.getRandom(params).then((jsonData) => {
                const image = jsonData.response;
                const urls = image.urls;

                const imageUrl = urls.full;

                setImage(imageUrl);
                setClasses("background ready");

                let now = new Date();
                const timeOffset = (1 * 60 * 60 * 1000) / 4; // 15 minutes
                now.setTime(now.getTime() + timeOffset);

                cookies.set("currentImage", imageUrl, {path : '/', expires : now})
                setClasses("background ready");
            });
        } else {
            setImage(imageUrl);
            setTimeout(() => {
                setClasses("background ready");
            }, 500)
        }

    });

    return (
        <div
            className={ classes }>
            <div
                className="image"
                style={{ backgroundImage: "url(" + image + ")" }}
            ></div>
        </div>
    )
}

export default BackgroundImage;