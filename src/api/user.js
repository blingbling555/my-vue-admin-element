import request from '@/utils/request';
// 登录，登出，得到用户信息的请求方法，真正请求是写在vuex里的
export function login(data){
    return request({
        url: '/userdemo/login',
        method: 'post',
        data
      })
}


export function getUser() {
  return request({
    url:'/userdemo/getUser',
    method: 'post'
  })
}