<template>
  <div class="row text-center mt-5 ms-3">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <div ref="printView"  v-else-if="hasInvestgation">
    <table 
      class="table table-borderless"
      v-for="NI in Investgations"
      :key="NI.id"
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Investigation Results</th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Date &  time</td>
          <td>{{NI.date}}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Nurse ID</td>
          <td>{{NI.user_id}}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Urine Analysis</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Color</td>
          <td>{{ NI.urine_analysis_color }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cells</td>
          <td>{{ NI.urine_analysis_cells }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Sugar</td>
          <td>{{ NI.urine_analysis_sugar }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Proteins</td>
          <td>{{ NI.urine_analysis_proteins }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cream Stains</td>
          <td>{{ NI.urine_analysis_cream_stains }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">ZN Stain</td>
          <td>{{ NI.urine_analysis_zn_stain }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Clutures&Sensitivity</td>
          <td>{{ NI.urine_analysis_clutures_and_sensitivity }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Stool Analysis</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Color</td>
          <td>{{ NI.stool_analysis_color }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cells</td>
          <td>{{ NI.stool_analysis_cells }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Sugar</td>
          <td>{{ NI.stool_analysis_sugar }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Protein</td>
          <td>{{ NI.stool_analysis_proteins }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cream Stain</td>
          <td>{{ NI.stool_analysis_cream_stains }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">ZN Stain</td>
          <td>{{ NI.stool_analysis_zn_stain }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Clutures&Sensitivity</td>
          <td>{{ NI.stool_analysis_clutures_and_sensitivity }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">CSF</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Color</td>
          <td>{{ NI.csf_color }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cells</td>
          <td>{{ NI.csf_cells }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Sugar</td>
          <td>{{ NI.csf_sugar }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Protein</td>
          <td>{{ NI.csf_proteins }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cream Stain</td>
          <td>{{ NI.csf_cream_stains }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">ZN Stain</td>
          <td>{{ NI.csf_zn_stain }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Clutures&Sensitivity</td>
          <td>{{ NI.csf_clutures_and_sensitivity }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Pleural Fluid</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Color</td>
          <td>{{ NI.pleural_fluid_color }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cells</td>
          <td>{{ NI.pleural_fluid_cells }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Sugar</td>
          <td>{{ NI.pleural_fluid_sugar }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Protein</td>
          <td>{{ NI.pleural_fluid_proteins }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cream Stain</td>
          <td>{{ NI.pleural_fluid_cream_stains }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">ZN Stain</td>
          <td>{{ NI.pleural_fluid_zn_stain }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Clutures&Sensitivity</td>
          <td>{{ NI.pleural_fluid_clutures_and_sensitivity }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Stool Analysis</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Peritoneal Fluid</td>
          <td>{{ NI.peritoneal_fluid_color }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cells</td>
          <td>{{ NI.peritoneal_fluid_cells }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Sugar</td>
          <td>{{ NI.peritoneal_fluid_sugar }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Protein</td>
          <td>{{ NI.peritoneal_fluid_proteins }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cream Stain</td>
          <td>{{ NI.peritoneal_fluid_cream_stains }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">ZN Stain</td>
          <td>{{ NI.peritoneal_fluid_zn_stain }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Clutures&Sensitivity</td>
          <td>{{ NI.peritoneal_fluid_clutures_and_sensitivity }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Vaginal Swab</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Color</td>
          <td>{{ NI.vaginal_swab_color }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cells</td>
          <td>{{ NI.vaginal_swab_cells }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Sugar</td>
          <td>{{ NI.vaginal_swab_sugar }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Protein</td>
          <td>{{ NI.vaginal_swab_proteins }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cream Stain</td>
          <td>{{ NI.vaginal_swab_cream_stains }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">ZN Stain</td>
          <td>{{ NI.vaginal_swab_zn_stain }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Clutures&Sensitivity</td>
          <td>{{ NI.vaginal_swab_clutures_and_sensitivity }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Puss</td>
          <td></td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Puss Color</td>
          <td>{{ NI.puss_color }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cells</td>
          <td>{{ NI.puss_cells }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cream Stain</td>
          <td>{{ NI.puss_cream_stains }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">ZN Stain</td>
          <td>{{ NI.puss_zn_stain }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Clutures&Sensitivity</td>
          <td>{{ NI.puss_clutures_and_sensitivity }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Cultures Speciment1</td>
          <td>{{ NI.cultures_speciment_1 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cultures Speciment2</td>
          <td>{{ NI.cultures_speciment_2 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cultures Speciment3</td>
          <td>{{ NI.cultures_speciment_3 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cultures Speciment4</td>
          <td>{{ NI.cultures_speciment_4 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Cultures Speciment5</td>
          <td>{{ NI.cultures_speciment_5 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Biopsies Speciment1</td>
          <td>{{ NI.biopsies_speciment_2 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Biopsies Speciment2</td>
          <td>{{ NI.biopsies_speciment_2 }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Biopsies Speciment3</td>
          <td>{{ NI.biopsies_speciment_3 }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Bone Marrow</td>
          <td>{{ NI.bone_marrow }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Hiv</td>
          <td>{{ NI.hiv }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Hepatitis_b</td>
          <td>{{ NI.hepatitis_b }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Hepatitis_c</td>
          <td>{{ NI.hepatitis_c }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Other</td>
          <td>{{ NI.other }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasInvestgation && !errors" >
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
   <print-button v-if="hasInvestgation">
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
    Investgations() {
      return this.$store.getters["Nurse/NurseInvestgation"];
    },
    hasInvestgation() {
      return (
        !this.isLoading && this.$store.getters["Nurse/hasNurseInvestgation"]
      );
    },
  },
  created() {
    this.fetchNurseInvestgation();
  },
  methods: {
    async fetchNurseInvestgation() {
      this.isLoading = true;
      const id=this.$route.params.patientId;
      try {
        await this.$store.dispatch("Nurse/fetchNurseInvestgation",id);
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