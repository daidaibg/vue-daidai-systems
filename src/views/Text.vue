<template>
  <div>
    <a-divider orientation="left"> Tab </a-divider>
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane>
    </a-tabs>
     <a-divider orientation="left">
    tag
  </a-divider>
    <a-tag color="processing">processing</a-tag>
      <a-divider orientation="left">
    进度条
  </a-divider>
    <a-progress :percent="50" status="active" />
     <a-divider orientation="left">
    alert
  </a-divider>
    <a-alert message="Info Text" type="info" close-text="Close Now" />
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup(props) {
    const callback = (key) => {
      console.log(key);
    };
    return {
      callback,
    };
  },
};
</script>