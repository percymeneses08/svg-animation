var icon = document.getElementById("button"),
    buttonText = document.getElementById("button-text"),
    animationToCheck = document.getElementById("animation-to-check"),
    animationToGreen = document.getElementById("animation-to-green"),
    animationToStar = document.getElementById("animation-to-star"),
    animationToYellow = document.getElementById("animation-to-yellow");

button.addEventListener('click', function() {
  
  if (button.classList.contains("saved")) {
    button.classList.remove("saved");
    animationToStar.beginElement();
    animationToYellow.beginElement();
    buttonText.innerHTML = "Save";
  } else {
    button.classList.add("saved");
    animationToCheck.beginElement();
    animationToGreen.beginElement();
    buttonText.innerHTML = "Saved!";
  }
  
}, false);