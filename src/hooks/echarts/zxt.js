/**
 * @折线图
 * @param {Object} echarts 
 * @param {Object} obj 
 */
export const zxt = (echarts,obj,dom) => {
    var echar;
    echar = echarts.init(dom);
    var option = {
      title: {
        show:false,
        text: "折线图",
        x: "center", //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        textAlign: "center", //水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
        textStyle: {
          //主标题文本样式
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: "normal",
          color: "#333333",
        },
      },
     
      xAxis: {
        data: obj.xData,
        type: "category",
        scale: true,
        boundaryGap: false, //是否从0开始
        axisTick: {
          //x轴刻度线是否显示
          show: false,
        },
        axisLine: {
          lineStyle: {
            // 设置x轴颜色
            color: "#666666",
            width: 0, //x轴 是否显示
            type: "solid", //'dotted'虚线 'solid'实线
          },
        },
      },
      yAxis: {
        type: "value",
        axisTick: {
          //y轴刻度线是否显示
          show: false,
        },
        axisLine: {
          lineStyle: {
            // 设置y轴颜色
            color: "#666666",
            width: 0, //y轴 是否显示
          },
        },
      },
      grid: {
        top: "30",
        bottom: "30",
        right: "20",
      },
      tooltip: {
        trigger: "axis",
        // x,y轴是否亮
        // axisPointer: {
        //   type: "cross",
        //   label: {
        //     backgroundColor: "#6a7985",
        //   },
        // },
      },
      legend: {
        data: ['小李子', '小吴子']
    },
      series: [
        {
          name:'小李子',
          data: obj.data,
          type: "line",
          smooth:true,//平滑折线图
          areaStyle: {
            //覆盖区域的渐变色
            normal: {
              // color: '#091e3b', //改变区域颜色
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#0F89D7", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#29BFF7", // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ]), //背景渐变色
            },
          },
          itemStyle: {
            normal: {
              // 拐点上显示数值
              label: {
                show: true,
              },
              borderColor: "#0FA8E1", // 拐点边框颜色
              color: "#0FA8E1",
              lineStyle: {
                width: 1, // 设置线宽
                type: "solid", //'dotted'虚线 'solid'实线
              },
            },
          },
        },
        {
          name:'小吴子',
          data: obj.data2,
          type: "line",
          smooth:true,//平滑折线图
          areaStyle: {
            //覆盖区域的渐变色
            normal: {
              // color: '#091e3b', //改变区域颜色
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#63A084", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#81CCA9", // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ]), //背景渐变色
            },
          },
          itemStyle: {
            normal: {
              // 拐点上显示数值
              label: {
                show: true,
              },
              borderColor: "#63A084", // 拐点边框颜色
              color: "#63A084",
              lineStyle: {
                width: 1, // 设置线宽
                type: "solid", //'dotted'虚线 'solid'实线
              },
            },
          },
        },
      ],
    };
    echar.clear();
    echar.resize();
    echar.setOption(option);

    return echar;
  };