import React, { useState, useEffect } from "react";

import { createApi } from 'unsplash-js';
import Cookies from "universal-cookie";

import "../media/scss/comps/BackgroundImage"

export default function BackgroundImage() {
    const cookies = new Cookies();
    const imageUrl = cookies.get("currentImage");

    const [image, setImage] = useState<string>(imageUrl);
    const [isReady, setReady] = useState<boolean>(false);

    const imageLoaded = () => {
        setReady(true);
    };

    console.log(image);

    useEffect(() => {
        if(!image) {
            const unsplash = createApi({
                accessKey: '9EvNtOEpAgc1giXWCzkHj2w5H3HDTnVcVfEjXQS6CH8'
            });

            unsplash.photos.getRandom({
                featured: true,
                orientation: "landscape",
                contentFilter: "high",
                query: "landscape"
            }).then((jsonData) => {
                if(jsonData && jsonData.response) {
                    const urls = jsonData.response.urls;
                    const imageUrl = urls.full;

                    setImage(imageUrl);

                    let expires = new Date(Date.now() + 1000 * 60 * 15)
                    cookies.set("currentImage", imageUrl, {path : '/', expires : expires})
                }
            });
        }
    });

    return (
        <div
            className={`background${ isReady ? ' ready' : ''}`}>
            <img
                className="image"
                src={ image !== '' ? image : ""}
                alt="Background"
                onLoad={ imageLoaded }
            />
        </div>
    )
}