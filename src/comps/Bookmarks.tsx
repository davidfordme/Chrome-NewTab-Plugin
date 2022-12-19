import { useEffect, useState } from "react";
import * as Styled from "../media/styled/comps/Bookmarks";
import { BookmarksExample } from "../data/BookmarksExample"

export default function Bookmarks() {

    const devMode = true;
    
    const [bookmarksBar, setBookmarksBar] = useState([]);

    function parseBookmarks(data) {
        if(data.length > 0 && data[0].children) {
            const allBookmarks = data[0].children;

            allBookmarks.forEach(category => {
                if(category.title === 'Bookmarks bar' && category.children.length > 0) {
                    console.log(category.children)
                    setBookmarksBar(category.children)
                }
            });
        }
    }

    useEffect(() => {
        if(devMode) setBookmarksBar(BookmarksExample)
        else chrome.bookmarks.getTree(parseBookmarks)
    }, [])

    const currentTab = (url : string) => {
        chrome.tabs.update({url: url});
    }

    return (
        <Styled.Bookmarks className={ (bookmarksBar.length > 0) ? "in" : "" }>
            { bookmarksBar.map(element => {
                    return (
                        <a href={ element.url } onClick={ () => currentTab(element.url) } title={ element.title }>
                            <img alt={ element.title } src={ `https://s2.googleusercontent.com/s2/favicons?domain=` + element.url } />{ element.title }
                        </a>
                    )
                }
            )}
        </Styled.Bookmarks>
    )
}