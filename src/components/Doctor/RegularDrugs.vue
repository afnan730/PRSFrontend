
<template>
  <div class="row mt-5 ms-3 text-center">
    <h4 class="mt-5">Regular Drugs</h4>
  </div>
  <div class="mt-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView"  v-else-if="hasRegularDrugs">
    <table class="table">
      <thead class="text-center">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Drug</th>
          <th scope="col">Dose</th>
          <th scope="col">Route</th>
          <th scope="col">Frequency</th>
          
          <th scope="col">Time</th>
          <th scope="col">Doctor ID</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="RD in RegularDrugs" :key="RD.id">
          <th>{{ RD.date }}</th>
          <th>{{ RD.drug}}</th>
          <th>{{ RD.dose }}</th>
          <th>{{ RD.route }}</th>
          <th>{{ RD.frequency }}</th>
          <th>{{ RD.time }}</th>
          <th>{{ RD.user_id }}</th>
        </tr>
      </tbody>
    </table>
    </div>
     <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasRegularDrugs && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
    
  </div>
  <print-button v-if="hasRegularDrugs">
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
    RegularDrugs() {
      return this.$store.getters["doctor/RegularDrugs"];
    },
    hasRegularDrugs() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasRegularDrugs"]
      );
    },
  },
  created() {
    this.fetchRegularDrugs();
  },
  methods: {
    async fetchRegularDrugs() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchRegularDrugs",id);
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