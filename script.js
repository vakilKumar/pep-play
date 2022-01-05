// Akash JS

// var select_btn = document.querySelector(".playlist_btn")

// // console.log(song_select)

// select_btn.addEventListener("click", (e)=>{
    

// })
var song_select = document.querySelectorAll(".song")
var play = document.querySelectorAll(".play")
var playlist_play_btn = document.querySelector(".playlist_play_btn")
var playlist_dialog_open = document.querySelector(".playlist_dialog_open")
var close_dialog =  document.querySelector(".close")

var p1 = document.getElementById("21")
var p2 = document.getElementById("22")
var p3 = document.getElementById("23")
var p4 = document.getElementById("24")
var p5 = document.getElementById("25")
var p6 = document.getElementById("26")
var p7 = document.getElementById("27")

function dialog_display()
{
    document.querySelector(".dialog_main").style.display= "flex"
}

function close_Dialogbox()
{
    document.querySelector(".dialog_main").style.display= "none"
}

playlist_dialog_open.addEventListener("click", dialog_display)
p1.addEventListener("click", pass_song1)
p2.addEventListener("click", pass_song2)
p3.addEventListener("click", pass_song3)
p4.addEventListener("click", pass_song4)
p5.addEventListener("click", pass_song5)
p6.addEventListener("click", pass_song5)
close_dialog.addEventListener("click", close_Dialogbox)

// document.addEventListener('DOMContentLoaded', function () {
//     playlist_play_btn.addEventListener("click", replaceArrayy)
// });

if(playlist_play_btn){
    playlist_play_btn.addEventListener('click', replaceArrayy);
  }

// p7.addEventListener("click", pass_song6)


const song_arr = ["songs\\Alan_Walker,_Sabrina_Carpenter_&_Farruko__-_On_My_Way(256k).mp3", "songs\\Alan_Walker_-_Faded(256k).mp3", "songs\\Believer_song_in_english(256k).mp3", 
"songs\\Ed_Sheeran_-_Shape_of_You_[Official_Video](256k).mp3", "songs\\In_The_End_(Official_Video)_-_Linkin_Park(256k).mp3", "songs\\Justin+Bieber+-+Baby(128k).mp3", 
"songs\\Marshmello_&_Anne-Marie_-_FRIENDS_(Music_Video)_OFFICIAL_FRIENDZONE_ANTHEM(256k).mp3", "songs\\Shakira_-_Bamboo(256k).mp3", "songs\\Shawn_Mendes,_Camila_Cabello_-_Señorita(256k).mp3"];

const user_selected_song = []

let ui_song= ["ui_song\\Bom_Diggy_Diggy.mp3" ,"ui_song\\Bulleya.mp3" ,"ui_song\\Sadda_Haq.mp3", "ui_song\\ILLEGAL_WEAPON.mp3", "ui_song\\Pani_Da_Rang.mp3", "ui_song\\Lamberghini.mp3", "ui_song\\Challa.mp3", "ui_song\\Sher_Aaya_Sher.mp3", "ui_song\\Sadi_Gali.mp3"]



var audioo = new Audio();

function pass_song1()
{
    user_selected_song.push(song_arr[0])
    console.log(user_selected_song);
    p1.value= "Song Added"

}

function pass_song2()
{
    user_selected_song.push(song_arr[1])
    console.log(user_selected_song);
    p2.value= "Song Added"
}
function pass_song3()
{
    user_selected_song.push(song_arr[2])
    console.log(user_selected_song);
    p3.value= "Song Added"
}
function pass_song4()
{
    user_selected_song.push(song_arr[3])
    console.log(user_selected_song);
    p4.value= "Song Added"
}
function pass_song5()
{
    user_selected_song.push(song_arr[4])
    console.log(user_selected_song);
    p5.value= "Song Added"
}
function pass_song6()
{
    user_selected_song.push(song_arr[5])
    console.log(user_selected_song);
    p6.value= "Song Added"
}

function replaceArrayy()
{
    
    ui_song=[];
    
    for(var i=0; i<user_selected_song.length; i++)
    {
        ui_song.push(user_selected_song[i])
    }
    console.log(ui_song);
    document.querySelector(".dialog_main").style.display= "none"
}

let songIndex = 0;
// let audioElement = new Audio("ui_song\\Bom_Diggy_Diggy.mp3");
let audioElement = new Audio();
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progress-bar");
let songItem = Array.from(document.getElementsByClassName("song-item"))
let masterSongName = document.getElementById("masterSongName")


let songs = [
    {songName:"Bom_Diggy_Diggy.mp3", filePath:"songs\\1.mp3", coverPath:"covers\\1.jpg"},
    {songName:"Bulleya.mp3", filePath:"songs\\2.mp3", coverPath:"covers\\2.jpg"},
    {songName:"Sadda_Haq.mp3", filePath:"songs\\3.mp3", coverPath:"covers\\3.jpg"},
    {songName:"ILLEGAL_WEAPON.mp3", filePath:"songs\\4.mp3", coverPath:"covers\\4.jpg"},
    {songName:"Pani_Da_Rang.mp3", filePath:"songs\\5.mp3", coverPath:"covers\\5.jpg"},
    {songName:"Lamberghini.mp3", filePath:"songs\\6.mp3", coverPath:"covers\\6.jpg"},
    {songName:"Challa.mp3", filePath:"songs\\7.mp3", coverPath:"covers\\7.jpg"},
    {songName:"Sher_Aaya_Sher.mp3", filePath:"songs\\8.mp3", coverPath:"covers\\8.jpg"},
    {songName:"Sadi_Gali.mp3", filePath:"songs\\9.mp3", coverPath:"covers\\9.jpg"},
]
 
songItem.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songName

})
// audioElement.play()
// Handle Master play click events
if(masterPlay){
    masterPlay.addEventListener("click", ()=>{
        if(audioElement.paused || audioElement.currentTime == 0){
            audioElement.src= ui_song[songIndex]
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        }else{
             audioElement.pause()
             masterPlay.classList.remove("fa-pause-circle");
             masterPlay.classList.add("fa-play-circle");
        }
    })
  }

// masterPlay.addEventListener("click", ()=>{
//     if(audioElement.paused || audioElement.currentTime == 0){
//         audioElement.play();
//         masterPlay.classList.remove("fa-play-circle");
//         masterPlay.classList.add("fa-pause-circle");
//     }else{
//          audioElement.pause()
//          masterPlay.classList.remove("fa-pause-circle");
//          masterPlay.classList.add("fa-play-circle");
//     }
// })


// Listen Event
audioElement.addEventListener("timeupdate",() =>{
// Update SeekBar

  let  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

if(progressBar)
{
    progressBar.addEventListener("change", ()=>{
        audioElement.currentTime = progressBar.value * audioElement.duration/100;
    })
}


// progressBar.addEventListener("change", ()=>{
//     audioElement.currentTime = progressBar.value * audioElement.duration/100;
// })
const playAll = () =>{
    Array.from(document.getElementsByClassName("play-song")).forEach((element) =>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })
}

Array.from(document.getElementsByClassName("play-song")).forEach((element) =>{
element.addEventListener("click", (e) =>{
    playAll();
    
    songIndex = parseInt(e.target.id)
    e.target.classList.remove("fa-play-circle")
    e.target.classList.add("fa-pause-circle")

    // audioElement.src= `songs\\${songIndex+1}.mp3`
    audioElement.src= ui_song[songIndex+1]

    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");   
})
})

if(document.getElementById("next"))
{
    document.getElementById("next").addEventListener("click",()=>{
        if(songIndex>8){
            songIndex=0;
        }else{
            songIndex += 1;
        }
        // audioElement.src= `songs\\${songIndex+1}.mp3`
        audioElement.src= ui_song[songIndex+1]
    
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    
    })
}

// document.getElementById("next").addEventListener("click",()=>{
//     if(songIndex>8){
//         songIndex=0;
//     }else{
//         songIndex += 1;
//     }
//     // audioElement.src= `songs\\${songIndex+1}.mp3`
//     audioElement.src= ui_song[songIndex+1]

//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove("fa-play-circle");
//     masterPlay.classList.add("fa-pause-circle");

// })

if(document.getElementById("previous"))
{
    document.getElementById("previous").addEventListener("click",()=>{
        if(songIndex<=0){
            songIndex=0;
        }else{
            songIndex -= 1;
        }
        // audioElement.src= `songs\\${songIndex+1}.mp3`;
        audioElement.src= ui_song[songIndex+1]
    
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    
    })
}

// document.getElementById("previous").addEventListener("click",()=>{
//     if(songIndex<=0){
//         songIndex=0;
//     }else{
//         songIndex -= 1;
//     }
//     // audioElement.src= `songs\\${songIndex+1}.mp3`;
//     audioElement.src= ui_song[songIndex+1]

//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove("fa-play-circle");
//     masterPlay.classList.add("fa-pause-circle");

// })




