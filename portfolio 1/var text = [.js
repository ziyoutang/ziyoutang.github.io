var text = [
  "Its all a dream</br>",
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
  "I need the warmth of your corpse as I type this all out into nothing and everything"
];

// Variables
var currentStrainIndex = 0;
var display = document.getElementById("display");

// Event listener for keydown event
document.addEventListener("keydown", function(event) {
  if (currentStrainIndex < text.length) {
    var strain = text[currentStrainIndex];
    display.innerHTML += strain;
    currentStrainIndex++;
  }
});