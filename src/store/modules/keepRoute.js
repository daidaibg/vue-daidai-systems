export default {
    state: {
        keepList:[]
    },
    mutations: {
        setKeepList(state,data){
            // console.log(data)
            let rouetData = data.matched[1];
            if(!rouetData){
                return;
            }
            if (state.keepList.length >= 2) {
                state.keepList.splice(0, 1);
            }
            state.keepList.push({
                path: rouetData.path,
                title: rouetData.meta.title,
                name: rouetData.name,
            });
        }
    },
    actions: {
        
    },
}