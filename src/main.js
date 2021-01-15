import { createApp } from 'vue'
// import Antd from 'ant-design-vue';
import {useAntd} from './utils/antd'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/iconfont/iconfont.css";
import echarts from 'echarts';
// import "ant-design-vue/dist/antd.less";

const  app = createApp(App);
app.config.productionTip = false;
app.config.globalProperties.$echarts = echarts;
useAntd(app);
// app.use(Antd)

app.use(store).use(router).mount('#app');
