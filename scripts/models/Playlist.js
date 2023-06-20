//export
export default class Playlist {
    constructor(name,videos,seconds){
        this.name = name;
        this.videos = videos;
        this.time = this.getTime(seconds);
        this.seconds = seconds;
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
    getCurrentVideo(){
        for(let video of this.videos){
            if (video.active)return video;
        }
    }
    getTimeLeft() {
        let sec = 0;
        for(let video of this.videos){
            console.log(video.index)
            if(video.active) return this.getTime(this.seconds - sec);
            const timeArray = video.time.match(/\d+/g);;
            
            sec += increaseTime([...timeArray],sec);
        }
        return this.getTime(this.seconds - sec);
    }


       

}

function toArray (obj) {
    var array = []

        for (let i of obj) {
            array.push(i)
        }

        return array;
   }

   function increaseTime(arranjo){
    let count = 0;
    console.log("aqui;>",arranjo)
    let a = arranjo.pop()
    let b = arranjo.pop()
    let c = arranjo.pop()

   
    if(a) count+= Number(a)
    if(b) count+= Number(b) * 60
    if(c) count+= Number(c) * 60 * 60

    return count;
   }

const p = new Playlist("Putx",null,11853);

console.log(p)