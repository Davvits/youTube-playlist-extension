import getInfo from "./scripts/getInfo.js";
import Playlist from "./scripts/models/Playlist.js";

const timer = document.querySelector("#timer")
const title = document.querySelector("#pl-name")
const timeLeft = document.querySelector("#time-left")
const imgVideo = document.querySelector("#img")
const nameMusic = document.querySelector("#name-music")
const index_currentVideo = document.querySelector("#index-videos");


function updatePopup(playlist) {
    const currentVideo = playlist.getCurrentVideo();
    const tamanho = playlist.videos.length;
    timer.innerText = playlist.time;
    title.innerText = playlist.name;
    timeLeft.innerText = playlist.getTimeLeft();
    imgVideo.setAttribute("src",currentVideo.thumbnail);
    nameMusic.innerText = currentVideo.nome;
    index_currentVideo.innerText =  `${currentVideo.index}/${tamanho}`
}


const init =  async () => {
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
            
            if(result.playlist_title === null) return;

            updatePopup(new Playlist(result.playlist_title,result.array_videos,result.seconds))
        })
}

init();