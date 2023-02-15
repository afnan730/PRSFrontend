<template>
  <div class="row mt-5 ms-3 text-center">
    <h4 class="mt-5">Blood Products & IV Fluids</h4>
  </div>
  <div class="mt-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
     <div ref="printView"  v-else-if="hasBloodProductsAndIVFluids">
    <table class="table">
      <thead class="text-center">
        <tr>
          <th scope="col">Date and Time</th>
          <th scope="col">Blood Products & IV Fluids</th>
          <th scope="col">Doctor ID</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="BP in BloodProductsAndIVFluids" :key="BP.id">
          <th>{{ BP.date }}</th>
          <td>{{ BP.blood_product_and_iv_fluid }}</td>
          <td>
            {{ BP.user_id }}
          </td>
        </tr>
      </tbody>
    </table>
     </div>
     <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasBloodProductsAndIVFluids && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if=" hasBloodProductsAndIVFluidss">
    Print report
 </print-button>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      errors: null,
    };
  },
  computed: {
    BloodProductsAndIVFluids() {
      return this.$store.getters["doctor/BloodProductsAndIVFluids"];
    },
    hasBloodProductsAndIVFluids() {
      return (
        !this.isLoading &&
        this.$store.getters["doctor/hasBloodProductsAndIVFluids"]
      );
    },
  },
  created() {
    this.fetchBloodProductsAndIVFluids();
  },
  methods: {
    async fetchBloodProductsAndIVFluids() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchBloodProductsAndIVFluids",id);
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      this.isLoading = false;
      //  console.log(this.$store.getters['admin/users']);
    },
  },
};
</script>

<style  scoped>
thead {
  background-color: #64415b;
  color: white;
}
</style>