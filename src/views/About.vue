<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary" @click="addcount">add </a-button>
    <router-link to="/list">跳转</router-link>
    <br />
    {{ count }}
    <br />
    {{ double }}
  </div>
</template>
<script>
import { about } from "../hooks/about";
import { Button } from "ant-design-vue";
export default {
  components: {
    [Button.name]: Button,
  },
  setup() {
    let { count, double, addcount } = about();
    return {
      count,
      double,
      addcount,
    };
  },
};
</script>Ant Design Vue helper
