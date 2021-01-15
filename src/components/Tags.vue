<template>
  <div class="tags">
    <div class="collapse-btn" @click="collapseChage">
      <MenuFoldOutlined v-if="!collapse" />
      <MenuUnfoldOutlined v-else />
    </div>
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :class="{ active: isActive(item.path) }"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">
          {{ item.title }}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)"
          ><CloseOutlined
        /></span>
      </li>
    </ul>
    <a-dropdown class="droppdown">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <a-button type="primary" size="small">
          标签选项<DownOutlined />
        </a-button>
      </a>
      <template #overlay>
        <a-menu @click="onClick">
          <a-menu-item key="1"> 关闭其他</a-menu-item>
          <a-menu-item key="2"> 关闭全部 </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "tags",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CloseOutlined,
    DownOutlined,
  },
  setup(props) {
    const state = reactive({
      tagsList: [],
    });
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const collapse = computed(() => store.state.collapsed);
    const collapseChage = () => {
      store.commit("setCollapsed");
    };
    const isActive = (path) => {
      return path === route.fullPath;
    };
    // 关闭单个标签
    const closeTags = (index) => {
      const delItem = state.tagsList.splice(index, 1)[0];
      const item = state.tagsList[index]
        ? state.tagsList[index]
        : state.tagsList[index - 1];
      if (item) {
        delItem.path === route.fullPath && router.push(item.path);
      } else {
        router.push("/");
      }
    };
    // 设置标签
    const setTags = (routeIn) => {
      //   console.log(routeIn, routeIn.meta.title, routeIn.fullPath);
      const isExist = state.tagsList.some((item) => {
        return item.path === routeIn.fullPath;
      });
      if (!isExist) {
        if (state.tagsList.length >= 8) {
          state.tagsList.shift();
        }
        state.tagsList.push({
          title: routeIn.meta.title,
          path: routeIn.fullPath,
          name: routeIn.matched[1].components.default.name,
        });
      }
    };
    //选项按钮
    const onClick = ({ key }) => {
      if(key==2){
        state.tagsList = [];
        router.push('/');
      }else if(key==1){
        const curItem = state.tagsList.filter(item => {
            return item.path === route.fullPath;
        })
        state.tagsList = curItem;
}
    };
    setTags(route);
    return {
      ...toRefs(state),
      collapseChage,
      collapse,
      isActive,
      setTags,
      closeTags,
      onClick,
    };
  },
};
</script>

<style lang="less">
.tags {
  width: 100%;
  height: 30px;
  background: rgb(255, 255, 255);
  margin: 8px 0;
  display: flex;
  align-items: center;
    position: relative;

  .collapse-btn {
    font-size: 18px;
    padding: 0 8px;
    cursor: pointer;
  }
  ul {
    display: flex;
    align-items: center;
    height: 100%;
    .tags-li {
      border-radius: 3px;
      font-size: 12px;
      overflow: hidden;
      cursor: pointer;
      height: 24px;

      border: 1px solid #e9eaec;
      background: #fff;
      padding: 0 5px 0 12px;
      margin: 0 10px 0 0;
      color: #666;
      transition: all 0.3s ease-in;
    }
    .tags-li:not(.active):hover {
      background: var( --PC);
      color: #fff;
      .tags-li-title{
        color: #fff;
      }
    }
    .tags-li.active {
      color: #fff;
      background:var( --PC);
      
    }
    // li
    .tags-li-title {
      max-width: 80px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 5px;
      color: #666;
      line-height: 21px;
    }
    .tags-li.active .tags-li-title {
      color: #fff;
    }
  }
  .droppdown{
      position: absolute;
      right: 4px;
      top: 2px;
  }
}
</style>