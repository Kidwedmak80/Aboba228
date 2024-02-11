const video=document.getElementById ("Ultrakill")
function play() {
    if (video.paused) {
        video.play()
    }
    else {
        video.pause()
    }
}
function mute() {
    if (video.muted) {
        video.muted=false
    } else {
        video.muted=true
    }
}
let playlist = ["Ultrakill","vind"]
let num=0
function next() {
    num=num+1
    console.log(num)
    video.src=`video/${playlist[num]}.mp4`
    if (num < playlist.length-1){
        num=num+1
    } else {
        num=0
    }
}
function prev () {
    num=num-1
    console.log(num)
    video.src=`video/${playlist[num]}.mp4`
}