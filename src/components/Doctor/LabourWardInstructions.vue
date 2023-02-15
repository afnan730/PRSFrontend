
<template>
  <div class="row mt-5 ms-3">
    <h4 class="header2 text-center mt-5 ms-1">Labour Ward Instructions</h4>
  </div>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasLabourWardInstructions">
    <table class="table" >
      <thead class="table text-light">
        <tr>
          <th>Date and Time</th>
          <th>Instructions</th>
          <th>Doctor ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="LWI in LabourWardInstructions" :key="LWI.id">
          <td>{{ LWI.date }}</td>
          <td>{{ LWI.instruction }}</td>
          <td>{{ LWI.user_id }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasLabourWardInstructions  && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasLabourWardInstructions">
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
    LabourWardInstructions() {
      return this.$store.getters["doctor/LabourWardInstructions"];
    },
    hasLabourWardInstructions() {
      return (
        !this.isLoading &&
        this.$store.getters["doctor/hasLabourWardInstructions"]
      );
    },
  },
  created() {
    this.fetchLabourWardInstructions();
  },
  methods: {
    async fetchLabourWardInstructions() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchLabourWardInstructions",id);
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      this.isLoading = false;
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