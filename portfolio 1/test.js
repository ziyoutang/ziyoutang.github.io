document.addEventListener("DOMContentLoaded", function() {
  var text = [
    "",
    "listen, as life as a flower",
    "challenge gender norms",
    "record humanity",
    "merge arts and technology",
    "",
    "express creativity",
    "My forever embracement",
    "I'm Yoyo"
  ];

  var display = document.getElementById("display");
  var images = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3"),
    document.getElementById("image4"),
    document.getElementById("image5"),
    document.getElementById("image6"),
    document.getElementById("image7"),
    document.getElementById("image8"),
    document.getElementById("image9") // Add image 9 element
  ];

  var currentStrainIndex = 0;
  var isMusicPlaying = false;
  var isFirstKeyPress = true; // Track if it's the first key press

  document.addEventListener("keydown", function(event) {
    if (currentStrainIndex < text.length) {
      var strain = text[currentStrainIndex];
      display.innerHTML = strain + "<br>";

      images[currentStrainIndex].style.animation = "fade-in 1s ease-out";
      images[currentStrainIndex].style.opacity = "1";

      if (currentStrainIndex !== 0 && currentStrainIndex !== 6) {
        images[currentStrainIndex - 1].classList.add("filter-applied");
      }

      if (isFirstKeyPress) { // First key press
        // Apply "filter none" to the current image
        images[currentStrainIndex].style.filter = "invert(100%)";
        isFirstKeyPress = false;
      }

      // Image-specific filter changes
      if (currentStrainIndex === 1) {
        // Image 2 appears, change image 6 to greyscale
        images[1].style.filter = "none";
        images[5].style.filter = "grayscale(100%)";
      } else if (currentStrainIndex === 2) {
        // Image 3 appears, change image 2 to greyscale
        images[2].style.filter = "none";
        images[1].style.filter = "grayscale(100%)";
      } else if (currentStrainIndex === 3) {
        // Image 4 appears, change image 3 to greyscale
        images[3].style.filter = "none";
        images[2].style.filter = "grayscale(100%)";
      } else if (currentStrainIndex === 4) {
        // Image 5 appears, change image 4 to greyscale
        images[4].style.filter = "none";
        images[3].style.filter = "grayscale(100%)";
      } else if (currentStrainIndex === 6) {
        // Image 7 appears, change image 5 to greyscale
        images[6].style.filter = "none";
        images[4].style.filter = "grayscale(100%)";
        images[6].style.animation = "fade-in 1s ease-out"; // Show image 7 with animation
      } else if (currentStrainIndex === 7) {
        // Image 8 appears, change image 6 to greyscale
        images[7].style.filter = "none";
        images[5].style.filter = "grayscale(100%)";
      }

      currentStrainIndex++;
    }

    if (currentStrainIndex === images.length) {
      for (var i = 0; i < images.length - 1; i++) {
        images[i].style.opacity = "0"; // Hide images 1-8
        images[i].style.filter = "none";
      }

      images[images.length - 1].style.opacity = "1"; // Show image 9
    }

    if (currentStrainIndex !== 6 && currentStrainIndex !== 7) {
      images[5].classList.add("filter-applied");
    }

    if (!isMusicPlaying) {
      playMusic("letters.mp3");
      isMusicPlaying = true;
    }

    var video = document.getElementById("one");
    video.style.display = "block";
    video.play();
  });

  display.style.color = "white";
  display.style.width = "200px";

  function playMusic(musicFile) {
    var audio = new Audio(musicFile);
    audio.play();
  }
});