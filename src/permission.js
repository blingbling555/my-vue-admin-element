import router from './router';
import store from './store'
import {getToken} from './utils/auth';

router.beforeEach(async(to,from,next)=> {
    // 白名单的页面
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
    const hasToken = getToken();
    // 1、token不存在时
    if(!hasToken){
        // 在白名单里，直接通行
        if (whiteList.indexOf(to.path) !== -1) {
            next()
          } else {
            //没有token，不在白名单就去登录
            next(`/login?redirect=${to.path}`)
          }
    }else{
    //   2、有token时
    // 2.1、去登录页面时，跳转去首页
       if(to.path === '/login'){
        next({ path: '/' })
       }else{
    // 2.2、去其他页面时，先看是否有获取用户信息
    // 2.2.1、如果有roles的话，就获取过，如果没有就要获取用户信息
     const hasRoles = store.getters.roles&& store.getters.roles.length>0;
       if(hasRoles){
        next()
       }else{
        const {roles} = await store.dispatch('user/getInfo');
        next()
       }
      

       }
    }
    

})
