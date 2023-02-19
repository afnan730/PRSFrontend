
<template>
  <div class="row mt-5 ms-3">
    <h4 class="header2 text-center mt-5 ms-1">Doctor Progress Notes</h4>
  </div>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasDoctorProgressNotes">
    <table class="table" >
      <thead class="table text-light">
        <tr>
          <th>Date and Time</th>
          <th>Patient condition</th>
          <th>Investigation</th>
          <th>Instruction</th>
          <th>Doctor ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="DP in DoctorProgressNotes" :key="DP.id">
          <td>{{ DP.date }}</td>
          <td>{{ DP.patient_condition }}</td>
          <td>{{ DP.investigation }}</td>
          <td>{{ DP.instruction }}</td>
          <td>{{ DP.user_id }}</td>
        </tr>
      </tbody>
    </table>
    </div>
     <div class="alert alert-dark text-center h5 " role="alert" v-else-if="!hasDoctorProgressNotes && !errors" >
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if=" hasDoctorProgressNotes">
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
    DoctorProgressNotes() {
      return this.$store.getters["doctor/DoctorProgressNotes"];
    },
    hasDoctorProgressNotes() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasDoctorProgressNotes"]
      );
    },
  },
  created() {
    this.fetchDoctorProgressNotes();
  },
  methods: {
    async fetchDoctorProgressNotes() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchDoctorProgressNotes",id);
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