class TopologicalSort{
    private static stack: any[] = [];
    private static inDeg: Map<any,any> = new Map();
    
    static sort(lists: any[]){


        //parentsのhashを全て確認
        const hashes: any[] = [];
        for(const list of lists){
            list.parents.forEach((parentHash: string)=>{
                hashes.push(parentHash);
            });
        }

        //入次数を確認
        for(const list of lists){
            let inNum = 0;
            hashes.forEach((parentHash: string)=>{
                if(list.hash === parentHash){
                    inNum++;
                }
            });
            this.inDeg.set(list.hash,inNum);
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
            const childHash = this.stack.pop();
            ans.push(childHash);
            const currentNode = lists.find((list: any)=>list.hash === childHash);
            //隣接ノードをみる
            currentNode.parents.forEach((parentHash: any)=>{
                const num = this.inDeg.get(parentHash);
                this.inDeg.set(parentHash,num - 1);
                if(this.inDeg.get(parentHash) === 0){
                    this.stack.push(parentHash);
                }
            });
        }

        return ans.reverse();
    }
}

export default TopologicalSort;