<template>
   <div class="app-wrapper">
       <sidebar class="sidebar-container"></sidebar>
       <div class="main-container"></div>
    
   </div>
</template>

<script>
import sidebar from './components/sidebar'
export default {
  name:"LayOut",
  components: {sidebar}
}
</script>

<style scoped lang="scss">
$siderBarWidth: 210px;
.sidebar-container {
   position: fixed;
   left: 0;
   top:0;
   bottom: 0;
   width: $siderBarWidth;
   background: yellowgreen;
}
.main-container {
   margin-left: $siderBarWidth;
   height: 100vh;
   background: pink;
}
</style>>
