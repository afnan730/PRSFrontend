
<template>
  <div class="row mt-5 ms-3">
    <h4 class="header2 text-center mt-5 ms-1">Investigation Request</h4>
  </div>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasInvestigationRequest">
    <table class="table" >
      <thead class="table text-light">
        <tr>
          <th>Request Date</th>
          <th>Department</th>
          <th>Word</th>
          <th>Bed no</th>
          <th>Clinical remarks</th>
          <th>Requested Investigation</th>
          <th>Others</th>
          <th>Doctor ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="IR in InvestigationRequest"
      :key="IR.id">
          <td>{{ IR.date }}</td>
          <td>{{ IR.department? IR.department :"unknown"}}</td>
          <td>{{ IR.word }}</td>
          <td>{{ IR.bed_no }}</td>
          <td>{{ IR.clinical_remarks }}</td>
          <td>{{ IR.requests }}</td>
          <td>{{  IR.other? IR.other: "No"}}</td>
          
          <td>{{ IR.user_id }}</td>
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
  <print-button v-if="hasInvestigationRequest">
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
    InvestigationRequest() {
      return this.$store.getters["doctor/InvestigationRequest"];
    },
    hasInvestigationRequest() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasInvestigationRequest"]
      );
    },
  },
  created() {
    this.fetchInvestigationRequest();
  },
  methods: {
    async fetchInvestigationRequest() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchInvestigationRequest",id);
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
thead {
  background-color:  #64415b;
 
}
td {
  font-size: 1.2rem;
}

thead tr th {
  padding: 10px 5px;
 
 
}
</style>