<template>
<div>
   <a-textarea v-model:value="value" placeholder="请输入" :rows="4" />
   <a-button type="primary" block style="margin-top:6px;" @click="addlist">
    添加
  </a-button>
  <a-list item-layout="horizontal" :data-source="list">
    <template v-slot:renderItem="{ item ,index}">
      <a-list-item>
        <p class="item_p">{{ item.content }} -- {{item.name}}</p>
        <a-button type="danger" @click="removeItem(index)">
          delete
        </a-button>
      </a-list-item>
    </template>
  </a-list>
 
   <a-button type="primary"  style="margin-top:6px;" @click="change">
      改变
   </a-button>
    <p>我是父亲：{{father}}</p>
    <FeadBackChild ref="feadBackChild" />
 </div>
</template>
<script>

import { reactive ,onMounted,computed,toRefs,getCurrentInstance,ref,watchEffect,provide} from 'vue'
import {useStore} from 'vuex'
import FeadBackChild from './FeadBackChild';
export default {
  components:{
    FeadBackChild
  },
  setup(){
    const {ctx} = getCurrentInstance()
    const store = useStore();
    const list = computed(()=>store.state.List.list);
    const state =reactive({
      value:'',
      father:'我是父亲'
    })
    
    onMounted(()=>{
      store.dispatch('List/loadData');
      // console.log(ctx)
      ctx.$message.success("全局success成功")
      // console.log(store.state.keepRoute.keepList)
    })
    const addlist=()=>{
      store.dispatch('List/addItem',state.value)
      state.value = "";
    }
    const removeItem =(i)=>{
      store.dispatch("List/removeItem",i);
    }
    const change =()=>{
      ctx.$refs.feadBackChild.test = "父改变了儿子"
    }
    const changeFather=()=>{
      state.father = '子改变了父'
    }
    provide('changeFather',changeFather)
    return {
        list,
         ...toRefs(state), 
        addlist,
        removeItem,
        change,
        ctx,
        changeFather
    }
  }
};
</script>
<style lang="less">
</style>