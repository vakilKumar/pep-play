// var select_btn = document.querySelector(".playlist_btn")

// // console.log(song_select)

// select_btn.addEventListener("click", (e)=>{
    

// })



var play_song = new Audio()
var song_select = document.querySelectorAll(".song")
var play = document.querySelectorAll(".play")
var playlist_play_btn = document.querySelector(".playlist_play_btn")

var p1 = document.getElementById("1")
var p2 = document.getElementById("2")
var p3 = document.getElementById("3")
var p4 = document.getElementById("4")
var p5 = document.getElementById("5")
var p6 = document.getElementById("6")
var p7 = document.getElementById("7")

p1.addEventListener("click", pass_song1)
p2.addEventListener("click", pass_song2)
p3.addEventListener("click", pass_song3)
p4.addEventListener("click", pass_song4)
p5.addEventListener("click", pass_song5)
p6.addEventListener("click", pass_song5)
playlist_play_btn.addEventListener("click", replaceArray)
// p7.addEventListener("click", pass_song6)


const song_arr = [];
console.log(song_arr);

function pass_song1()
{
    song_arr.push(song_select[0].innerHTML)
    console.log(song_arr)
}

function pass_song2()
{
    song_arr.push(song_select[1].innerHTML)
    console.log(song_arr)
}
function pass_song3()
{
    song_arr.push(song_select[2].innerHTML)
    console.log(song_arr)
}
function pass_song4()
{
    song_arr.push(song_select[3].innerHTML)
    console.log(song_arr)
}
function pass_song5()
{
    song_arr.push(song_select[4].innerHTML)
    console.log(song_arr)
}
function pass_song6()
{
    song_arr.push(song_select[5].innerHTML)
    console.log(song_arr)
}

function replaceArray()
{
    // for(var i=0; i<song_arr.length; i++)
    // {
    //     play_song.src = song_arr[i]
    //     play_song.play()
    //     // playsong.srcsong_arr[i]);
    // }
}
