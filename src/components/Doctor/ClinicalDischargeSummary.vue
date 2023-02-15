<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasClinincalDischargeSummary">
    <table 
      class="table table-borderless"
      v-for="CD in ClinincalDischargeSummary"
      :key="CD.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Clinincal Discharge Summary</th>
          <th class="col-5"></th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Data recording date</td>
          <td class="font-weight-normal">{{ CD.date }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Doctor ID</td>
          <td class="font-weight-normal">{{ CD.user_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Final diagnosis</td>
          <td class="font-weight-normal">
            {{ CD.final_dagnosis }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">
            Summary (History. Positive progress in hospital, Treatment)
          </td>
          <td>
            {{ CD.summary }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Operation (with dates)</td>
          <td>
            {{ CD.operation }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Treatment recommended on discharge</td>
          <td>
            {{ CD.treatment_recommended_on_discharge }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Follow up arrangment</td>
          <td>
            {{ CD.follow_up_arrangements }}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasClinincalDischargeSummary && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
   
  </div>
  <print-button v-if="hasClinincalDischargeSummary">
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
    ClinincalDischargeSummary() {
      return this.$store.getters["doctor/ClinincalDischargeSummary"];
    },
    hasClinincalDischargeSummary() {
      return (
        !this.isLoading &&
        this.$store.getters["doctor/hasClinincalDischargeSummary"]
      );
    },
  },
  created() {
    this.fetchClinincalDischargeSummary();
  },
  methods: {
    async fetchClinincalDischargeSummary() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchClinincalDischargeSummary",id);
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
  background-color: #4a5d88;
}
td {
  font-size: 1.2rem;
}

thead tr th {
  padding: 10px 0px;
  font-size: 1.2rem;
}
</style>