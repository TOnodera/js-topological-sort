class TopologicalSort{
    private static stack: any[] = [];
    private static inDeg: Map<any,any> = new Map();
    
    static sort(lists: any[]){

        //入次数を確認
        for(const list of lists){
            const num = list.parentId.length;
            this.inDeg.set(list.id,num);
        }

        //入次数０のノードを計算
        for(const list of lists){
            for(const id of list.parentId){
                if(this.inDeg.get(id) == 0){
                    this.stack.push(id);
                }
            }
        }

        //ソートして返す
        const ans = [];
        while(this.stack.length > 0){
            const parentId = this.stack.pop();
            ans.push(parentId);
            lists.forEach((list)=>{
                if(list.parentId.includes(parentId)){
                    const num = this.inDeg.get(list.id);
                    this.inDeg.set(list.id,num-1);
                    if(this.inDeg.get(list.id) === 0){
                        this.stack.push(list.id);
                    }
                }
            });
        }

        return ans;
    }
}

export default TopologicalSort;