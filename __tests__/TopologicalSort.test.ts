import TopologicalSort from "../TopologicalSort";
import { commits } from "./testData";

describe("TopologicalSort",()=>{
    it("test",()=>{
        
        const lists = commits;
    
        const result = TopologicalSort.sort(lists);
    })
});