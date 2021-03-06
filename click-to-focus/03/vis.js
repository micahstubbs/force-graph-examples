fetch('blocks-citation-graph.json')
  .then(res => res.json())
  .then(data => {
    const elem = document.getElementById('graph')

    const Graph = ForceGraph()(elem)
      .graphData(data)
      .nodeLabel('id')
      .nodeAutoColorBy('user')
      // .linkDirectionalParticles(2)
      // .linkDirectionalParticleWidth(1.4)
      .onNodeHover(node => (elem.style.cursor = node ? 'pointer' : null))
      .onNodeClick(node => {
        // Center/zoom on node
        Graph.centerAt(node.x, node.y, 1000)
        Graph.zoom(8, 2000)
      })
  })
