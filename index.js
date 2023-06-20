import getInfo from "./scripts/getInfo.js";
import Playlist from "./scripts/models/Playlist.js";

const btn = document.querySelector("#btn")
const timer = document.querySelector("#timer")
const title = document.querySelector("#pl-name")

btn.addEventListener("click", async ()=>{
    console.log("test")
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.scripting
        .executeScript({
            target: { tabId: tab.id},
            function: getInfo
        })
        .then((injection) => {
            console.log(injection)
            console.log(injection[0].result)
            const { result } = injection[0]
            updatePopup(new Playlist(result.playlist_title,result.array_videos,result.seconds))
        })
})


function updatePopup(playlist) {
    timer.innerText = playlist.time
    title.innerText = playlist.name
}



