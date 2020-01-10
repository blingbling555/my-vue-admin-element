import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/',
  timeout: 5000 // request timeout
})

// // 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
   if(getToken()){
    config.headers['X-Token'] = getToken();
   }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// // 添加响应拦截器,处理错误,有错误弹框
service.interceptors.response.use(function (response) {
    let res=response.data;
    // 对响应数据做点什么
    if(res.status!==200) {
     Message({
            message: res.msg || 'Error',
            type: 'error',
            duration: 5 * 1000
          })
     return Promise.reject(new Error(res.msg) || 'Error');
    }else {
    return res;
}

    
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service
