<template>
  <a-menu
   
    :style="{ height: '100%', borderRight: 0 }"
    @click="menuItemClick"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <template v-for="item in menuLists">
      <!-- 第一层-->
      <template v-if="item.subs">
        <a-sub-menu :key="item.url" >
          <template v-slot:title>
            <span class="anticon"><i :class="item.iconType"></i></span>
            <span>{{ item.name }}</span>
          </template>
          <!-- 第二层 -->
          <template v-for="subItem in item.subs">
            <a-sub-menu :key="subItem.url" v-if="subItem.subs">
              <template v-slot:title>
                <span> {{ subItem.name }}</span>
              </template>
              <!-- 第三层 -->
              <a-menu-item :key="treeItem.url" v-for="treeItem in subItem.subs">
                <span>{{ treeItem.name }}</span>
              </a-menu-item>
            </a-sub-menu>
            <template v-else>
              <a-menu-item :key="subItem.url">
                <span>{{ subItem.name }}</span>
              </a-menu-item>
            </template>
          </template>
        </a-sub-menu>
      </template>
      <template v-else>
        <a-menu-item :key="item.url">
          <span class="anticon"><i :class="item.iconType"></i></span>
          <span>{{ item.name }}</span>
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>

<script>
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import { reactive, getCurrentInstance, onMounted, toRefs ,watch,computed} from "vue";
import {returnMenuPath} from '../utils/Current'
import submenu from "./siders/Sub-menu";
import { useRouter, useRoute } from "vue-router";
import { menuList } from "../hooks/Siders/siders";
import {useStore} from 'vuex';
export default {
  name: "siders",
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    submenu,
  },
  setup() {
    const { ctx } = getCurrentInstance(); //this
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const silder = reactive({
      selectedKeys: [router.path],
      openKeys: [router.path],
    });
    const { menuLists, getList } = menuList();
    const collapseds = computed(()=>{
      return store.state.collapsed
      });
    // 点击 item触发
    const menuItemClick = ({ item, key, keyPath }) => {
      // console.log(item, key, keyPath);
      silder.openKeys = keyPath;
      router.push(key);
    };
    /**
     * 刷新后默认展开侧边栏）
     */
    const xhmenu = (result) => {
      // console.log(route)
      let data=  returnMenuPath(result,route)
      // console.log(data)
      if(JSON.stringify(data) !=="{}"){
        silder.openKeys = data.selectedKeys;
        silder.selectedKeys = data.selectedKeys;
      }
    };
   
    //点击submenu
     const titleClick=({ key, domEvent })=>{
       console.log({ key, domEvent })
    }
    onMounted(() => {
      // console.log(route);
      getList(xhmenu);
    });
    return {
      ...toRefs(silder),
      menuItemClick,
      menuLists,
      collapseds,
      titleClick,
      xhmenu,
     
    };
  },
};
</script>

<style >
</style>