//TODO: read the dataset

  var width = 500
  var height= 500

var svg =  d3.select("#fdl")
    .style("width", width)
    .style("height", height)
    
    var nodes = ; //TODO: read from the dataset the nodes of the graph
    var arcs = ;//TODO: read from the dataset the arcs of the graph
    
    var layout = ;//TODO: create an approprate layout using four forces: forceCenter(), forceCollide(), forceManyBody() and forceLink()
    
    var color = ;//TODO: create a color scale to map on the groups of the graph nodes
    
    var edges = svg.append("g")
                  .selectAll("line")
                  .data(arcs)
                  .enter()
                  .append("line")
                  .attr("stroke", "black")
                  .attr("stroke-width", 1)
    
    var node = svg.append("g")
                  .selectAll("circle")
                  .data(nodes)
                  .enter()
                  .append("circle")
                  .attr("fill", /*....*/) //TODO: set the appropriate color for each node depending on its group
                  .attr("r", 10)
    
    function ticked(){
      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
      
      edges
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y)
    }
