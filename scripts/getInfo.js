export default function () {
    //vai armazenar o total de segundos de uma playlist
    var full = 0

    //Container do painel da Playlist (como um todo)
    var container_painel = null;

    document.querySelectorAll("#container").forEach(container => {
        if(container.classList.contains("ytd-playlist-panel-renderer")) container_painel = container;
    });


    //container com os videos (dentro do painel)
    var container_videos = null;
    container_painel.querySelectorAll("#items").forEach(item => {
            if(item.classList.contains("playlist-items")) container_videos = item;
        })
    
    //box de cada video
    var videos_container = container_videos.querySelectorAll("#container");
    //array que vai ser retornado com um a array de obj do tipo video
    var array_videos = []

    //Iterar sobre os videos somando os segundos de cada video e add um tipo video no array    
    for(var video of videos_container){
        var timeStamp_container = video.querySelector('#text');
        var title = video.querySelector("#video-title").title;
        //remove não digitos do timestamp
        var timeStamp_object = timeStamp_container.innerText.match(/\d+/g);

        var timeStamp_array = toArray(timeStamp_object);

        //converte o timestamp em segundo e soma ao "full"
        increaseTime(timeStamp_array);
        
        // boleano se diz que x video está sendo assistido
        current_video = video.parentElement.parentElement.hasAttribute("selected");

        array_videos.push(createVideo(title,timeStamp_container.innerText,current_video));
    }


    var playlist_title = container_painel.querySelector("yt-formatted-string").innerText;
    console.log(playlist_title,array_videos)

    return {
        playlist_title,
        array_videos,
        seconds : full

    }


    //Funçõoes Uteis


   function createVideo(nome,time,active){
        return {
            nome,
            time,
            active
        }
   }

   function toArray (obj) {
    var array = []

        for (let i of obj) {
            array.push(i)
        }

        return array;
   }

   function increaseTime(arrayTimes){
    var a = arrayTimes.pop()
    var b = arrayTimes.pop()
    var c = arrayTimes.pop()

   
    if(a) full+= Number(a)
    if(b) full+= Number(b) * 60
    if(c) full+= Number(c) * 60 * 60
   }
   
}

