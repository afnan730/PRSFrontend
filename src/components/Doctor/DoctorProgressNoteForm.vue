<template>
  <div class="ms-5">
    <div class="row mt-3 ms-3 text-center">
      <h4 class="header2 mt-5">Doctor Progress Note</h4>
    </div>
    <div class="row w-100 forms mt-2 p-3 ms-4 me-5">
      <base-card class="mt-2">
        <h3 class="header2 text-center mb-5">Add new note</h3>

        <form action="#" @submit.prevent="validateData">
          <div class="row ps-5" >
            <label for="" class="d-block mb-2 text-secondary"
              >Patient Condition</label
            >
            <textarea
              class="form-control mb-4 full-width ms-2"
              id="exampleFormControlTextarea1"
              rows="3"
              :class="{invalid : !patientCondition.isValid}"
              @blur="clearError('patientCondition')"
              v-model.trim="patientCondition.value"

            ></textarea>
          </div>
          <div class="row ps-5" >
            <label for="" class="d-block mb-2 text-secondary"
              >Investigations</label
            >
            <textarea
              class="form-control mb-4 full-width ms-2"
              id="exampleFormControlTextarea1"
              rows="3"
              :class="{invalid : !investigation.isValid}"
              @blur="clearError('investigation')"
              v-model.trim="investigation.value"
            ></textarea>
          </div>
          <div class="row ps-5" >
            <label for="" class="d-block mb-2 text-secondary"
              >Instructions</label
            >
            <textarea
              class="form-control mb-4 full-width ms-2"
              id="exampleFormControlTextarea1"
              rows="3"
              @blur="clearError('instructions')"
              :class="{invalid : !instructions.isValid}"
              v-model.trim="instructions.value"
            ></textarea>
          </div>
          <p v-if="!formIsValid" class=" ps-5 error-hint">Please enter the above required information</p>
          <div class="row ps-5 pe-5">
            <base-button data-bs-toggle="modal" data-bs-target="#exampleModal"> Save</base-button>
          </div>
        </form>
      </base-card>
    </div>
    <error-modal :check="checkError" :message="error"></error-modal>
  </div>
</template>
    
    <script>
export default {
  data(){
    return{
      patientCondition:{value:'', isValid:true},
      investigation:{ value:'', isValid:true},
      instructions:{value:'', isValid:true},
      formIsValid:true,
      error:null
    }
  },
  computed:{
    checkError(){
      return this.error;
    }
  },
  methods: {
    clearError(input){
                this[input].isValid=true;
            },
    validateData() {
      this.formIsValid=true;
      if(this.patientCondition.value===''){
        this. patientCondition.isValid=false;
        this.formIsValid=false;
      }
        if(this.instructions.value===''){
        this. instructions.isValid=false;
        this.formIsValid=false;
      }
        if(this.investigation.value===''){
        this. investigation.isValid=false;
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
         const note={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          patient_condition:this.patientCondition.value,
          investigation:this.investigation.value,
          instruction:this.instructions.value
       }

        console.log(note);
        try{
         await this.$store.dispatch('doctor/addData',{
          value:note,
          path:"http://localhost:8000/api/post_vice_doctor_dr_progress_notes",
          mutation:"pushDoctorProgressNotes",
        });
        this.$router.replace(`/doctor/${id}/doctorProgressNotes`);
        }catch(error){
          this.error=error.message;
        }
      }
    }
  },
};
</script>
      
      <style scoped>
.form-control,
.form-select {
  width: 85%;
  border-radius: 10px;
  background: white;
}
.form-select {
  width: 91%;
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