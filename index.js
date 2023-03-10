// Get the elements we want to modify
const body = document.querySelector("body");
const navbar = document.querySelector("nav");
const links = document.querySelectorAll("a");

// Add event listeners to each style option
document.querySelector("#dark-mode").addEventListener("click", function () {
  // Change the background color and text color
  body.style.backgroundColor = "#222";
  body.style.color = "#fff";
  // Change the navbar color
  navbar.style.backgroundColor = "#444";
  // Change the link color
  links.forEach(function (link) {
    link.style.color = "#fff";
  });
});

document.querySelector("#light-mode").addEventListener("click", function () {
  // Return the styles to normal
  body.style.backgroundColor = "";
  body.style.color = "";
  navbar.style.backgroundColor = "";
  links.forEach(function (link) {
    link.style.color = "";
  });
});

document.querySelector("#colorful-mode").addEventListener("click", function () {
  // Set the background color to change every 500 milliseconds
  body.style.backgroundImage = "";
  colorIntervalId = setInterval(function () {
    body.style.backgroundColor = getRandomColor();
  }, 500);
  body.style.color = "#fff";
  navbar.style.backgroundColor = "#333";
  links.forEach(function (link) {
    link.style.color = "#fff";
  });
});

// Helper function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
