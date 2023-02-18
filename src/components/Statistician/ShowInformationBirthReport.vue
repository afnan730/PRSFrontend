<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView" v-else-if="hasBirthReport"> 
    <table
      class="table table-borderless"
      v-for="BR in BirthReport"
      :key="BR.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Birth Report</th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Birth date</td>
          <td>{{ BR.birth_date }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Placenta birth hour</td>
          <td>{{ BR.placenta_birth_hour }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Birth type</td>
          <td>{{ BR.birth_type }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baby weight</td>
          <td>{{ BR.birth_weight }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Fetal brith hour</td>
          <td>{{ BR.Fetal_birth_hour }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Blood quantity</td>
          <td>{{ BR.blood_quantity }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Newborn status</td>
          <td>{{ BR.newborn_status }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Feeding Practice</td>
          <td>{{ BR.breast_feeding_practice }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Wound</td>
          <td>{{ BR.wound }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Token</td>
          <td>{{ BR.token }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Vitamin K</td>
          <td>{{ BR.vitamin_k }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baby </td>
          <td>{{ BR.baby_kind }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baby Gender</td>
          <td>{{ BR.baby_type }}</td>
        </tr>
         <tr>
          <td class="text-dark fw-bold">Statistician ID</td>
          <td>{{ BR.user_id }}</td>
        </tr>
         <tr>
          <td class="text-dark fw-bold">Data entry date</td>
          <td>{{ BR.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasBirthReport && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasBirthReport">
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
    BirthReport() {
      return this.$store.getters["Statistician/BirthReport"];
    },
    hasBirthReport() {
      return (
        !this.isLoading && this.$store.getters["Statistician/hasBirthReport"]
      );
    },
  },
  created() {
    this.fetchBirthReport();
  },
  methods: {
    async fetchBirthReport() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("Statistician/fetchBirthReport",id);
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
  background-color: #3d3d57;
}

thead tr th {
  padding: 10px 0px;
}
</style>