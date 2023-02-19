

<template>
  <div class="row mt-5 ms-3 text-center">
    <h4 class="mt-5">Treatment Order Sheet</h4>
  </div>
  <div class="mt-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasTreatmentOrderSheet">
    <table class="table" >
      <thead class="text-center">
        <tr>
          <th scope="col">Date start</th>
          <th scope="col">Medication</th>
          <th scope="col">Date end</th>
          <th scope="col">Doctor ID</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="TO in TreatmentOrderSheet" :key="TO.id">
          <th>{{ TO.start_date }}</th>
          <th>{{ TO.medication }}</th>
          <th>{{ TO.end_date }}</th>
          <th>{{ TO.user_id }}</th>
        </tr>
      </tbody>
    </table>
    </div>
     <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasTreatmentOrderSheet && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasTreatmentOrderSheet">
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
    TreatmentOrderSheet() {
      return this.$store.getters["doctor/TreatmentOrderSheet"];
    },
    hasTreatmentOrderSheet() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasTreatmentOrderSheet"]
      );
    },
  },
  created() {
    this.fetchTreatmentOrderSheet();
  },
  methods: {
    async fetchTreatmentOrderSheet() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchTreatmentOrderSheet",id);
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