<template>  
<nav-bar></nav-bar>
  <div class="row mainContainer">
  
      
    <!-- Side Bar-->
    <div class="col-3">
        <admin-sidebar></admin-sidebar>
    </div>

    <!--Rigth Side-->
    <div class="col-md-7 col mt-4">
       
      <!--Components-->
     <router-view></router-view>
    </div>
  </div>
</template>

<script>

import AdminSidebar from '../../components/Nav/AdminSidebar.vue';
export default{
    components: {AdminSidebar  },
  
  
}

</script>

<style scoped>
.mainContainer {
  background-color: #ebeff3;
  overflow-x:hidden ;
  /* background-color: rgb(250, 249, 255); */
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
}
</style>