

var text = ["Its all a dream</span></br>",
"   ",
"I've been standing here waiting for you</br>",
"It's 2 am, save me </br>",
"I need your company, or do I?</br> ",
"   ",
"I'm a shred of wasted paper lost in love</br>",
"but love is burnt</br>",
"Hey please save me</br>",
"   ",
"come back I really need you</br>",
"sensei please come back</br>",
"I need the warmth of your corpse as I type this all out into nothing and everything"]

// Variables
var record = "";
var count = 0;
var toDisplay = [];
var phase = 1;
var lastTimeStamp = null;

// Element picker
var display = document.getElementById("display");
display.style.color = "white";
display.style.width = "300px";

for (var i = 0; i < text.length; i++) {
  var words = text[i].split(" ");
  toDisplay.push(words);
}

// Event listener for keydown event
var isMusicPlaying = false; // Track whether the music is already playing

document.addEventListener("keydown", function(event) {
  if (!isMusicPlaying) {
    playMusic("letters.mp3");
    isMusicPlaying = true;
  }
});

// Function to play the music
function playMusic(musicFile) {
  var audio = new Audio(musicFile);
  audio.play();
}

// Main: flow control
document.addEventListener('keydown', function(event) {
  if (phase == 1) phase1();
  else if (phase == 2) phase2();
  else if (phase == 3) phase3();
});

audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

function removeWordsOneByOne(i) {
  setTimeout(function() {
    var words = toDisplay[i];
    for (var j = 0; j < words.length; j++) {
      words[j] = words[j].replace(/./g, "*");
    }
    toDisplay[i] = words;
    var string = toDisplay.flat().slice(0, (i + 2) * 2).join(" ");
    display.innerHTML = string;
    if (i == toDisplay.length - 1) {
      setTimeout(function() {
        clear();
      }, 1000);
    }
  }, i * 50);
}

function clear(noSound) {
  !noSound && restart.play();
  display.innerHTML = "";
  if (phase == 0) document.getElementById("type").innerHTML = "Type to start";
  else document.getElementById("type").innerHTML = "Type to continue";
  reverse.pause();
  console.log("reset");
  record = "";
  display.classList = "";
  count = 0;
  phase += 1;
}

function init() {
  audio.play();
  document.getElementById("type").innerHTML = "";
}

function phase1() {
  if (count == toDisplay.length + 4) {
    console.log("reverse");
    display.classList = "erase";
    audio.pause();
    reverse.play();
    for (var i = 0; i < toDisplay.length; i++) {
      removeWordsOneByOne(i);
    }
    count += 1;
    return;
  }}

  var sample = record + event.key;
  var isSame = sample.match(/(.)\1{5,}$/g);

  if (count > 4 && isSame) {
    display.classList = "SLIDES";
    console.log("AESTHER");
    return;}