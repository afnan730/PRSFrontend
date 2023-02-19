
<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasLabourWardAdmission">
    <table 
      class="table table-borderless"
      v-for="LWA in LabourWardAdmission"
      :key="LWA.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Labour Ward Admission</th>
          <th class="col-5"></th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Date and Time</td>
          <td class="font-weight-normal">{{ LWA.date }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Doctor ID</td>
          <td class="font-weight-normal">{{ LWA.user_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Gravida</td>
          <td>{{ LWA.gravida }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Number of pregnancies</td>
          <td>{{ LWA.par_1 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Number of abortions</td>
          <td>{{ LWA.par_2 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">LMP</td>
          <td>{{ LWA.lmp }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">EDD</td>
          <td>{{ LWA.edd[0] }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">GA</td>
          <td>{{ LWA.ga }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">C/O</td>
          <td>{{ LWA.c_o }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Relevant past history</td>
          <td>
            {{ LWA.relevant_past_history }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">CVS & Chest examination</td>
          <td>
            {{ LWA.chest_and_cv_examination }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">General condition</td>
          <td>{{ LWA.general_condition? LWA.general_condition:LWA.condition }}</td>
        </tr>
        <tr v-if="LWA.general_condition && LWA.condition">
          <td class="text-dark fw-bold">Patient condition</td>
          <td>{{ LWA.condition }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Pulse</td>
          <td>{{ LWA.pulse }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">BP</td>
          <td>{{ LWA.bp }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Temprature</td>
          <td>{{ LWA.temp }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Fundal Hieght</td>
          <td>{{ LWA.fundal_height }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Lie</td>
          <td>{{ LWA.lie }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Presentation</td>
          <td>{{ LWA.presentation }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">FHR</td>
          <td>{{ LWA.fhr }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">FM</td>
          <td>{{ LWA.fm }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Engagement (Rule of 5)</td>
          <td>{{ LWA.engagement }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Amount of liquor</td>
          <td>{{ LWA.amount_of_liquor }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">
            Time of contractions start (i.e. True labour pain)
          </td>
          <td>{{ LWA.time_of_contractions_start }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Vaginal Examination Findings</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">1. CX</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Position</td>
          <td>{{ LWA.cx_position }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Effacement%</td>
          <td>{{ LWA.cx_effacement }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Consistency</td>
          <td>{{ LWA.cx_consistency }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Dilatation</td>
          <td>{{ LWA.cx_dilatation }} cm</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">2. Presenting part</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Station</td>
          <td>{{ LWA.presenting_part_station }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Caput</td>
          <td>{{ LWA.presenting_part_caput }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Moulding</td>
          <td>{{ LWA.presenting_part_moulding }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">3. Membrane</td>
          <td>{{ LWA.membranes }}  ({{  LWA.how_reptured?  LWA.how_reptured: "" }})</td>
        </tr>
         <tr v-if="LWA.membranes==='Reptured'">
          <td  class="text-dark fw-bold">Time</td>
          <td>{{ LWA.if_ruptur_time }}</td>
        </tr>

        <tr v-if="LWA.membranes==='Reptured'">
          <td class="text-dark fw-bold">Amount</td>
          <td>{{ LWA.amount }}</td>
        </tr>
        <tr v-if="LWA.membranes==='Reptured'">
          <td class="text-dark fw-bold">Meconium</td>
          <td>{{ LWA.meconium }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Investigations</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">HB %</td>
          <td>{{ LWA.investigations_hb }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Blood group</td>
          <td>{{ LWA.investigations_blood_group }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Urine</td>
          <td>{{ LWA.investigations_urine }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">CTG</td>
          <td>{{ LWA.ctg }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">USS</td>
          <td>{{ LWA.uss }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Others</td>
          <td>{{ LWA.others }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasLabourWardAdmission && !errors" >
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
    <print-button v-if="hasLabourWardAdmission">
    Print report
 </print-button>
  
  </div>
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
    LabourWardAdmission() {
      return this.$store.getters["doctor/LabourWardAdmission"];
    },
    hasLabourWardAdmission() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasLabourWardAdmission"]
      );
    },
  },
  created() {
    this.fetchLabourWardAdmission();
  },
  methods: {
    async fetchLabourWardAdmission() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchLabourWardAdmission",id);
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