<template>
<nav-bar></nav-bar>
<div class="container">
  <div class="row mt-5 ms-3 ">
    <h4 class="mt-5">Patients</h4>
  </div>

  <div class="mt-3">
       <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <table v-else class="table">
        <thead class="text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Patient name</th>
            <th scope="col">National ID</th>
            <th scope="col">Phone number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="patient in DeathStates" :key="patient.id">
            <th scope="row">{{patient.row}}</th>
            <td>{{patient.name}}</td>
            <td>{{patient.patient_id}}</td>
            <td>{{patient.phone_number}}</td>
            <td><base-button mode="view" @click="view(patient.patient_id)">View Record</base-button></td>
          </tr>
        </tbody>
  </table>
  </div>
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
    DeathStates() {
      return this.$store.getters["Statistician/getDatesResult"];
    },
    
  },
  created() {
    this.fetchDeathStates();
  },
  methods: {
    async fetchDeathStates() {
      this.isLoading = true;
    //   const start=this.$route.params.startDate;
    //   const end=this.$route.params.endDate;
      const dates={
          start:this.$route.params.startDate,
          end:this.$route.params.endDate,
      }
      const payload={
          value:dates,
          path:'http://localhost:8000/api/front_desk_patients_start_end_date'
      }
      try {
        await this.$store.dispatch("Statistician/fetchDataByDate",payload);
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      this.isLoading = false;
       console.log(this.$store.getters['Statistician/getDatesResult']);
    },
    view(id){
        // console.log(id);
        const actor=localStorage.getItem('actor');
        if(actor==="Statistician" ||actor==="statistician"){
         
          this.$router.replace(`/statistic/${id}/healthInformation`)
        } 
        else if(actor==="Nurse" ||actor==="nurse"){
          this.$router.replace(`/nurse/${id}/healthInformation`)
        }
        else if(actor==="Vice Doctor"){
          this.$router.replace(`/doctor/${id}/healthInformation`)
        }
        else if(actor==="General Doctor"){
          this.$router.replace(`/generalDoctor/${id}/healthInformation`)
        }
      },
  },
};
</script>

<style  scoped>
thead {
  background-color: #64415b;
  color: white;
}
</style>