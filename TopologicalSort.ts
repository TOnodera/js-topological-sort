class TopologicalSort{
    private static stack: any[] = [];
    private static inDeg: Map<any,any> = new Map();
    
    static sort(lists: any[]){

        //入次数を確認
        for(const list of lists){
            const num = list.parents.length;
            this.inDeg.set(list.hash,num);
        }

        //与えられたグラフ内に親がいない場合は-1
        const parentHashes: any[] = [];
        for(const list of lists){
            list.parents.forEach((parentHash: string)=>{
                parentHashes.push(parentHash);
            });
        }
        for(const list of lists){
            if(parentHashes.includes(list.hash) === false){
                const num = this.inDeg.get(list.hash);
                this.inDeg.set(list.hash,num-1);
            }
        }

        //入次数０のノードを計算
        for(const list of lists){
            if(this.inDeg.get(list.hash) == 0){
                this.stack.push(list.hash);
            }
        }


        //ソートして返す
        const ans = [];
        while(this.stack.length > 0){
            const parentId = this.stack.pop();
            ans.push(parentId);
            lists.forEach((list)=>{
                console.log(parentId,list.parents);
                if(list.parents.includes(parentId)){
                    const num = this.inDeg.get(list.hash);
                    this.inDeg.set(list.hash,num-1);
                    if(this.inDeg.get(list.hash) === 0){
                        this.stack.push(list.hash);
                    }
                }
            });
        }

        return ans;
    }
}

export default TopologicalSort;