function rotateClockArm() {
   var hourHand = document.getElementById("hourHand");

   var rotationDegrees = 0;
   var rotationSpeed = 1; // Adjust rotation speed as desired

   function animate() {
      rotationDegrees += rotationSpeed;
      hourHand.style.transform = `rotate(${rotationDegrees}deg)`;
      requestAnimationFrame(animate);
   }

   animate();
}

rotateClockArm();
