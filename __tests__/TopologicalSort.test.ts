import TopologicalSort from "../TopologicalSort";

describe("TopologicalSort",()=>{
    it("test",()=>{
        const lists = [
            {"id": 4,"parentId":[3]},
            {"id": 5,"parentId": [3]},
            {"id": 6,"parentId": [4,5]}, //merge
            {"id": 7,"parentId": [6]},
            {"id": 3,"parentId": [2]},
            {"id": 1,"parentId": []},
            {"id": 2,"parentId": [1]},
        ];
    
        const result = TopologicalSort.sort(lists);
        const ans = [1,2,3,4,5,6,7];
        
        let test = false;
        for(let index = 0;index<ans.length;index++){
            const value = ans[index];
            if(index === 3 && value === 4 || value === 5){
                test = true;
                continue;
            }
            if(index === 4 && value === 4 || value === 5){
                test = true;
                continue;
            }
            if(result[index] === value){
                test = true;
                continue;
            }
            test = false;
        }        

        expect(test).toBeTruthy();
    })
});