
<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasObstericalHistory">
    <table 
      class="table table-borderless"
      v-for="OH in ObstericalHistory"
      :key="OH.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Obstetrical History</th>
          <th class="col-5"></th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Date and Time</td>
          <td class="font-weight-normal">{{ OH.date }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Doctor ID</td>
          <td class="font-weight-normal">{{ OH.user_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Gr</td>
          <td>{{ OH.gr }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Number of pregnancies</td>
          <td>{{ OH.para_1 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Number of abortions</td>
          <td>{{ OH.para_2 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Comments on par</td>
          <td>{{ OH.comments_on_par }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">LMP</td>
          <td>{{ OH.lmp }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">EDD</td>
          <td>{{ OH.edd[0] }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Scan EDD</td>
          <td>{{ OH.scan_edd }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Past medical history</td>
          <td>
            {{ OH.past_medical_history }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Past surgical history</td>
          <td>
            {{ OH.past_surgical_history }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Past drugs history</td>
          <td>
            {{ OH.drug_history }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Social history</td>
          <td>
            {{ OH.social_history }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Family history</td>
          <td>{{ OH.family_history }} ,{{ OH.others }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">CVS & Chest examination</td>
          <td>
            {{ OH.chest_cvs_examination }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Comments & special plans</td>
          <td>
            {{ OH.comments_and_special_plans }}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasObstericalHistory  && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasObstericalHistory">
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
    ObstericalHistory() {
      return this.$store.getters["doctor/ObstericalHistory"];
    },
    hasObstericalHistory() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasObstericalHistory"]
      );
    },
  },
  created() {
    this.fetchObstericalHistory();
  },
  methods: {
    async fetchObstericalHistory() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchObstericalHistory",id);
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