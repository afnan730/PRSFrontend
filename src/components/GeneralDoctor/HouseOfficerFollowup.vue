<template>
  <div class="row mt-5 ms-3 text-center">
    <h4 class="mt-5">House Officer Patient Follow-up</h4>
  </div>
  <div class="mt-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
     <div ref="printView" v-else-if="hasGD_patient_follow_up_sheet">
    <table  class="table">
      <thead class="text-center">
        <tr>
          <th scope="col">Date and Time</th>
          <th scope="col">B.P</th>
          <th scope="col">Odema</th>
          <th scope="col">FHR</th>
          <th scope="col">Urine</th>
          <th scope="col">Remarks</th>
          <th scope="col">Doctor ID</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="GP in GD_patient_follow_up_sheet" :key="GP.id">
          <td>{{ GP.date }}</td>
          <td>{{ GP.bp }}</td>

          <td>{{ GP.odema }}</td>
          <td>{{ GP.fhr }}</td>
          <td>{{ GP.urine }}</td>

          <td>{{ GP.remarks }}</td>
          <td>{{ GP.user_id }}</td>
        </tr>
      </tbody>
    </table>
     </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasGD_patient_follow_up_sheet && !errors" >
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
   <print-button v-if="hasGD_patient_follow_up_sheet">
    Print report
 </print-button>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      errors: null,
      index: 0,
    };
  },
  computed: {
    GD_patient_follow_up_sheet() {
      return this.$store.getters["generalDoctor/GD_patient_follow_up_sheet"];
    },
    hasGD_patient_follow_up_sheet() {
      return (
        !this.isLoading &&
        this.$store.getters["generalDoctor/hasGD_patient_follow_up_sheet"]
      );
    },
  },
  created() {
    this.fetchGD_patient_follow_up_sheet();
  },
  methods: {
    async fetchGD_patient_follow_up_sheet() {
      const id=this.$route.params.patientId;
      this.isLoading = true;
      try {
        await this.$store.dispatch(
          "generalDoctor/fetchGD_patient_follow_up_sheet",id
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