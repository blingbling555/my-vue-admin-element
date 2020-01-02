
<script>
/**
 * 
 * 例如：路由/redirect/book/list?a=1&b=2
 * 会跳转到/book/list?a=1&b=2,并把参数携带过去
*/
export default {
  name:"Redirect",
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>