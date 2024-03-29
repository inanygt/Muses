// set the dimensions and margins of the graph
var width = 180;
var height = 180;
margin = 30;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg = d3
   .select("#pie-12")
   .append("svg")
   .attr("width", width)
   .attr("height", height)
   .append("g")
   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = { a: 4, b: 4, c: 8 };

// set the color scale
var color = d3
   .scaleOrdinal()
   .domain(data)
   .range(["#e44b8d", "#ffa500", "#ff0000"]);

// Compute the position of each group on the pie:
var pie = d3
   .pie()
   .value((d) => d.value)
   .sort(function (a, b) {
      return d3.ascending(a.key, b.key);
   }); // This make sure that group order remains the same in the pie chart

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
