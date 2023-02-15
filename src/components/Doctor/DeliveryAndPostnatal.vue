<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasDeliveryAndPostnatal">
    <table 
      class="table table-borderless"
      v-for="DP in DeliveryAndPostnatal"
      :key="DP.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Delivery and Postnatal</th>
          <th class="col-5"></th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Mode of delivery</td>
          <td class="font-weight-normal">{{ DP.mode_of_delivery }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Date and Time</td>
          <td>{{ DP.date }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Placenta</td>
          <td>{{ DP.placenta }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Episiotomy</td>
          <td>{{ DP.episiotomy }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Decircumcision</td>
          <td>{{ DP.decircumcision }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Lactation</td>
          <td>{{ DP.location }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Anti D</td>
          <td>{{ DP.anti_d }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Blood loss</td>
          <td>{{ DP.blood_loss }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Comments</td>
          <td>
            {{ DP.comments }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baby </td>
          <td>{{ DP.baby_gender }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Weight in kg</td>
          <td>{{ DP.weight }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Apgar score</td>
          <td>{{ DP.apgar_score }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Refer to scub</td>
          <td>{{ DP.refer_to_scbu }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Date of discharge</td>
          <td>.....................</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Postnatal follow up</td>
          <td>
            {{ DP.postnatal_follow_up }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Doctor ID</td>
          <td>{{ DP.user_id }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasDeliveryAndPostnatal && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
   <print-button v-if="hasDeliveryAndPostnatal">
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
    DeliveryAndPostnatal() {
      return this.$store.getters["doctor/DeliveryAndPostnatal"];
    },
    hasDeliveryAndPostnatal() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasDeliveryAndPostnatal"]
      );
    },
  },
  created() {
    this.fetchDeliveryAndPostnatal();
  },
  methods: {
    async fetchDeliveryAndPostnatal() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchDeliveryAndPostnatal",id);
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