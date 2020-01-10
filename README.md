# 1、使用文档

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 相关
相关接口：https://github.com/blingbling555/node-admin

# 2、部分知识点

## 2.1、icon

图标是用的iconfontde svg,主要是用的svg，所以把svg封装成了一个组件；

#### 使用操作

```
<svg-icon iconClass="类名" />
```

#### 思路

```js
在main.js引入在iconfont下载的js,我放在src/assets/icon/index.js里面

组件：放在components/svgicon/index.vue

//main.js注册为全局组件
import commonComponent from './utils/commonComponents';
Vue.use(commonComponent)
```

手把手带你优雅使用图表icon https://juejin.im/post/59bb864b5188257e7a427c09 ，更优雅的用法



## 2.2、权限








# 3、参考链接
路由meta下参数的含义 https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/router-and-nav.html 

