const button_icons = document.querySelectorAll(".icon");
const audio = new Audio("./sfx/click.mp3");


button_icons.forEach(function(click){
click.addEventListener("click", function(){
    audio.play();
});
});
