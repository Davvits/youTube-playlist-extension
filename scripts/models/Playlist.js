export default class Playlist {
    constructor(){
        this.items = null;
    }

    init (){
        this.items = document.querySelectorAll("#items").forEach(item => {
            console.log(item)
            if(item.classList.contains("playlist-items"))return item
        });
    }
}