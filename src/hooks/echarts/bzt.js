
/**
 * 
 * @param {Object} echarts 
 * @param {Object} obj 
 * @param {Object} dom 
 */
export const bzt=(echarts,obj,dom)=>{
    var echar;
    echar = echarts.init(dom);
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: obj.legend
        },
        grid: {
            top: "0",
            bottom: "0",
            right: "0",
          },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '40%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
              //selected: true, 是否选中状态
                data: [
                    {value: obj.date1, name: '周一', selected: true,  itemStyle: {
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
                    },},
                    {value: obj.date2, name: '周二',  itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#C23531'
                            }, {
                                offset: 0.5,
                                color: '#E67E7B'
                            }, {
                                offset: 1,
                                color: '#F4BAB8'
                            }]),
                            shadowColor: 'rgba(0, 0, 0, 0.4)',
                            shadowBlur: 4
                        }
                    }},
                    {value: obj.date3, name: '周三',  itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#2F4554'
                            }, {
                                offset: 0.5,
                                color: '#59A9E0'
                            }, {
                                offset: 1,
                                color: '#9DD3F8'
                            }]),
                            shadowColor: 'rgba(0, 0, 0, 0.4)',
                            shadowBlur: 4
                        }
                    }}
                ]
            },
          
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '65%'],
                label: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c} \n  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //    backgroundColor: '#333',
                        //    width: '100%',
                        //    align: 'right',
                        //    height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 20
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 2],
                            borderRadius: 2,
                            right:4,
                        }
                    }
                },
                data: [
                    {value: obj.date4, name: '周四',  itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#732BA8'
                            }, {
                                offset: 0.5,
                                color: '#AB62E0'
                            }, {
                                offset: 1,
                                color: '#D09FF3'
                            }]),
                            shadowColor: 'rgba(0, 0, 0, 0.4)',
                            shadowBlur: 4
                        }
                    }},
                    {value: obj.date5, name: '周五',  itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#DCA231'
                            }, {
                                offset: 0.5,
                                color: '#EDCA87'
                            }, {
                                offset: 1,
                                color: '#F1DBAF'
                            }]),
                            shadowColor: 'rgba(0, 0, 0, 0.4)',
                            shadowBlur: 4
                        }
                    }},
                  
                ]
            }
        ]
    }
    echar.clear();
    echar.resize();
    echar.setOption(option);

    return echar;
}