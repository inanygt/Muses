const dummy = [
   {
      id: "d1",
      value: 10,
      region: "USA",
   },
   {
      id: "d2",
      value: 10,
      region: "India",
   },
   {
      id: "d3",
      value: 10,
      region: "Germany",
   },
   {
      id: "d4",
      value: 10,
      region: "China",
   },
];

// d3.select("div")
//    .selectAll("p")
//    .data(dummy)
//    .enter()
//    .append("p")
//    .text((data) => data.region);

const container = d3
   .select("div")
   .classed("cont", true)
   .style("border", "1px solid red");

const bars = container
   .selectAll(".bar")
   .data(dummy)
   .enter()
   .append("div")
   .classed("bar", true)
   .style("width", "50px")
   .style("height", "150");
