/**
 * @mockjs 模拟数据
 */
import Mock from 'mockjs';
import {returnUrl} from '../utils/Current'
const Random = Mock.Random; //mockjs对象的一个随机对象
Mock.Random.extend({
  phone: function () {
    var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
  }
})
//可以设置响应的时间，模拟网络耗时，单位是ms
Mock.setup({
  timeout: '200 - 600'
})

export const data = Mock.mock(/\/test\/list[\s\S]*?/, "get", (options) => {
  var result = returnUrl(options.url);
  // console.log(result)
  let param = {
    "successful": true,
    "code": 200,
    total:200,
  }
  param["resultValue|"+result.pageSize]= [{
    'objId': '@word(11)',
    "time": "@DATETIME('yyyy-MM-dd HH:mm:ss')",
    "surname": "@clast()" + '先生',
    "phone": '@phone',
    'type|1': ['1', '0'],
    'content': '@csentence(20,34)',
    'name': '@cname()', //返回一个常见的中文名
    'age': '@integer(20, 40)' //返回一个数字，范围在20~40
  }]
  return Mock.mock(param)
})


export const echarts = Mock.mock(/\/test\/echarts[\s\S]*?/, "get", (options) => {
  // console.log(result)
  let param = {
    "successful": true,
    "code": 200,
    total:200,
  }
  param["resultValue"]= {
    lengend1:["周一","周二","周三","周四","周五","周六","周日"],
    "data1|7":['@natural( 0, 1000 )'],
    "data2|7":['@natural( 0, 600 )']

  }
  return Mock.mock(param)
})
