const button_icons = document.querySelectorAll(".icon");
const audio = new Audio("./sfx/click.mp3");
const background_music = new Audio("./sfx/background.mp3")
const music_switch = document.querySelector("#music_switch");


background_music.volume = 0.070;
background_music.loop = true;

button_icons.forEach(function(click){
click.addEventListener("click", function(){
    audio.play();
});
});

music_switch.addEventListener("click", function(){
    
 audio.play();
 if(background_music.paused){
   background_music.play();
 } else{
    background_music.pause();
 }
});


