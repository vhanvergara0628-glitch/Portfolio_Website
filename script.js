const button_icons = document.querySelectorAll(".icon");
const audio = new Audio("./sfx/click.mp3");
const background_music = new Audio("./sfx/background.mp3")

background_music.play();
background_music.volume = 0.1;
background_music.loop = true;

button_icons.forEach(function(click){
click.addEventListener("click", function(){
    audio.play();
});
});
