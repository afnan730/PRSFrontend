<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasOperationNotes">
    <table 
      class="table table-borderless"
      v-for="ON in OperationNotes"
      :key="ON.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Operation Notes</th>
          <th class="col-5"></th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Date</td>
          <td class="font-weight-normal">{{ ON.date }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Doctor ID</td>
          <td class="font-weight-normal">{{ ON.user_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Operation</td>
          <td>{{ ON.operation }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Indication</td>
          <td>{{ ON.indication_1 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Surgeon</td>
          <td>{{ ON.surgeon }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Assistant</td>
          <td>{{ ON.assistant }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Anaesthetist</td>
          <td>{{ ON.anaesthetist }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Incision</td>
          <td>{{ ON.incision }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Process</td>
          <td>
            {{ ON.process }}
          </td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Blood loss</td>
          <td>{{ ON.blood_loss }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Ovaries and tubes checked</td>
          <td>{{ ON.ovaries_and_tubes_checked }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baby</td>
          <td>{{ ON.baby }}</td>
        </tr>
  
        <tr>
          <td class="text-dark fw-bold">Weight in kg</td>
          <td>{{ ON.weight }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Apgar score</td>
          <td>{{ ON.apgar_score }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Refer to scub</td>
          {{ ON.refer_to_scub }}
        </tr>
        <tr>
          <td class="text-dark fw-bold">Treatment</td>
          <td>{{ ON.treatment }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Antibiotics</td>
          <td>{{ ON.antibiotics }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Analgesia</td>
          <td>{{ ON.analgesia }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Anticoagulant</td>
          <td>{{ ON.anticoagulant }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">I.V Fluids</td>
          <td>{{ ON.iv_fluids }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Blood transfusion</td>
          <td>{{ ON.blood_transfusion }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Recommendation for next pregnancy</td>
          <td>{{ ON.recommendations_for_next_pregnancy }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark text-center h5 mt-4" role="alert" v-else-if="!hasOperationNotes  && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasOperationNotes">
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
    OperationNotes() {
      return this.$store.getters["doctor/OperationNotes"];
    },
    hasOperationNotes() {
      return !this.isLoading && this.$store.getters["doctor/hasOperationNotes"];
    },
  },
  created() {
    this.fetchOperationNotes();
  },
  methods: {
    async fetchOperationNotes() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("doctor/fetchOperationNotes",id);
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