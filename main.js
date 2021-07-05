import Graph from './topological-sort';
const graph = ()=>{
    const g = new Graph();
    ["A","B","C","D","E"].forEach(v=>g.addVertex(v));

    g.addEdge("A", "B");
    g.addEdge("A", "C");
    g.addEdge("B", "D");
    g.addEdge("C", "D");
    g.addEdge("D", "E");

    return g;
};

