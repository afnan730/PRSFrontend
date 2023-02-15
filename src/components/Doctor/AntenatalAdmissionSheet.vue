<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView"  v-else-if="hasAntenatalAdmissionSheet">
    <table 
      class="table table-borderless"
      v-for="AA in AntenatalAdmissionSheet"
      :key="AA.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Antenatal Admission Sheet</th>
          <th class="col-5"></th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Date and Time</td>
          <td class="font-weight-normal">{{ AA.date }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Doctor ID</td>
          <td class="font-weight-normal">{{ AA.user_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Complaint</td>
          <td class="font-weight-normal">
            {{ AA.complaint }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">History of presenting illness</td>
          <td>
            {{ AA.history_of_presenting_illness }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Pulse rate</td>
          <td>{{ AA.pulse }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Bp</td>
          <td>{{ AA.bp }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Temp</td>
          <td>{{ AA.temp }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">General condition</td>
          <td>
            {{ AA.general_condition? AA.general_condition: AA.general_condition_list}}
          </td>
        </tr>
        <tr>
          <td v-if="AA.general_condition && AA.general_condition_list" class="text-dark fw-bold">Patient condition</td>
          <td v-if="AA.general_condition && AA.general_condition_list" >
            {{  AA.general_condition_list}}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">CVS & Chest examination</td>
          <td>{{ AA.cvs_and_chest_examination }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">FundalHeight</td>
          <td>{{ AA.fundal_height }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Lie</td>
          <td>{{ AA.lie }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Presentation</td>
          <td>{{ AA.presentation }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">FHR</td>
          <td>{{ AA.fhr }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">FM</td>
          <td>{{ AA.fm }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Vaginal examination</td>
          <td>{{ AA.vaginal_examination? AA.vaginal_examination:"None" }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Diagnosis</td>
          <td>
            {{ AA.diagnosis }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Immediate instructions</td>
          <td>
            {{ AA.immediate_instruction }}
          </td>
        </tr>
      </tbody>
    </table>
     </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasAntenatalAdmissionSheet && !errors">
        No data to to show!
    </div>
     <base-card v-else >
        <h5 class="text-center">{{errors}}</h5>
     </base-card>
  </div>
   <print-button v-if="hasAntenatalAdmissionSheet">
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
    AntenatalAdmissionSheet() {
      return this.$store.getters["doctor/AntenatalAdmissionSheet"];
    },
    hasAntenatalAdmissionSheet() {
      return (
        !this.isLoading &&
        this.$store.getters["doctor/hasAntenatalAdmissionSheet"]
      );
    },
  },
  created() {
    this.fetchAntenatalAdmissionSheet();
  },
  methods: {
    async fetchAntenatalAdmissionSheet() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchAntenatalAdmissionSheet",id);
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
  background-color: #4a5d88;
}
td {
  font-size: 1.2rem;
}

thead tr th {
  padding: 10px 0px;
}
</style>