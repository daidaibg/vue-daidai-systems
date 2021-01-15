import {testList} from '../../api/List/requestList';
export default {
    state: ()=>({
        list:[]
    }),
    mutations: {
        setList(state,list){
            state.list = list;
        },
        addItem(state,data){
            state.list.unshift({
                content:data
            })
        },
        removeItem(state,i){
            state.list.splice(i,1)
        }
    },
    actions: {
        loadData({commit}){
            testList({
                pageSize:5
            }).then(data=>{
                // console.log(data.data)
                if(data.data.code=='200'){
                    commit('setList',data.data.resultValue)
                }
            })
        },
        addItem({commit},data){
            commit('addItem',data)
        },
        removeItem({commit},i){
            commit("removeItem",i)
        }
    },
}