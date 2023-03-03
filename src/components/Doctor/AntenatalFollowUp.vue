<template>
  <div class="row mt-5 ms-3 text-center">
    <h4 class="mt-5">Antenatal Follow-up</h4>
  </div>
  <div class="mt-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
     <div ref="printView"   v-else-if="hasAntenatalFollowUp">
    <table class="table">
      <thead class="text-center">
        <tr>
          <th scope="col">Date and Time</th>
          <th scope="col">B.P</th>
          <th scope="col">F.L</th>
          <th scope="col">Pres</th>
          <th scope="col">Eng.</th>
          <th scope="col">F.H</th>
          <th scope="col">HB%</th>
          <th scope="col">Urine</th>
          <th scope="col">Comment</th>
          <th scope="col">Next visit</th>
          <th scope="col">Doctor ID</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="AF in AntenatalFollowUp" :key="AF.id">
          <td>{{ AF.date }}</td>

          <td>{{ AF.b_p }}</td>
          <td>{{ AF.f_l }}</td>
          <td>{{ AF.pres }}</td>
          <td>{{ AF.eng }}</td>
          <td>{{ AF.f_h }}</td>
          <td>{{ AF.h_b }}</td>
          <td>
            {{ AF.urine }}
          </td>
          <td>{{ AF.comment }}</td>
          <td>{{ AF.next_visit }}</td>
          <td>{{ AF.user_id }}</td>
        </tr>
      </tbody>
    </table>
     </div>
     <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasAntenatalFollowUp && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasAntenatalFollowUp">
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
    AntenatalFollowUp() {
      return this.$store.getters["doctor/AntenatalFollowUp"];
    },
    hasAntenatalFollowUp() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasAntenatalFollowUp"]
      );
    },
  },
  created() {
    this.fetchAntenatalFollowUp();
  },
  methods: {
    async fetchAntenatalFollowUp() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchAntenatalFollowUp",id);
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