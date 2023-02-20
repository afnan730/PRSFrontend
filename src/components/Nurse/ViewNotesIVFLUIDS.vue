<template>
  <div class="row mt-5 ms-3">
    <h4 class="header2 mt-5 ms-1">Nurse I.V.Fluids Notes</h4>
  </div>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasNurseIVFluids">
    <table  class="table">
      <thead class="table text-light">
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Volume & Concentration</th>
          <th>Rate ml/br</th>
          <th>Additional Amount</th>
          <th>Discounted on</th>
          <th>Discounted by</th>
          <th>Nurse ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="IV in NurseIVFluids" :key="IV.id">
          <td>{{ IV.date[0] }}</td>
          <td>{{ IV.date[1] }}</td>
          <td>{{ IV.volume_and_concentration }}</td>
          <td>{{ IV.rate_ml_br }}</td>
          <td>{{ IV.additives_amount }}</td>
          <td>{{ IV.discontinued_on}}</td>
          <td>{{  IV.discontinued_by}}</td>
         
          <td>{{ IV.user_id }}</td>
        </tr>
      
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasNurseIVFluids && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasNurseIVFluids">
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
    NurseIVFluids() {
      console.log(this.$store.getters["Nurse/NurseIVFluids"])
      return this.$store.getters["Nurse/NurseIVFluids"];
    },
    hasNurseIVFluids() {
      return !this.isLoading && this.$store.getters["Nurse/hasNurseIVFluids"];
    },
  },
  created() {
    this.fetchNurseIVFluids();
  },
  methods: {
    async fetchNurseIVFluids() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("Nurse/fetchNurseIVFluids",id);
     
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