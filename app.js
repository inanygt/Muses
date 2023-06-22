// let play = document.getElementById("playBtn");
// let stop = document.getElementById("stopBtn");

// play.addEventListener("click", function () {
//    console.log("play");
//    startTimer();
// });

// stop.addEventListener("click", function () {
//    console.log("stop");
//    stopTimer();
// });

// let timerInterval;
// let seconds = 0;
// let bpmDuration = 2; // duration of each beat in seconds
// let beatsElapsed = 0;

// function startTimer() {
//    clearInterval(timerInterval); // clear any existing intervals
//    timerInterval = setInterval(updateTimer, 1000); // update timer every second
// }

// function stopTimer() {
//    clearInterval(timerInterval); // stop the timer interval
//    seconds = 0; // reset seconds
//    beatsElapsed = 0; // reset beatsElapsed
//    updateTimer(); // update timer display
//    updateBPM(); // update bpm display
// }

// function updateTimer() {
//    const minutes = Math.floor(seconds / 60)
//       .toString()
//       .padStart(2, "0");
//    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
//    document.getElementById(
//       "timer"
//    ).textContent = `00:${minutes}:${remainingSeconds}`;
//    seconds++;
//    beatsElapsed = seconds / bpmDuration;
//    updateBPM();
// }

// function updateBPM() {
//    const bpm = Math.round(beatsElapsed * 60);
//    document.getElementById("bpm").textContent = `BPM: ${bpm}`;
// }
