let play = document.getElementById('playButton');
let next = document.getElementById('nextButton');
let previous = document.getElementById('previousButton');
let music = document.querySelector('audio');
let songTitle = document.getElementById('songTitle');
let artistName = document.getElementById('artistName');
let nextSong = document.getElementById('nextSong');
let cover = document.getElementById('coverImage');
let songIndex = 0;
let playList = [];



fetch("/Web D/Music App/songs.json").then((response)=>{
  return response.json();
}).then((data) =>{ 
   console.log(data);
   playList = data.songs
  })




window.onload = ()=>{
   songTitle.innerText=playList[songIndex].title;
   artistName.innerText=playList[songIndex].artist;
   music.setAttribute('src',playList[songIndex].source);
   nextSong.innerText = playList[songIndex+1].title;
   cover.setAttribute('src',playList[songIndex].coverImage);
}


function playmusic(){
    if(play.innerText.localeCompare('play_circle_outline')==0){
      play.innerHTML="pause_circle_outline";
      music.play();
    }
    else if(play.innerText.localeCompare('pause_circle_outline')==0){
        play.innerHTML="play_circle_outline";
        music.pause();
    }  


}

next.addEventListener('click',()=>{
  if(songIndex<playList.length){
    songIndex++
    songTitle.innerText=playList[songIndex].title;
   artistName.innerText=playList[songIndex].artist;
   music.setAttribute('src',playList[songIndex].source);
   cover.setAttribute('src',playList[songIndex].coverImage);
   nextSong.innerText = playList[songIndex+1].title;
   playmusic();
  }
})

previous.addEventListener('click',()=>{
  if(songIndex>0){
    songIndex--
    songTitle.innerText=playList[songIndex].title;
   artistName.innerText=playList[songIndex].artist;
   music.setAttribute('src',playList[songIndex].source);
   cover.setAttribute('src',playList[songIndex].coverImage);
   nextSong.innerText = playList[songIndex+1].title;
   playmusic();
  }
})


