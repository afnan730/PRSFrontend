<template>
  <div class="row mt-5 ms-3 text-center">
    <h4 class="mt-5">Antenatal Admission Follow-up Sheet</h4>
  </div>
  <div class="mt-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
     <div ref="printView"   v-else-if="hasAntenatalAdmissionFollowUpSheet">
    <table class="table">
      <thead class="text-center">
        <tr>
          <th scope="col">Date and Time</th>
          <th scope="col">Follow up & instructions</th>
          <th scope="col">Doctor ID</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="AAF in AntenatalAdmissionFollowUpSheet" :key="AAF.id">
          <th>{{ AAF.date }}</th>
          <td>{{ AAF.follow_up_and_instructions }}</td>
          <td>
            {{ AAF.user_id }}
          </td>
        </tr>
      </tbody>
    </table>
    
     </div>

     <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasAntenatalAdmissionFollowUpSheet && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasAntenatalAdmissionFollowUpSheet">
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
    AntenatalAdmissionFollowUpSheet() {
      return this.$store.getters["doctor/AntenatalAdmissionFollowUpSheet"];
    },
    hasAntenatalAdmissionFollowUpSheet() {
      return (
        !this.isLoading &&
        this.$store.getters["doctor/hasAntenatalAdmissionFollowUpSheet"]
      );
    },
  },
  created() {
    this.fetchAntenatalAdmissionFollowUpSheet();
  },
  methods: {
    async fetchAntenatalAdmissionFollowUpSheet() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch(
          "doctor/fetchAntenatalAdmissionFollowUpSheet",id
        );
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