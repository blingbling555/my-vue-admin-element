<!--  -->
<template>
<div class='login-container'>
   <el-form :model="loginForm" class="login-form" :rules="rules" ref="loginForm" autocomplete="on">
     <div class="login-title">登录页面</div>
    <el-form-item class="login-input" prop="username">
        <span class="svg-container">
            <svg-icon icon-class="yonghu" />
        </span>
        <el-input v-model="loginForm.username" placeholder="username" ></el-input>
    </el-form-item>
    <el-form-item class="login-input" prop="password">
        <span class="svg-container">
            <svg-icon icon-class="mima" />
        </span>
        <el-input v-model="loginForm.password" placeholder="password" ></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')" style="width:100%;">登录</el-button>
    </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
components: {},
data() {
  const validateUsername = (rule, value, callback) => {
      if (value.length>20) {
        callback(new Error('不能大于20.'))
      } else if(value.length == 0){
         callback(new Error('用户名不能为空.'))
      } else{
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位数.'))
      } else {
        callback()
      }
    }
return {
  loginForm:{
      username:"admin",
      password:"123456"
  },
  rules:{
      username: [{ required: true, trigger: 'blur', validator: validateUsername }],
      password: [{ required: true, trigger: 'blur', validator: validatePassword }]
  }
};
},
computed: {},
watch: {},
methods: {
  onSubmit(loginForm) {
     this.$refs[loginForm].validate((valid) => {
          if (valid) {
            this.$store.dispatch('user/login', this.loginForm).then(()=>{
              this.$router.replace('/')
            })
            
          } 
          else {
            console.log('error submit!!');
            return false;
          }
    });
 }
},

created() {

},
mounted() {

},
}
</script>
<style  scoped lang="scss">
 .login-container {
     width: 100vw;
     height:100vh;
     background:#2D3A4B;
 }
 .login-title {
     padding: 15px 0px 30px;
     text-align: center;
     font-weight: bold;
     font-size: 26px;
     color: #eee;

 }
 .login-form {
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
 }
   ::v-deep .login-input  {
     position:relative;
     .el-input__inner {
         padding:0 15px 0px 30px;
     }
     .svg-container {
        position:absolute;
        left:8px;
        top:0;
        color:#889AA4;
        z-index:10;
     }
 }
     
</style>