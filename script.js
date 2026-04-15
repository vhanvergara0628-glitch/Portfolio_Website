// Elements
const button_icons = document.querySelectorAll(".icon");
const music_switch = document.querySelector("#music_switch");

const modal_one = document.querySelector(".modal_one");
const one_modal = document.querySelector("#one_modal");
const close_modal = document.querySelector("#close_modal");

// Audio
const audio = new Audio("./sfx/click.mp3");
const background_music = new Audio("./sfx/background.mp3");

// Background music settings
background_music.volume = 0.070;
background_music.loop = true;

// Modal open
one_modal.addEventListener("click", function () {
  modal_one.classList.add("active");
});

// Modal close
close_modal.addEventListener("click", function () {
  modal_one.classList.remove("active");
});

// Button click sound
button_icons.forEach(function (click) {
  click.addEventListener("click", function () {
    audio.play();
  });
});

// Music toggle
music_switch.addEventListener("click", function () {
  audio.play();

  if (background_music.paused) {
    background_music.play();
  } else {
    background_music.pause();
  }
});