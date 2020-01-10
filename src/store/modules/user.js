import {login,getUser} from '@/api/user';
import {setToken,getToken} from '@/utils/auth';
const state = {
    token:getToken(),
    name:"",
    roles:[]
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
      },
    SET_NAME:(state, name)=>{
        state.name = name;
    },
    SET_ROLES:(state, roles)=>{
        state.roles = roles;
    }
  }

const actions = {
    // 返回的是Promise
    login({commit},userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve,reject)=>{
          login({username:username.trim(),password:password})
          .then(res=>{
              
             const data = res.data;
             commit('SET_TOKEN',data.token,data);
            //  token保存在vuex中，但是刷新页面就没有了，所以需要保存在cookie中
             setToken(data.token);
             resolve();
          })
          .catch(error=>{
              reject(error)
          })
      })
    },
    getInfo({commit}){
        return new Promise((resolve,reject)=> {
            // 它们加了token在这里，有点疑惑，不是有拦截请求前吗，加了的
            getUser().then(response=>{
                if(response.status == 200){
                    let {name,roles} = response.data
                    commit('SET_NAME',name);
                    commit('SET_ROLES',roles);
                    resolve(response.data)
                }
            }).catch(error=>{
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}