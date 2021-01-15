import { createStore } from 'vuex'
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName]=value.default
  modules[moduleName].namespaced = true;   //打开命名空间
  return modules
}, {})
/*
  reduce callback函数第一个参数是上一次回调函数的返回值，或者提供的初始值（initialValue）
  callback函数第二个参数是当前正在处理的元素
  reduce方法第二个参数写的是[]，modules就是数组。
  reduce方法第二个参数写的是{}，modules就是对象。
*/
export default createStore({
  modules,
  state: {
    collapsed:false,
  },
  mutations: {
      setCollapsed(state,value){
        state.collapsed =!state.collapsed
      }
  },
  actions: {
    
  },
  
})
