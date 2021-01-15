<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <Headers></Headers>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff" v-model:collapsed="collapsed"> 
        <Siders ref="siders"></Siders>
      </a-layout-sider>
     
      <a-layout style="padding: 0px 0px 12px 12px">
         <Tags ref="tags"/>
        <a-layout-content
        ref="contents"
          :style="{
            background: '#fff',
            padding: '16px',
            margin: 0,
            minHeight: '280px',
            overflowY: 'scroll',
          }"
        >
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive :include="keepList">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>

          <a-back-top :target="()=>ctx.ctx.$refs.contents.$el" :visibilityHeight="400"/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { reactive, onMounted, toRefs, watch, computed ,getCurrentInstance} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import Headers from "./Headers";
import Siders from "./Siders.vue";
import Tags from './Tags';
export default {
  components: {
    Headers,
    Siders,
    Tags,
  },
  setup() {
    /*
      @keepList  {
          title:'',
          path:'',
          name:'',
        }
    */
   const ctx = getCurrentInstance()
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const keepList = computed(() => store.state.keepRoute.keepList);
    onMounted(() => {
      // console.log(route)
      store.commit("keepRoute/setKeepList", route);
    });
    /**
     * @添加到缓存
     *  */
    watch(
      () => route.path,
      (newrouter, oldrouter) => {
        // console.log(newrouter)
        ctx.ctx.$refs.tags.setTags(route);
        store.commit("keepRoute/setKeepList", route);
        let data = ctx.ctx.$refs.siders;
        let flag = false;
        data.openKeys.map(item=>{
          if(item==route.path){
            flag =true;
          }
        })
        if(!flag){
          data.xhmenu(data.menuLists)
        }
      }
    );
    const collapsed = computed(()=>{
      return store.state.collapsed
    });
   
    return {
      keepList,
      collapsed,
      ctx,
    };
  },
};
</script>

<style lang="less">
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
#components-layout-demo-top-side-2 .my_menus .iconfont {
  font-size: 16px;
  margin-right: 6px;
}
.ant-layout {
  height: 100%;
  .ant-back-top-icon{
    background-size: 100% 100%;
  }
}

</style>
