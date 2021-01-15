import {reactive,computed,toRefs} from 'vue'
export const about =()=>{
    let state = reactive({
        count:0,
        double:computed(()=>{
          return state.count*2
        })
      })
    const addcount =()=>{
        state.count++
    }
    return {
        ...toRefs(state),
        addcount
    }
}