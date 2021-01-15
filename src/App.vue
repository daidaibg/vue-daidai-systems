<template>
<a-config-provider :locale="locale">
    <div id="app" :class="theme">
       <router-view/>
    </div>
  </a-config-provider>
 
</template>
<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import {useStore} from 'vuex';
import {computed,onMounted} from 'vue';
export default {
    setup(){
      const locale = zhCN;
      const store = useStore();
      onMounted(() => {
         
      })
      const theme = computed(()=>store.state.Theme.themes)
      return {
        locale,
        theme
      }
    }
}
</script>
<style lang="less">

@import "./styles/css/main.less";



html,body,
#app{
  width: 100%;
  height: 100%;
}
</style>
