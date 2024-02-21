// Get all paths in the SVG
const paths = document.querySelector('.wrap-map-text svg').querySelectorAll('path');

// Function to generate a random number within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to apply animation to a random path
function animateRandomPath() {
  // Select a random path
  const randomIndex = getRandomInt(0, paths.length - 1);
  const randomPath = paths[randomIndex];

  // Apply animation
  randomPath.style.animation = 'blueColor 2s ease-in-out';
}

// Trigger animation for a random path every 5 seconds
setInterval(animateRandomPath, 5000);
