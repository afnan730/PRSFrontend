
<template>
  <div class="row mt-3 ms-3 text-center">
    <h4 class="header2 mt-5">Clinical Discharge Summary</h4>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Final diagnosis</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model.trim="finalDiagnosis.value"
          ></textarea>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2"
            >Summary (History. Positive progress in hospital, Treatment)</label
          >
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model.trim="summary.value"
          ></textarea>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Operation (with dates)</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model.trim="operations.value"
          ></textarea>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2"
            >Treatment recommended on discharge</label
          >
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model.trim="treatment.value"
          ></textarea>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Follow up arrangment</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="followup.value"
          ></textarea>
        </div>
        <p class="error-hint" v-if="!formIsValid">All input fields shouldn't be empty. Please write the above required information</p>
        <div class="row mb-4 pe-4">
          <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand">Save</base-button>
        </div>
      </form>
    </base-card>
    <error-modal :check="checkError" :message="error"></error-modal>
  </div>
</template>
    
    <script>
export default {
  data(){
    return{
      finalDiagnosis:{ value:'', isValid:true},
      summary:{ value:'', isValid:true},
      operations:{ value:'', isValid:true},
      treatment:{ value:'', isValid:true},
      followup:{ value:'', isValid:true},
      formIsValid:true,
       error:null,
    }
  },
  computed:{
    checkError(){
      return this.error;
    }
  },
  //  async beforeCreate(){
  //   const id=this.$route.params.patientId;
  //    try {
  //       await this.$store.dispatch("doctor/fetchClinincalDischargeSummary",id);
  //     } catch (error) {
  //       this.errors = error.message || " Something went wrong!";
  //     }
  //     const exist = this.$store.getters['doctor/hasClinincalDischargeSummary'];
  //     if(exist){
  //       this.$router.replace(`/doctor/${id}/clinicalDischargeSummary`);
  //     }
  // },
  methods: {
    validateData() {
      this.formIsValid=true;
      if(this.finalDiagnosis.value==='' || this.summary.value==='' || this.operations.value==='' || this.treatment.value==='' ||this.followup.value===''){
        this.formIsValid=false;
      }
     this.submitForm();
    },
    async submitForm(){
       if(!this.formIsValid){
        return;
      }
      else{
        const id=this.$route.params.patientId;
         const dischargeSummary={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          final_dagnosis: this.finalDiagnosis.value,
          summary: this.summary.value,
          operation: this.operations.value,
          treatment_recommended_on_discharge: this.treatment.value,
          follow_up_arrangements: this.followup.value
       }

        console.log(dischargeSummary);
        try{
         await this.$store.dispatch('doctor/addData',{
          value:dischargeSummary,
          path:"http://localhost:8000/api/post_vice_doctor_clinical_discharge_summary",
          mutation:"setClinincalDischargeSummary",
        });
        this.$router.replace(`/doctor/${id}/clinicalDischargeSummary`);
        }catch(error){
          this.error=error.message;
        } 
        
      }
    }
  },
};
</script>
      
      <style scoped>
.form-control {
  width: 85%;
  border-radius: 10px;
  background: white;
}
.form-select {
  width: 85%;
}

label {
  font-weight: 600;
  font-size: 1.15rem;
}
.full-width {
  width: 91%;
}
.error-hint {
  color:red;
}
.invalid 
 {
  border: 1px solid red;
}
</style>
