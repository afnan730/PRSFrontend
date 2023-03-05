<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasStatisticDetails">
    <table 
      class="table table-borderless"
      v-for="SF in StatisticDetails"
      :key="SF.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Statistic Form</th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Hospital name</td>
          <td>{{ SF.hospital_name }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Hospital address</td>
          <td>{{ SF.hospital_address }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Patient address</td>
          <td>{{ SF.patient_address }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Patient profession</td>
          <td>{{ SF.patients_profession }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Entry date</td>
          <td>{{ SF.date_of_entry }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Exit date</td>
          <td>{{ SF.exit_date }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Final diagnosis</td>
          <td>{{ SF.final_diagnosis }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Accident cause</td>
          <td>{{ SF.accident_cause? SF.accident_cause:"No Accident" }}</td>
        </tr>
        <tr v-if="SF.accident_cause">
          <td class="text-dark fw-bold">Accident date</td>
          <td>{{ SF.incident_date }}</td>
        </tr>
        <tr v-if="SF.accident_cause">
          <td class="text-dark fw-bold">Accident time</td>
          <td>{{ SF.incident_time }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Diabetes test</td>
          <td>{{ SF.diabetes_test }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Immunization againts diseases</td>
          <td>{{ SF.immunization_against_diseases }}</td>
        </tr>
        <tr v-if="SF.immunization_date">
          <td class="text-dark fw-bold">Immunization date</td>
          <td>{{ SF.immunization_date }}</td>
        </tr>
        <tr v-if="SF.immunization_place">
          <td class="text-dark fw-bold">Immunization place</td>
          <td>{{ SF.immunization_place }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Patient condition upon exit</td>
          <td>{{ SF.patients_condition_upon_exit }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Was the body autopsied</td>
          <td>{{ SF.was_the_body_autopsied }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Statistician ID</td>
          <td>{{ SF.user_id }}</td>
        </tr>
         <tr>
          <td class="text-dark fw-bold">Data entry date</td>
          <td>{{ SF.date }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasStatisticDetails && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasStatisticDetails">
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
    StatisticDetails() {
      return this.$store.getters["Statistician/StatisticDetails"];
    },
    hasStatisticDetails() {
      return (
        !this.isLoading &&
        this.$store.getters["Statistician/hasStatisticDetails"]
      );
    },
  },
  created() {
    this.fetchStatisticDetails();
  },
  methods: {
    async fetchStatisticDetails() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("Statistician/fetchStatisticDetails",id);
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
  background-color: #3d3d57;
}

thead tr th {
  padding: 10px 0px;
}
</style>