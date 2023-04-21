// Set the dimensions and margins of the graph
var width = 600;
var height = 600;
var margin = 80;

// The radius of the outer pie plot is half the width or half the height (whichever is smallest) minus the margin
var outerRadius = Math.min(width, height) / 2 - margin;

// The radius of the inner pie plot is half the radius of the outer pie plot
var innerRadius = outerRadius / 2;

// Create the SVG element
var svg = d3
   .select("#my_dataviz2")
   .append("svg")
   .attr("width", width)
   .attr("height", height)
   .append("g")
   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create the data for the outer pie chart
var dataOuter = [
   { label: "Category A", value: 4, color: "#FF0000" },
   { label: "Category B", value: 4, color: "#00FF00" },
   { label: "Category C", value: 4, color: "#0000FF" },
   { label: "Category D", value: 4, color: "#FFFF00" },
];

// Create the pie generator for the outer pie chart
var pieOuter = d3.pie().value(function (d) {
   return d.value;
});

// Generate the pie chart data for the outer pie chart
var pieDataOuter = pieOuter(dataOuter);

// Set the color scale for the outer pie chart
var colorOuter = d3
   .scaleOrdinal()
   .domain(
      dataOuter.map(function (d) {
         return d.label;
      })
   )
   .range(
      dataOuter.map(function (d) {
         return d.color;
      })
   );

// Add the arcs for the outer pie chart
svg.selectAll(".arcOuter")
   .data(pieDataOuter)
   .enter()
   .append("path")
   .attr("class", "arcOuter")
   .attr("d", d3.arc().innerRadius(innerRadius).outerRadius(outerRadius))
   .attr("fill", function (d) {
      return colorOuter(d.data.label);
   });
// .attr("stroke", "black")
// .style("stroke-width", "2px");

// Create the data for the inner pie chart
var dataInner = [
   { label: "Category E", value: 4, color: "#FF00FF" },
   { label: "Category F", value: 4, color: "#000000" },
   { label: "Category G", value: 4, color: "#FFA500" },
   { label: "Category H", value: 4, color: "#FFB500" },
];

// Create the pie generator for the inner pie chart
var pieInner = d3.pie().value(function (d) {
   return d.value;
});

// Generate the pie chart data for the inner pie chart
var pieDataInner = pieInner(dataInner);

// Set the color scale for the inner pie chart
var colorInner = d3
   .scaleOrdinal()
   .domain(
      dataInner.map(function (d) {
         return d.label;
      })
   )
   .range(
      dataInner.map(function (d) {
         return d.color;
      })
   );

// Add the arcs for the inner pie chart
svg.selectAll(".arcInner")
   .data(pieDataInner)
   .enter()
   .append("path")
   .attr("class", "arcInner")
   .attr("d", d3.arc().innerRadius(0).outerRadius(innerRadius))
   // .attr("stroke", "black")
   // .style("stroke-width", "2px")
   .attr("fill", function (d) {
      return colorInner(d.data.color);
   });
