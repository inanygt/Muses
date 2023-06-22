const synth = new Tone.PolySynth().toDestination();

const melody = [
   // PHRASE 1 // PHRASE 1 // PHRASE 1
   // BAR 1
   { note: "E4", duration: "4n" },
   { note: "E4", duration: "4n" },
   { note: "F4", duration: "4n" },
   { note: "G4", duration: "4n" },
   // BAR 2
   { note: "G4", duration: "4n" },
   { note: "F4", duration: "4n" },
   { note: "E4", duration: "4n" },
   { note: "D4", duration: "4n" },
   // BAR 3
   { note: "C4", duration: "4n" },
   { note: "C4", duration: "4n" },
   { note: "D4", duration: "4n" },
   { note: "E4", duration: "4n" },
   // BAR 4
   { note: "E4", duration: "4n." },
   { note: "D4", duration: "8n" },
   { note: "D4", duration: "2n" },
   // PHRASE 2 // PHRASE 2// PHRASE 2
   // BAR 5
   { note: "E4", duration: "4n" },
   { note: "E4", duration: "4n" },
   { note: "F4", duration: "4n" },
   { note: "G4", duration: "4n" },
   // BAR 6
   { note: "G4", duration: "4n" },
   { note: "F4", duration: "4n" },
   { note: "E4", duration: "4n" },
   { note: "D4", duration: "4n" },
   // BAR 7
   { note: "C4", duration: "4n" },
   { note: "C4", duration: "4n" },
   { note: "D4", duration: "4n" },
   { note: "E4", duration: "4n" },
   // BAR 8
   { note: "D4", duration: "4n." },
   { note: "C4", duration: "8n" },
   { note: "C4", duration: "2n" },

   // PHRASE 3 // PHRASE 3 // PHRASE 3
   // BAR 9
   { note: "D4", duration: "2n" },
   { note: "E4", duration: "4n" },
   { note: "C4", duration: "4n" },
   // BAR 10
   { note: "D4", duration: "4n" },
   { note: "E4", duration: "8n" },
   { note: "F4", duration: "8n" },
   { note: "E4", duration: "4n" },
   { note: "C4", duration: "4n" },
   // BAR 11
   { note: "D4", duration: "4n" },
   { note: "E4", duration: "8n" },
   { note: "F4", duration: "8n" },
   { note: "E4", duration: "4n" },
   { note: "C4", duration: "4n" },
   // BAR 12
   { note: "C4", duration: "4n" },
   { note: "D4", duration: "4n" },
   { note: "G4", duration: "2n" },

   // Phrase 4 // Phrase 4 // Phrase 4
   // BAR 13
   { note: "E4", duration: "4n" },
   { note: "E4", duration: "4n" },
   { note: "F4", duration: "4n" },
   { note: "G4", duration: "4n" },
   // BAR 14
   { note: "G4", duration: "4n" },
   { note: "F4", duration: "4n" },
   { note: "E4", duration: "4n" },
   { note: "D4", duration: "4n" },
   // BAR 15
   { note: "C4", duration: "4n" },
   { note: "C4", duration: "4n" },
   { note: "D4", duration: "4n" },
   { note: "E4", duration: "4n" },
   // BAR 16
   { note: "D4", duration: "4n." },
   { note: "C4", duration: "8n" },
   { note: "C4", duration: "2n" },
];

// Set the desired BPM value
const bpm = 82;

// Set the transport tempo based on the BPM
Tone.Transport.bpm.value = bpm;

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
const playButton = document.getElementById("start");

// Add click event listener to the play button
playButton.addEventListener("click", playMelody);
