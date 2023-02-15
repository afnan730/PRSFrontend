<template>
  <nav-bar></nav-bar>

  <div class="row mainContainer">
    <!-- Side Bar-->
    <div class="col-3">
      <gn-dr-sidebar></gn-dr-sidebar>
    </div>

    <!--Rigth Side-->
    <div class="col-md-7 col mt-4">
      <!--Components-->
      <router-view></router-view>
    </div>
  </div>
</template>
  
  <script>
  import GnDrSidebar from "../../components/Nav/GnDrSidebar.vue";


export default {
  components: {
   GnDrSidebar
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