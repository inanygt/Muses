function rotateClockArm() {
   const hourHands = document.querySelectorAll(".hourHand");

   var rotationDegrees = 0;
   var rotationSpeed = 2; // Adjust rotation speed as desired

   function animate() {
      rotationDegrees += rotationSpeed;
      hourHands.forEach((hand) => {
         hand.style.transform = `rotate(${rotationDegrees}deg)`;
      });
      requestAnimationFrame(animate);
   }

   animate();
}

// rotateClockArm();
