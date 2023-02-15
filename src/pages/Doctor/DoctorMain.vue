<template>
  <nav-bar></nav-bar>

  <div class="row mainContainer">
    <!-- Side Bar-->
    <div class="col-3">
      <doctor-sidebar></doctor-sidebar>
    </div>

    <!--Rigth Side-->
    <div class="col-md-7 col mt-4">
      <!--Components-->
      <router-view></router-view>
    </div>
  </div>
</template>
  
  <script>
  import DoctorSidebar from "../../components/Nav/DoctorSidebar.vue";


export default {
  components: {
   DoctorSidebar
  },
  data() {
    return {};
  },
};
</script>
  
  <style scoped>
.mainContainer {
  background-color: #f5f1f4;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
}
</style>