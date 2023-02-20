<template>
  <div class="row mt-5 ms-3">
    <h4 class="header2 mt-5 ms-1">Nurse Progress Notes</h4>
  </div>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasNurseProgressNotes">
    <table class="table" >
      <thead class="table text-light">
        <tr>
          <th>Date</th>
          <!-- <th>Time</th> -->
          <th>Patient condition</th>
          <th>Remarks</th>
          <th>Nurse Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="NP in NurseProgress" :key="NP.id">
          <td>{{ NP.date }}</td>
          <!-- <td>{{ NP.date}}</td> -->
          <td>{{ NP.patient_condition }}</td>
          <td>{{ NP.remarks }}</td>
          <td>{{ NP.user_id}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasNurseProgressNotes && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  
  </div>
  <print-button v-if=" hasNurseProgressNotes">
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
    NurseProgress() {
      console.log()
      return this.$store.getters["Nurse/NurseProgress"];
    },
    hasNurseProgressNotes() {
      return !this.isLoading && this.$store.getters["Nurse/hasNurseProgress"];
    },
  },
  created() {
    this.fetchNurseProgress();
  },
  methods: {
    async fetchNurseProgress() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("Nurse/fetchNurseProgress",id);
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