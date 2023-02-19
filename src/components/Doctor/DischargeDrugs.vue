
<template>
  <div class="row mt-5 ms-3 text-center">
    <h4 class="mt-5">Discharge Drugs Details</h4>
  </div>
  <div class="mt-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasDischargeDrugs">
    <table class="table" >
      <thead class="text-center">
        <tr>
          <th scope="col">Date and Time</th>
          <th scope="col">Drugs</th>
          <th scope="col">Dose</th>
          <th scope="col">Route</th>
          <th scope="col">Frequency</th>
          <th scope="col">No. of days</th>
          <th scope="col">Remarks</th>
          <th scope="col">Doctor ID</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="DD in DischargeDrugs" :key="DD.id">
          <th>{{ DD.date }}</th>
          <th>{{ DD.drug_name }}</th>
          <th>{{ DD.dose }}</th>
          <th>{{ DD.route }}</th>
          <th>{{ DD.frequency }}</th>
          <th>{{ DD.no_day }}</th>
          <th>{{ DD.remarks? DD.remarks : "None" }}</th>
          <th>{{ DD.user_id }}</th>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasDischargeDrugs && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
   <print-button v-if=" hasDischargeDrugs">
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
    DischargeDrugs() {
      return this.$store.getters["doctor/DischargeDrugs"];
    },
    hasDischargeDrugs() {
      return !this.isLoading && this.$store.getters["doctor/hasDischargeDrugs"];
    },
  },
  created() {
    this.fetchDischargeDrugs();
  },
  methods: {
    async fetchDischargeDrugs() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchDischargeDrugs",id);
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