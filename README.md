# vue-v3

## 安装
```
npm install
```

### 启动
```
npm run serve
```

### 打包
```
npm run build
```

### css变量

- 基础css

  ```js
  src\styles\css\main.less
  ```

  

- 跟随系统变色

  ```js
  src\styles\index.less //里面不能写任何东西
  
  src\styles\variables.less  //变量位置
  
  //demo:
  :root { 
      --PC: @primary-color;   //color.less中加入css原生变量：--PC
   }
  //使用 
  background:var( --PC);
  
  //配置跟随系统变色的class
  .primary-color{
    color:@primary-color
  }
  
  ```

- 不跟随系统less变量

  ```js
  src\styles\css\base.less
  ```

  

