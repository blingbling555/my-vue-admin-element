import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入icon
import './assets/icon'

// 引入全局注册的组件
import commonComponent from './utils/commonComponents';
Vue.use(commonComponent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
