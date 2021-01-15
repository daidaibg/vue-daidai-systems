
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    ["import", { "libraryName": "ant-design-vue" }] // `style: true` 会加载 less 文件 , "libraryDirectory": "es", "style": "css"
  ]
 
}
