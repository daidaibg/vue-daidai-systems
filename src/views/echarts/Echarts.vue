<template>
  <div class="echarts">
      <a-page-header
      style="margin-bottom:12px;"
      title="刷新数据"
      @back="() => getdata()"
    >
    <template #backIcon>
      <RedoOutlined />
    </template>
    </a-page-header>
    <div class="echarts_wrap">
      <div id="zxt" class="echarts_all" ref="zxt"></div>
      <div id="zzt" ref="zzt" class="echarts_all"></div>
      <div id="bzt" ref="bzt"  class="echarts_all"></div>
      <div  class="echarts_all"></div>
      <div  class="echarts_all"></div>
      <div  class="echarts_all"></div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from "vue";
import {zxt} from '../../hooks/echarts/zxt';
import {zzt} from '../../hooks/echarts/zzt';
import {bzt} from '../../hooks/echarts/bzt';
import {GetEcharts} from '../../api/List/requestList';
import {RedoOutlined} from '@ant-design/icons-vue'
export default {
  name: "echarts",
  components:{
    RedoOutlined
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const state = reactive({
      zxts: null,
      zzts:null
    });
    const echarts = ctx.$echarts;

    onMounted(() => {
      getdata()
    });
    //获取数据
    const getdata =()=>{
      GetEcharts().then(data=>{
        console.log(data.data)
        if(data.data.successful){
          let dataArr1=data.data.resultValue.data1;
          //折线图
            state.zxts= zxt(echarts,{
              xData:data.data.resultValue.lengend1,
              data:data.data.resultValue.data1,
              data2:data.data.resultValue.data2,
            },ctx.$refs.zxt);
            //柱状图
             state.zxts= zzt(echarts,{
              xData:data.data.resultValue.lengend1,
              data:data.data.resultValue.data1,
              data2:data.data.resultValue.data2,
            },ctx.$refs.zzt);
            //饼状图
            state.bzts =bzt(echarts,{
              legend:['周一', '周二', '周三', '周四', '周五'],
              date1:dataArr1[0],
              date2:dataArr1[1],
              date3:dataArr1[2],
              date4:dataArr1[3],
              date5:dataArr1[4],
            },ctx.$refs.bzt);
        }
      })
    }
    return {
      echarts,
      ...toRefs(state),
      getdata,
    };
  },
};
</script>

<style lang="less">
.echarts {
  width: 100%;
  min-height: 100%;
  .echarts_wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .echarts_all {
      width: 49%;
      height: 400px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      margin-bottom: 18px;
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>