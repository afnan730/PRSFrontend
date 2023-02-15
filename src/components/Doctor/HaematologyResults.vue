<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasHaematologyResults">
    <table 
      class="table table-borderless"
      v-for="HR in HaematologyResults"
      :key="HR.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Haematology Results</th>
          <th class="col-5"></th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Date</td>
          <td class="font-weight-normal">{{ HR.date }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Doctor ID</td>
          <td class="font-weight-normal">{{ HR.user_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">HB</td>
          <td class="font-weight-normal">{{ HR.hb }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">WBCs</td>
          <td>{{ HR.wbcs }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Neuirophils</td>
          <td>{{ HR.neutrophils }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Lymphocytes</td>
          <td>{{ HR.lymphocytes }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Eosinophils</td>
          <td>{{ HR.eosinophils }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baseophils</td>
          <td>{{ HR.basophils }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Monocytes</td>
          <td>{{ HR.monocytes }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Platelets</td>
          <td>{{ HR.platelets }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Retlculocytes</td>
          <td>{{ HR.retlculocytes }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">ESR</td>
          <td>{{ HR.esr }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Hematocrit(PCV)</td>
          <td>{{ HR.haematocrit_pcv }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">MCV</td>
          <td>{{ HR.mcv }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">MCH</td>
          <td>{{ HR.mch }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">MCHC</td>
          <td>{{ HR.mchc }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">RBCs</td>
          <td>{{ HR.rbcs }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Peripheral blood</td>
          <td>{{ HR.peripheral_blood }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Bone marrow</td>
          <td>{{ HR.bone_marrow }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">HB electrophoresis</td>
          <td>{{ HR.hb_electrophoresis }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Coombs test</td>
          <td>{{ HR.coombs_test }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Prothrombin(PT)</td>
          <td>{{ HR.prothrombin_pt }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">INR</td>
          <td>{{ HR.inr }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Partial thromboplastin time(PT)</td>
          <td>{{ HR.partial_thromboplastin_time_pt }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Bleeding time</td>
          <td>{{ HR.bleeding_time }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Clotting time</td>
          <td>{{ HR.clotting_time }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Stickling test</td>
          <td>{{ HR.sickling_test }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Serum B12</td>
          <td>{{ HR.serum_b12 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Folic acid</td>
          <td>{{ HR.folic_acid }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Serum lron-Ferritin</td>
          <td>{{ HR.serum_iron_ferritin }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">TIBCS</td>
          <td>{{ HR. tibcs }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Serum protein electrophoresis</td>
          <td>{{ HR. serum_protein_electrophoresis }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Others</td>
          <td>{{ HR.  others }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasHaematologyResults && !errors" >
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasHaematologyResults">
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
    HaematologyResults() {
      return this.$store.getters["doctor/HaematologyResults"];
    },
    hasHaematologyResults() {
      return (
        !this.isLoading && this.$store.getters["doctor/hasHaematologyResults"]
      );
    },
  },
  created() {
    this.fetchHaematologyResults();
  },
  methods: {
    async fetchHaematologyResults() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchHaematologyResults",id);
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
}
</style>