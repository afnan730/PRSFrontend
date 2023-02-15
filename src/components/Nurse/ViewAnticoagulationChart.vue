<template>
  <div class="row mt-5 ms-3">
    <h4 class="header2 mt-5 ms-1">Anticogulation Chart</h4>
  </div>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView"  v-else-if="hasAnticogulationChart">
    <table class="table" >
      <thead class="table text-light">
        <tr>
          <th>Date</th>
          <th>Time</th>

          <th>Tick for INR</th>
          <th>INR</th>
          <th>APTT</th>
          <th>APT</th>
          <th>Dosage of Warfarin</th>
          <th>Doctor ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="AC in AnticogulationChart" :key="AC.id">
          <td>{{ AC.editedDate }}</td>
          <td>{{ AC.editedTime }}</td>
          <td>{{ AC.tick_for_inr }}</td>
          <td>{{ AC.inr }}</td>
          <td>{{ AC.aptt }}</td>
          <td>{{ AC.apt }}</td>
          <td>{{ AC.dosage_of_warfarin }}</td>
          <td>{{ AC.user_id }}</td>
        </tr>
      </tbody>
    </table>
    </div>
      <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasAnticogulationChart && !errors" >
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasAnticogulationChart">
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
    AnticogulationChart() {
      return this.$store.getters["doctor/AnticogulationChart"];
    },
    hasAnticogulationChart() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasAnticogulationChart"]
      );
    },
  },
  created() {
    this.fetchAnticogulationChart();
  },
  methods: {
    async fetchAnticogulationChart() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchAnticogulationChart",id);
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      this.isLoading = false;
      //  console.log(this.$store.getters['admin/users']);
    },
  },
};
</script>
     
          <style scoped>
.header2 {
  margin-left: -4rem;
}

@media only screen and (max-width: 900px) {
  /* For desktop: */
  .header2 {
    margin-left: -2.7rem;
  }
}
thead {
  background-color: #64415b;
}

thead tr th {
  padding: 10px 0px;
}
</style>