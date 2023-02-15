<template>
  <nav-bar></nav-bar>

  <div class="row mainContainer">
    <!-- Side Bar-->
    <div class="col-3">
      <statistic-sidebar></statistic-sidebar>
    </div>

    <!--Rigth Side-->
    <div class="col-md-7 col mt-4">
      <!--Components-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import StatisticSidebar from "@/components/Nav/StatisticSidebar.vue";

export default {
  components: {
    StatisticSidebar,
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

  margin: 0;
}
</style>