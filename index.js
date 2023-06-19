const btn = document.querySelector("#btn")



const fun = () => {
    document.body.style.background = "red";

    //container with playlist videos
    var playlistVideos = null;
    document.querySelectorAll("#items").forEach(item => {
            if(item.classList.contains("playlist-items")) playlistVideos = item;
        })
    console.log(playlistVideos)


    var videosOnPlaylist = playlistVideos.querySelectorAll('.ytd-thumbnail-overlay-time-status-renderer');

    var sec = 0, min = 0, hour = 0;
    var full = 0

    for(var video of videosOnPlaylist){
        if(!video.classList.contains('ytd-thumbnail-overlay-time-status-renderer'))continue;

        var timeVideo = video.innerText.match(/\d+/g);
        if(timeVideo === null)continue
        

        const arrayTimes = []
        // Converte o timeVideo(Objeto) para array
        for (let i of timeVideo) {
            arrayTimes.push(i)
        }
        
        var a = arrayTimes.pop()
        var b = arrayTimes.pop()
        var c = arrayTimes.pop()


        if(a) full+= Number(a)
        if(b) full+= Number(b) * 60
        if(c) full+= Number(c) * 60 * 60

  
        //console.log(timeVideo, typeof timeVideo);
        sec = full % 60
        min = full / 60 % 60 
        hour = full / 60 / 60
        return [hour,min,sec,{full}]
    }

}

btn.addEventListener("click", async ()=>{
    console.log("test")
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.scripting
        .executeScript({
            target: { tabId: tab.id},
            function: fun
        })
        .then((injection) => {
            console.log(injection)
            console.log(injection[0].result)
        })
})



