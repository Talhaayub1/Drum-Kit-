
// Detectiing The Button keys For Mouse 
var numberofDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // console.log(this.style.color = "white")
    var buttonSound = this.innerHTML;
    soundClick(buttonSound);
    buttonAnimation(buttonSound);
  });
}
// Detecting From Keyboard 
document.addEventListener("keypress", function(e){
  soundClick(e.key);
  buttonAnimation(e.key)
})
function soundClick(key){
  switch (key) {
    case "w":
      var mySound = new Audio("sounds/tom-1.mp3");
      mySound.play();
      break;
    case "a":
      var mySound = new Audio("sounds/tom-2.mp3");
      mySound.play();
      break;
    case "s":
      var mySound = new Audio("sounds/tom-3.mp3");
      mySound.play();
      break;
    case "d":
      var mySound = new Audio("sounds/tom-4.mp3");
      mySound.play();
      break;
    case "j":
      var mySound = new Audio("sounds/snare.mp3");
      mySound.play();
      break;
    case "k":
      var mySound = new Audio("sounds/kick-bass.mp3");
      mySound.play();
      break;
    case "l":
      var mySound = new Audio("sounds/crash.mp3");
      mySound.play();
    default: 
    console.log(buttonSound);
  }
}
// add and remove animation on some elements 
function buttonAnimation(currentKey){
    var activebtn = document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");
    setTimeout(function(){
      activebtn.classList.remove("pressed");
    }, 100);
}