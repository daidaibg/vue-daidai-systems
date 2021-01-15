
/**
 * @柱状图
 * @param {Object} echarts 
 * @param {Object} obj 
 */
export const zzt=(echarts,obj,dom)=>{
    var echar;
    echar = echarts.init(dom);
    var option = {
        xAxis: {
            type: 'category',
            data: obj.xData
        },
        tooltip: {
            trigger: "axis",
          },
        yAxis: {
            type: 'value'
        },
        grid: {
            top: "30",
            bottom: "30",
            right: "20",
          },
        series: [{
            data:obj.data,
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3fa7dc'
                    }, {
                        offset: 0.5,
                        color: '#77C7EF'
                    }, {
                        offset: 1,
                        color: '#B8EAF7'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 4
                }
            }
        }]
    };
    echar.clear();
    echar.resize();
    echar.setOption(option);

    return echar;
}