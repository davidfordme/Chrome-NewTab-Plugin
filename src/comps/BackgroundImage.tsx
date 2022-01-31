import React, { useState, useEffect, MouseEvent } from "react";

import { createApi } from 'unsplash-js';
import Cookies from "universal-cookie";

import { bis } from "../media/styled/comps/BackgroundImage";
interface Image {
    url : string,
    download : string,
    title : string
}

export default function BackgroundImage() {
    const cookies = new Cookies();
    let emptyImage:Image = {
        url: "",
        download : "",
        title: ""
    }
    
    if(cookies.get("currentImage")){
        const imageCookieObject = cookies.get("currentImage").split('::');
        emptyImage = {
            url: (imageCookieObject[0]) ? imageCookieObject[0] : '',
            download: (imageCookieObject[1]) ? imageCookieObject[1] : '',
            title: (imageCookieObject[2]) ? imageCookieObject[2] : ''
        }
    }

    const [image, setImage] = useState<Image>(emptyImage);
    const [isReady, setReady] = useState<boolean>(false);

    const imageLoaded = () => {
        setReady(true);
    };

    const unsplash = createApi({
        accessKey: '9EvNtOEpAgc1giXWCzkHj2w5H3HDTnVcVfEjXQS6CH8'
    });
    
    const downloadImage = (e: MouseEvent) => {
        e.preventDefault();
        
        fetch(image.url, {
            method: "GET",
            headers: {}
        }).then(response => {
            response.arrayBuffer().then(function(buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", image.title);
                document.body.appendChild(link);
                link.click();
            });
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        if(!image.url) {
        
            unsplash.photos.getRandom({
                featured: true,
                orientation: "landscape",
                contentFilter: "high",
                query: "landscape"
            }).then((jsonData) => {
                if(jsonData && jsonData.response) {
                    const urls = jsonData.response.urls;
                    const url = urls.full;
                    const download = jsonData.response.links.download_location;
                    const title = jsonData.response.id;

                    setImage({ url: url, download: download,  title : title});

                    let expires = new Date(Date.now() + 1000 * 60 * 15)
                    cookies.set("currentImage", url + '::' + download + '::' + title, {path : '/', expires : expires})
                }
            });
        }
    });

    return (
        <bis.Background
            className={`background${ isReady ? ' ready' : ''}`}>
            { image.download ? (
                <bis.DownloadButton
                    onClick={ downloadImage }
                    className="downloadBtn"
                    title={ image.title }
                    href={ image.download }
                >
                    Download Image
                </bis.DownloadButton>
            ) : '' }
            <bis.Image
                className="image"
                src={ image.url !== '' ? image.url : ""}
                alt="Background"
                onLoad={ imageLoaded }
            />
        </bis.Background>
    )
}