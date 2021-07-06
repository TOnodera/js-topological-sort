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
        const num = list.parentId.length;
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
        parentId = stack.pop();
        ans.push(parentId);
        lists.forEach((list)=>{
            if(list.parentId.includes(parentId)){
                const num = inDeg.get(list.id);
                inDeg.set(list.id,num-1);
                if(inDeg.get(list.id) === 0){
                    stack.push(list.id);
                }
            }
        });
    }

    return ans;
    
}

/**             
 *              -> 4
 * 1 -> 2 -> 3        -> 6 -> 7
 *              -> 5
 * ------------------------------------------
 *  [
 *      1, 2, 3, 5, 4, 6, 7 <- OK
 *  ]
 */
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