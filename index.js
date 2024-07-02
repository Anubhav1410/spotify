// JavaScript to update the range input value smoothly over time

const progressBar = document.getElementById('progress-bar');
const currentTimeElement = document.querySelector('.current-time');
const totalTimeElement = document.querySelector('.total-time');

let currentTime = 0; // in seconds (1:55)
const totalTime = 251; // in seconds (4:11)

const updateProgressBar = () => {
    if (currentTime < totalTime) {
        currentTime += 0.1; // Increment by a smaller value for smooth transition
        const progress = currentTime;
        progressBar.value = progress;
        progressBar.style.setProperty('--progress', `${(progress/totalTime)*100}%`);

        // Update the current time display
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        currentTimeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    } else {
        clearInterval(progressInterval);
    }
};

const progressInterval = setInterval(updateProgressBar, 100); // Update every 100 milliseconds for smoother progress
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});
const showCircles = () => {
    circles.forEach(circle => circle.style.display = 'block');
  };
  
  const hideCircles = () => {
    circles.forEach(circle => circle.style.display = 'none');
  };

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  showCircles();
  
});
window.addEventListener("mouseout", hideCircles);
function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 20 + "px";
    circle.style.top = y - 20 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 5000)
}
loaderAnimation()
animateCircles();