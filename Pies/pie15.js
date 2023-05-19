// set the dimensions and margins of the graph
var width = 180;
var height = 180;
margin = 30;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg = d3
   .select("#pie-15")
   .append("svg")
   .attr("width", width)
   .attr("height", height)
   .append("g")
   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = { a: 5, b: 5, c: 5, d: 5 };

// set the color scale
var color = d3
   .scaleOrdinal()
   .domain(data)
   .range(["#e44b8d", "#e44b8d", "#ffa500", "#eae74b"]);

// Compute the position of each group on the pie:
var pie = d3.pie().value(function (d) {
   return d.value;
});
var data_ready = pie(d3.entries(data));

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg.selectAll("whatever")
   .data(data_ready)
   .enter()
   .append("path")
   .attr("d", d3.arc().innerRadius(0).outerRadius(radius))
   .attr("fill", function (d) {
      return color(d.data.key);
   });
