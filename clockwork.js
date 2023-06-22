// Get the button element
const toggleButton = document.getElementById("start");

// Set initial state
let isPlaying = false;
let animationId;
let originalRotation = 0;

// Function to start the rotation
function startRotation() {
   isPlaying = true;
   rotateClockArm();
}

// Function to stop the rotation
function stopRotation() {
   isPlaying = false;
   cancelAnimationFrame(animationId);
   resetRotation();
}

// Function to reset the rotation to the original position
function resetRotation() {
   const hourHands = document.querySelectorAll(".hourHand");
   hourHands.forEach((hand) => {
      hand.style.transform = `rotate(${originalRotation}deg)`;
   });
}

// Toggle button click event listener
toggleButton.addEventListener("click", function () {
   if (isPlaying) {
      stopRotation();
   } else {
      startRotation();
   }
});

// Function to rotate the clock arm
function rotateClockArm() {
   const hourHands = document.querySelectorAll(".hourHand");

   var rotationDegrees = 0;
   var rotationSpeed = 2; // Adjust rotation speed as desired

   function animate() {
      rotationDegrees += rotationSpeed;
      hourHands.forEach((hand) => {
         hand.style.transform = `rotate(${rotationDegrees}deg)`;
      });

      animationId = requestAnimationFrame(animate);

      // Stop the rotation if not playing
      if (!isPlaying) {
         cancelAnimationFrame(animationId);
      }
   }

   animate();
}
