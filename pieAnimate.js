// Define the size and position of the clock and hand
var radius = 100;
var cx = 150;
var cy = 150;
var handLength = 100;

// Create the SVG element
var svg = d3
   .select("#chart")
   .append("svg")
   .attr("width", 300)
   .attr("height", 300);

// Create the clock face
var clock = svg
   .append("circle")
   .attr("cx", cx)
   .attr("cy", cy)
   .attr("r", radius)
   .style("fill", "#000000");
// .style("stroke", "#000");

// Create the clock hand
var hand = svg
   .append("line")
   .attr("x1", cx)
   .attr("y1", cy)
   .attr("x2", cx)
   .attr("y2", cy - handLength)
   .style("stroke", "#FFFFFF")
   .style("stroke-width", "3");

// Rotate the hand
function rotateHand() {
   hand
      .transition()
      .duration(5000) // 5 seconds
      .ease(d3.easeLinear)
      .attrTween("transform", function () {
         return d3.interpolateString(
            "rotate(0, " + cx + ", " + cy + ")",
            "rotate(360, " + cx + ", " + cy + ")"
         );
         ``;
      })
      .on("end", rotateHand);
}

// rotateHand();

// Play Button
playBtn = document.getElementById("play");

// playBtn.addEventListener("click", function () {
//    rotateHand();
// });

// Stop Button
stopBtn = document.getElementById("stop");

// stopBtn.addEventListener("click", function () {});
