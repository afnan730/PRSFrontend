<template>
  <div class="ms-5">
    <div class="row mt-3 ms-3 text-center">
      <h4 class="header2 mt-5">Labour Ward Instruction</h4>
    </div>
    <div class="row w-100 forms mt-2 p-3 ms-4 me-5">
      <base-card class="mt-2">
        <h3 class="header2 text-center mb-5">Add new</h3>

        <form action="#" @submit.prevent="validateData">
          <div class="row ps-5">
            <label for="" class="d-block mb-2 text-secondary"
              >Instruction</label
            >
            <textarea
              class="form-control mb-4 full-width ms-2"
              id="exampleFormControlTextarea1"
              rows="3"
              :class="{invalid : !labourInstructions.isValid}"
              @blur="clearError('labourInstructions')"
              v-model.trim=" labourInstructions.value"
            ></textarea>
             <p class="error-hint" v-if="!formIsValid">Please write the required information</p>
          </div>

          <div class="row ps-5 pe-5">
            <base-button data-bs-toggle="modal" data-bs-target="#exampleModal">Save</base-button>
          </div>
        </form>
      </base-card>
      <error-modal :check="checkError" :message="error"></error-modal>
     
    </div>
  </div>
</template>
    
    <script>
export default {
  data(){
    return{
      labourInstructions:{ value:'', isValid:true},
      formIsValid:true,
      error:''
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
      if(this.labourInstructions.value===''){
        this.labourInstructions.isValid=false;
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
         const instruction={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          instruction:this.labourInstructions.value,
       }

        console.log(instruction);
        try{
        await this.$store.dispatch('doctor/addData',{
          value:instruction,
          path:"http://localhost:8000/api/post_vice_doctor_labour_ward_instructions",
          mutation:"pushLabourWardInstruction",
        });
        this.$router.replace(`/doctor/${id}/labourWardInstructions`);
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
  height: 8rem;
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
  