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
