/**
 * 
 * @param {lists} lists
 * 
 * example.
 * lists = [
 *  [A,B],
 *  [A,C],
 *  [B,D],
 *  [C,D],
 *  [D,E]
 * ] 
 */
function tsort_Kahn(lists){
    const i = lists.length;
    const stack = [];
    const inDeg = new Map();
    const tmpNodes = [];

    for(const list of lists){
        tmpNodes.push(...list);
    }
    const nodes = new Set(tmpNodes);

    //入次数を確認
    for(const list of lists){
        let num = inDeg.get(list[1]) ? inDeg.get(list[1]) : 0;
        inDeg.set(list[1],++num);
    }

    //入次数０のノードを計算
    for(const node of nodes){
        if(inDeg.get(node)==undefined){
            stack.push(node);
        }
    }

    const ans = [];
    while(stack.length > 0){
        node = stack.pop();
        ans.push(node);
        for(const list of lists){
            const num = inDeg.get(list[1]);
            inDeg.set(list[1],num-1);
            if(inDeg.get(list[1]) === 0){
                stack.push(list[1]);
            }
        }
    }

    return ans.reverse();
    
}

lists = [
    ['A','B'],
    ['A','C'],
    ['C','D'],
    ['B','D'],
    ['D','E'],
    ['F','D']
];

console.log(tsort_Kahn(lists));

