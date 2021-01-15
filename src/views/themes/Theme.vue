<template>
  <div class="theme">
    <span> 选择主题： </span>
    <a-select
      v-model:value="theme"
      ref="select"
      style="width: 200px"
      class="theme"
      @change="handleChange"
    >
      <a-select-option
        v-for="(item) in option"
        :key="item.id"
        class="theme_item"
        :value="item.color"
        
      >
        <span>{{ item.name }}</span>
        <div :class="item.id + '_theme'"></div>
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import UtilVar from '../../utils/stacts'
export default {
  name: "theme",
  setup(props) {
    const store = useStore();
    const state = reactive({
      theme: "默认主题",
      option:UtilVar.THEME ,
    });

    const handleChange = (value,e) => {
    //   console.log(value,e)
      store.commit("Theme/setTheme", e.key);
      window.less
        .modifyVars({
          "@primary-color":value,
          "@link-color": value,
          "@btn-primary-bg": value,
          "@layout-header-background":value
        })
        .then(() => {
          console.log("更换皮肤成功");
        })
        .catch((error) => {
          alert("更换皮肤失败");
          console.log(error);
        });
    };
    return {
      ...toRefs(state),
      handleChange,
    };
  },
};
</script>

<style lang="less" >
.theme {
}
.theme_item {
  .ant-select-item-option-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      width: 60px;
      height: 12px;
    }
    .green-theme_theme {
      background-color: #11998d;
    }
    .default-theme_theme {
      background-color: #1890ff;
    }
  }
}
</style>