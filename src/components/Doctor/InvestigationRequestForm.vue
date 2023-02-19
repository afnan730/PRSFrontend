
<template>
  <div class="row mt-3  text-center">
    <h4 class="header2 mt-5">Investigation Request</h4>
  </div>
  <div class=" mt-2">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        
        <div class="row mb-4">
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Department</label>
            <input type="text" class="form-control"
            v-model.trim="department.value"
            :class="{invalid:!department.isValid}"
            @blur="clearError('department')" />
            <p v-if="!department.isValid" class="error-hint">Department shouldn't be empty</p>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Word</label>
            <input type="text" class="form-control"
             v-model.trim="word.value"
             :class="{invalid:!word.isValid}"
            @blur="clearError('word')" />
            <p v-if="!word.isValid" class="error-hint">Word shouldn't be empty</p>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Bed no</label>
            <input type="number" class="form-control"
             v-model="bedNo.value" 
             :class="{invalid:!bedNo.isValid}"
            @blur="clearError('bedNo')"/>
            <p v-if="!bedNo.isValid" class="error-hint">Should be greater than zero</p>
          </div>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Clinical remarks</label>
          <textarea
            class="form-control mb-3 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="2"
            v-model.trim="clinicalRemarks"
          ></textarea>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2" :class="{error: !requestedInvestigation.isValid}">Request</label>
          
        </div>
        <div class="ms-1 mb-4">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="CXR"
              
              @change="clearError('requestedInvestigation')"
              v-model="requestedInvestigation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox1"
              >CXR</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="U/S"
              
              @change="clearError('requestedInvestigation')"
              v-model="requestedInvestigation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox2"
              >U/S</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="CT"
              
              @change="clearError('requestedInvestigation')"
              v-model="requestedInvestigation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox3"
              >CT</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="Echo"
              
              @change="clearError('requestedInvestigation')"
              v-model="requestedInvestigation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox4"
              >Echo</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="IVU"
              
             @change="clearError('requestedInvestigation')"
              v-model="requestedInvestigation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox5"
              >IVU</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox6"
              value="MRI"
              
              @change="clearError('requestedInvestigation')"
              v-model="requestedInvestigation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox6"
              >MRI</label
            >
          </div>
        </div>
        <p v-if="!requestedInvestigation.isValid" class="error-hint">At least select one investigation please</p>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Others</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="2"
            v-model.trim="others"
          ></textarea>
        </div>
        <div class="row mb-4">
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
      error:'',
      department:{value:'',isValid:true},
      word:{value:'',isValid:true},
      bedNo:{value:null, isValid:true},
      requestedInvestigation:{value:[], isValid:true},
      others:'',
      clinicalRemarks:'',
      formIsValid:true,
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
      console.log(this.requestedInvestigation.value.length);
      this.formIsValid=true;
     if(this.department.value===''){
        this.department.isValid=false;
        this.formIsValid=false;
      }
      if(this.word.value===''){
        this.word.isValid=false;
        this.formIsValid=false;
      }
      if(!this.bedNo.value || this.bedNo.value<=0){
        this.bedNo.isValid=false;
        this.formIsValid=false;
      }
      if(this.requestedInvestigation.value.length<1){
        this.requestedInvestigation.isValid=false;
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
         const request={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          word:this.word.value,
          bed_no:this.bedNo.value,
          clinical_remarks:this.clinicalRemarks,
          requests:this.requestedInvestigation.value.join(),
          other:this.others,
       }

        console.log(request);
        try{
         await this.$store.dispatch('doctor/addData',{
          value:request,
          path:"http://localhost:8000/api/post_vice_doctor_investigation_request_form",
          mutation:"pushInvestigationRequest",
        });
        this.$router.replace(`/doctor/${id}/investigationRequestSheet`);
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
  width: 78%;
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
.error-hint, .error {
  color:red;
}
.invalid 
 {
  border: 1px solid red;
  
}

</style>