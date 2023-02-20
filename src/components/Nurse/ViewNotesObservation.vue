<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView"  v-else-if="hasNurseObservation">
    <table
      class="table table-borderless"
      v-for="NO in NurseObservation"
      :key="NO.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Nurse Observation Notes</th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Date and time</td>
          <td>{{ NO.date }}</td>
        </tr>
         <tr>
          <td class="text-dark fw-bold">Nurse ID</td>
          <td>{{ NO.user_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Temperature</td>
          <td>{{ NO.Temp }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Pulse rate</td>
          <td>{{ NO.plus_rate }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Resp rate</td>
          <td>{{ NO.resp_rate }}</td>
        </tr>
       <tr>
          <td class="text-dark fw-bold">B.P</td>
          <td>{{ NO.b_p }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Urine Output</td>
          <td><b>N: </b>{{ NO.urine_output_n }} , <b>D: </b>{{ NO.urine_output_d }} </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">O2</td>
          <td>{{ NO.o2_oxygen }}</td>
        </tr>
        
         <tr>
          <td class="text-dark fw-bold">Odema</td>
          <td><b>General</b> {{ NO.odema_general }}   <br><b>LL</b> {{ NO.odema_ll }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Urine Acetone</td>
          <td>{{ NO.urine_acetone }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Urine Suger</td>
          <td>{{ NO.urine_sugar }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Urine Protein</td>
          <td>{{ NO.urine_protein }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Skin color</td>
          <td>{{ NO.skin_color }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold"> Level of Conaciouancess Muscle Tone & Reflex</td>
          <td>{{ NO.level_of_conaciouances_muscle_tone_and_reflex }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Remarks</td>
          <td>{{ NO.remarks }}</td>
        </tr>
       
       
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="! hasNurseObservation && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasNurseObservation">
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
    NurseObservation() {
      return this.$store.getters["Nurse/NurseObservation"];
    },
    hasNurseObservation() {
      return (
        !this.isLoading && this.$store.getters["Nurse/hasNurseObservation"]
      );
    },
  },
  created() {
    this.fetchNurseObservation();
  },
  methods: {
    async fetchNurseObservation() {
      const id=this.$route.params.patientId;
      this.isLoading = true;
      try {
        await this.$store.dispatch("Nurse/fetchNurseObservation",id);
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
  background-color: #378277;
}

thead tr th {
  padding: 10px 0px;
}
</style>