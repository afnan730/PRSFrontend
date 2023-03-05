<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView"  v-else-if="hasStatisticSupplement">
    <table
      class="table table-borderless"
      v-for="SS in StatisticSupplement"
      :key="SS.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Statistic Supplement</th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Baby name</td>
          <td>{{ SS.baby_name }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baby status</td>
          <td>{{ SS.baby_status }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Birth date</td>
          <td>{{ SS.birth_date }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Birth place</td>
          <td>{{ SS.birth_place }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baby gender</td>
          <td>{{ SS.baby_gender }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Baby type</td>
          <td>{{ SS.baby_type }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Father's name</td>
          <td>{{ SS.father_name }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Father's nationality</td>
          <td>{{ SS.fathers_nationality }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Father's education</td>
          <td>{{ SS.fathers_education }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Father's age</td>
          <td>{{ SS.father_age }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Father's Religion</td>
          <td>{{ SS.religion }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Father's profession</td>
          <td>{{SS.father_industry}}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Father's residence</td>
          <td>{{ SS.fathers_residence }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Mather's education</td>
          <td>{{ SS.mothers_education }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Marriage duration</td>
          <td>{{SS.marriage_duration}}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Mather's Profession</td>
          <td>{{SS.mother_industry}}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Marriage establishment</td>
          <td>{{ SS.establish_marriage }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Number of miscarriage</td>
          <td>{{ SS.number_of_miscarriages }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Operation type</td>
          <td>{{ SS.operation_type }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Normal position shape</td>
          <td>{{ SS.normal_position_shape }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasStatisticSupplement && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasStatisticSupplement">
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
    StatisticSupplement() {
      return this.$store.getters["Statistician/StatisticSupplement"];
    },
    hasStatisticSupplement() {
      return (
        !this.isLoading &&
        this.$store.getters["Statistician/hasStatisticSupplement"]
      );
    },
  },
  created() {
    this.fetchStatisticSupplement();
  },
  methods: {
    async fetchStatisticSupplement() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("Statistician/fetchStatisticSupplement",id);
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