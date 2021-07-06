/**
 * 
 * @param {lists} lists
 * 
 * example.
 * lists = [
 *  {"id": 1,"parentId": []},
 *  {"id": 2,"parentId": [1]},
 *  {"id": 3,"parentId": [2]},
 *  {"id": 4,"parentId":[3]},
 *  {"id": 5,"parentId": [3]},
 *  {"id": 6,"parentId": [4,5]} //merge
 *  {"id": 7,"parentId": [6]}
 * ] 
 */
function tsort_Kahn(lists){
    const stack = [];
    const inDeg = new Map();

    //入次数を確認
    for(const list of lists){
        let num = list.parentId.length;
        inDeg.set(list.id,num);
    }

    //入次数０のノードを計算
    for(const list of lists){
        for(const id of list.parentId){
            if(inDeg.get(id) == 0){
                stack.push(id);
            }
        }
    }

    //ソートして返す
    const ans = [];
    while(stack.length > 0){
        node = stack.pop();
        ans.push(node);
        for(const list of lists){
            for(const id of list.parentId){
                const num = inDeg.get(id);
                inDeg.set(id,num-1);
                if(inDeg.get(id) === 0){
                    stack.push(id);
                }
            }
        }
    }

    return ans.reverse();
    
}

lists = [
    {"id": 1,"parentId": []},
    {"id": 2,"parentId": [1]},
    {"id": 3,"parentId": [2]},
    {"id": 4,"parentId":[3]},
    {"id": 5,"parentId": [3]},
    {"id": 6,"parentId": [4,5]}, //merge
    {"id": 7,"parentId": [6]}
]; 

console.log(tsort_Kahn(lists));