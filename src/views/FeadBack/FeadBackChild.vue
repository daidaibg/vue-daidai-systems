<template>
  <div>
      <p>我是儿子：{{test}}  </p>
      <a-button type="primary"  style="margin-top:6px;" @click="changeFather">
        改变父亲
    </a-button>
  </div>
</template>

<script>
import { reactive ,onMounted,computed,toRefs,getCurrentInstance,inject} from 'vue'
export default {
    setup(props, context){
        const ctx =getCurrentInstance()
        const state =reactive({
            test:'test'
        })
        const changeFather = inject('changeFather')
        onMounted(()=>{
        })
        const changes =()=>{
            console.log(props,context)
        }
        return {
            ...toRefs(state),
            changes,
            changeFather
        }
    }
}
</script>

<style>

</style>