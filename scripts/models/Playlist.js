//export
export default class Playlist {
    constructor(name,videos,seconds){
        this.name = name;
        this.videos = videos;
        this.time = this.getTime(seconds);
    }

    getTime (seconds) {
        let seg = Math.floor(seconds % 60);
        let min = Math.floor(seconds / 60 % 60) ;
        let h = Math.floor(seconds / 60 / 60) ;

        if(seg <= 9) seg = "0"+seg;
        if(min <= 9) min = "0"+min;
        if(h <= 9) h = "0"+h;

        return `${h}:${min}:${seg}`;
    }

}

const p = new Playlist("Putx",null,11853);

console.log(p)