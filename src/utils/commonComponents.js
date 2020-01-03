/**
 * desc:全局注册组件
 * 
 * */ 
import svgIcon from '../components/svgicon'; 
const common = {
    install: function(Vue) {
        Vue.component('svgIcon',svgIcon)
    }
}

export default common;