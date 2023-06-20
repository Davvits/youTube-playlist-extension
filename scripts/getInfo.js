export default function () {
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
        console.log(video)
        if(!video.classList.contains('ytd-thumbnail-overlay-time-status-renderer'))continue;

        var timeVideo = video.innerText.match(/\d+/g);
        if(timeVideo === null)continue
        

        const arrayTimes = []
        // Converte o timeVideo(Objeto) para array
        for (let i of timeVideo) {
            arrayTimes.push(i)
        }
         console.log(arrayTimes)
        var a = arrayTimes.pop()
        var b = arrayTimes.pop()
        var c = arrayTimes.pop()

       
        if(a) full+= Number(a)
        if(b) full+= Number(b) * 60
        if(c) full+= Number(c) * 60 * 60

  
        //console.log(timeVideo, typeof timeVideo);
        sec = Math.floor(full % 60) 
        min = Math.floor(full / 60 % 60) 
        hour = Math.floor(full / 60 / 60)
        
    }
    return [hour,min,sec,{full}]
}