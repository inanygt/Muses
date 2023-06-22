const synth = new Tone.PolySynth().toDestination();

const melody = [
   { note: "E4", duration: "4n" },
   { note: "E4", duration: "4n" },
   { note: "F4", duration: "4n" },
   { note: "G4", duration: "4n" },

   { note: "G4", duration: "4n" },
   { note: "F4", duration: "4n" },
   { note: "E4", duration: "4n" },
   { note: "D4", duration: "4n" },

   { note: "C4", duration: "4n" },
   { note: "C4", duration: "4n" },
   { note: "D4", duration: "4n" },
   { note: "E4", duration: "4n" },

   { note: "E4", duration: "4n." },
   { note: "D4", duration: "8n" },
   { note: "D4", duration: "2n" },
];

// Function to play the melody
function playMelody() {
   let time = Tone.now(); // Get the current time

   for (let i = 0; i < melody.length; i++) {
      const { note, duration } = melody[i];

      synth.triggerAttackRelease(note, duration, time);

      // Increment the time by the duration of the current note
      time += Tone.Time(duration).toSeconds();
   }
}

// Get the play button element
const playButton = document.getElementById("play-button");

// Add click event listener to the play button
playButton.addEventListener("click", playMelody);
