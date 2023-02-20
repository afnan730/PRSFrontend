<template>
  <nav-bar></nav-bar>

  <div class="row mainContainer">
    <!-- Side Bar-->
    <div class="col-3">
      <nurse-sidebar></nurse-sidebar>
    </div>

    <!--Rigth Side-->
    <div class="col-md-7 col mt-4">
      <!--Components-->
      <router-view></router-view>
    </div>
  </div>
</template>
  
  <script>
import NurseSidebar from "@/components/Nav/NurseSidebar.vue";

export default {
  components: {
   NurseSidebar
  },
  data() {
    return {};
  },
};
</script>
  
  <style scoped>
.mainContainer {
  background-color: #f5f1f4;
  /* background-color: rgb(250, 249, 255); */
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
}
</style>