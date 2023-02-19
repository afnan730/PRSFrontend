

<template>
  <div class="ms-5">
    <div class="row mt-3 ms-3 text-center">
      <h4 class="header2 mt-5">Treatment Order</h4>
    </div>
    <div class="row w-100 forms mt-2 p-3 ms-4 me-5">
      <base-card class="mt-2">
        <form action="#" @submit.prevent="validateData">
          <div class="row ps-5 pe-5">
            <div class="col-12 mb-3">
              <label class="d-block mb-2 full-width">Date start</label>
              <input type="date" class="form-control full-width" v-model="startDate.value"
              :class="{invalid: !startDate.isValid}" @blur="clearError('startDate')" />
            </div>
            <div class="col-12 mb-3">
              <label class="d-block mb-2">Medication</label>
              <textarea
                class="form-control mb-4 full-width"
                id="exampleFormControlTextarea1"
                rows="2"
                v-model.trim="medication.value"
                :class="{invalid: !medication.isValid}" @blur="clearError('medication')"
              ></textarea>
            </div>
            <div class="col-12 mb-3">
              <label class="d-block mb-2 full-width">Date end</label>
              <input type="date" class="form-control full-width" v-model="endDate.value"
              :class="{invalid: !endDate.isValid}" @blur="clearError('endDate')"/>
            </div>
             <p class="error-hint" v-if="!formIsValid">
               All the above fields are required. Please enter the required information
             </p>
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
      startDate:{value:null, isValid:true},
      endDate:{value:null, isValid:true},
      medication:{value:'', isValid:true},
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
      if(this.medication.value===''){
        this.medication.isValid=false;
        this.formIsValid=false;
      }
      if(!this.startDate.value){
        this.startDate.isValid=false;
        this.formIsValid=false;
      }
      if(!this.endDate.value){
        this.endDate.isValid=false;
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
         const treatmentOrder={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          start_date: this.startDate.value,
          medication:this.medication.value,
          end_date: this.endDate.value
       }

        console.log(treatmentOrder);
         try{
         await this.$store.dispatch('doctor/addData',{
          value:treatmentOrder,
          path:"http://localhost:8000/api/post_vice_doctor_treatment_order_sheet",
          mutation:"pushTreatmentOrder",
        });
        this.$router.replace(`/doctor/${id}/treatmentOrderSheet`);
        }catch(error){
          this.error=error.message;
        } 
      
      }
    },
   
  },
};
</script>
        
        <style scoped>
.form-control {
  width: 85%;

  border-radius: 10px;
  background: white;
}

label {
  font-weight: 600;
  font-size: 1.15rem;
}
.full-width {
  width: 93%;
}
.error-hint {
  color:red;
}
.invalid 
 {
  border: 1px solid red;
  
}
</style>