<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView"  v-else-if="hasLabourRecords">
    <table 
      class="table table-borderless"
      v-for="LR in LabourRecords"
      :key="LR.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Vaginal Examination Findings</th>
          <th class="col-5"></th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Date and Time</td>
          <td class="font-weight-normal">{{ LR.date }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Doctor ID</td>
          <td class="font-weight-normal">{{ LR.user_id }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">1. CX</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Position</td>
          <td>{{ LR.cx_position }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Effacement%</td>
          <td>{{ LR.cx_effacement }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Consistency</td>
          <td>{{ LR.cx_consistency }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Dilatation</td>
          <td>{{ LR.cx_dilatation }} cm</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">2. Presenting part</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Station</td>
          <td>{{ LR.presenting_part_station }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Caput</td>
          <td>{{ LR.presenting_part_caput }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Moulding</td>
          <td>{{ LR.presenting_part_moulding }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">3. Membrane</td>
          <td>{{ LR.membranes }}  ({{ LR.how_reptured? LR.how_reptured: "" }})</td>
          
        </tr>
        <tr v-if="LR.membranes==='Reptured'">
          <td  class="text-dark fw-bold">Time</td>
          <td>{{ LR.if_ruptur_time }}</td>
        </tr>
        <tr v-if="LR.membranes==='Reptured'"  >
          <td class="text-dark fw-bold">Amount</td>
          <td >{{ LR.amount }}</td>
        </tr>
        <tr v-if="LR.membranes==='Reptured'"  >
          <td v-if="LR.membranes==='Reptured'"  class="text-dark fw-bold">Meconium</td>
          <td>{{ LR.meconium }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Special Instructions</td>
          <td>{{ LR.special_instructions }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasLabourRecords && !errors" >
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasLabourRecords">
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
    LabourRecords() {
      return this.$store.getters["doctor/LabourRecords"];
    },
    hasLabourRecords() {
      return !this.isLoading && this.$store.getters["doctor/hasLabourRecords"];
    },
  },
  created() {
    this.fetchLabourRecords();
  },
  methods: {
    async fetchLabourRecords() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchLabourRecords",id);
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