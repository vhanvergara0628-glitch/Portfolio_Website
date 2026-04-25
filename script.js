// Elements
const button_icons = document.querySelectorAll(".icon");
const music_switch = document.querySelector("#music_switch");
const all_buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
// Icon modals
const modal_one = document.querySelector(".modal_one");
const modal_two = document.querySelector(".modal_two");
const modal_three = document.querySelector(".modal_three");
const modal_four = document.querySelector(".modal_four");
const modal_five = document.querySelector(".modal_five");
const modal_six = document.querySelector(".modal_six");

// Open and close buttons
const one_modal = document.querySelector("#one_modal");
const button_aboutme = document.querySelector("#button_aboutme");
const button_projects = document.querySelector("#button_projects");
const button_skills = document.querySelector("#button_skills");
const button_creatives = document.querySelector("#button_creatives");
const button_stuff = document.querySelector("#button_stuff");

const close_modal = document.querySelector("#close_modal");
const close_modal2 = document.querySelector("#close_modal2");
const close_modal3 = document.querySelector("#close_modal3");
const close_modal4 = document.querySelector("#close_modal4");
const close_modal5 = document.querySelector("#close_modal5");
const close_modal6 = document.querySelector("#close_modal6");

//darkmode button
const darkMode = document.querySelector("#dark_switch");

// Audio
const audio = new Audio("./sfx/click.mp3");
const background_music = new Audio("./sfx/background.mp3");

// Background music settings
background_music.volume = 0.070;
background_music.loop = true;

// Modal openers
one_modal.addEventListener("click", function () {
  modal_one.classList.add("active");
});

button_aboutme.addEventListener("click", function () {
  modal_two.classList.add("active");
});

button_projects.addEventListener("click", function () {
  modal_three.classList.add("active");
});

button_skills.addEventListener("click", function () {
  modal_four.classList.add("active");
});

button_creatives.addEventListener("click", function () {
  modal_five.classList.add("active");
});

button_stuff.addEventListener("click", function () {
  modal_six.classList.add("active");
});

// Modal closers
close_modal.addEventListener("click", function () {
  modal_one.classList.remove("active");
});

close_modal2.addEventListener("click", function () {
  modal_two.classList.remove("active");
});

close_modal3.addEventListener("click", function () {
  modal_three.classList.remove("active");
});

close_modal4.addEventListener("click", function () {
  modal_four.classList.remove("active");
});

close_modal5.addEventListener("click", function () {
  modal_five.classList.remove("active");
});

close_modal6.addEventListener("click", function () {
  modal_six.classList.remove("active");
});

// Button click sound 
all_buttons.forEach(function (click) {
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


//darkMode toggle

darkMode.addEventListener("click",darkToggle);

function darkToggle(){
  if(body.classList.contains("dark")){
    
    body.classList.remove("dark");
  }
  else{
     body.classList.add("dark");
  }
}