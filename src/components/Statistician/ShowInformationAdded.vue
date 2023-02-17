<template >
  <div class="row text-center mt-5 ms-3" >
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
   <div ref="printView" v-else-if="hasHealthInformation">
    <table 
      class="table table-borderless"
      v-for="HI in HealthInformation"
      :key="HI.id"
      
    >
      <thead class="table text-light text-start">
        <tr>
          <th class="col-5"></th>
          <th class="col-5">Health Information & Research</th>
        </tr>
      </thead>
      <tbody class="text-start">
        <tr>
          <td class="text-dark fw-bold">Booking date</td>
          <td>{{ HI.date }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Name</td>
          <td>{{ HI.name }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">National ID | Passport No.</td>
          <td>{{ HI.patient_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Age</td>
          <td>{{ HI.age }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Husband's name</td>
          <td>{{ HI.husband_name }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Nationality</td>
          <td>{{ HI.nationality }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Unit</td>
          <td>{{ HI.unit }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Phone number</td>
          <td>{{ HI.phone_number }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Allergies</td>
          <td>{{ HI.allergies }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Booking status</td>
          <td>{{ HI.booking_status }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Residence</td>
          <td>{{ HI.residence }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Occupation</td>
          <td>{{ HI.occupation }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Statistician ID</td>
          <td>{{ HI.user_id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">File No</td>
          <td>{{ HI.id }}</td>
        </tr>
        <tr>
          <td class="text-dark fw-bold">Blood gruop & RH</td>
          <td>{{ HI.blood_group_and_rh }}</td>
        </tr>

        <tr>
          <td class="text-dark fw-bold">Data recording date & time</td>
          <td>{{ HI.date }}</td>
        </tr>
      </tbody>
    </table>
    </div> 
    <div class="alert alert-dark h5 mt-4" role="alert" v-else-if="!hasHealthInformation && !errors">
        No data to to show!
    </div>
    <div class="alert alert-danger text-center h5 mt-4" role="alert" v-else >
        {{errors}}
    </div>
  </div>
  <print-button v-if="hasHealthInformation">
    Print report
 </print-button>
  
</template>
<script>
// import * as Printjs from "print-js";
export default {
  data() {
    return {
      isLoading: false,
      errors: null,
      refresh:'',
    };
  },
 
  computed: {
    HealthInformation() {
      return this.$store.getters["Statistician/HealthInformation"];
    },
    hasHealthInformation() {
      return (
        !this.isLoading &&
        this.$store.getters["Statistician/hasHealthInformation"]
      );
    },
    
  },
  mounted() {
    this.fetchHealthInformation();
    this.refresh=this.$store.getters['Statistician/refresh'];
   

  },
   watch: {
    // whenever question changes, this function will run
    refresh(newQuestion) {
      if (newQuestion===true) {
        console.log("Hello");
        this.$store.commit("Statistician/setRefresh",false) ; 
                this.$router.go();

      }
    }
  },
  
  
  methods: {

    async fetchHealthInformation() {
      const id=this.$route.params.patientId;
      this.isLoading = true;
      try {

        await this.$store.dispatch("Statistician/fetchHealthInformation",id);
        
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      this.isLoading = false;
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