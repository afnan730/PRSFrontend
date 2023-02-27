
<template>
  <div class="row mt-3 ms-3 text-center">
    <h4 class="header2 mt-5">Antenatal Admission Sheet</h4>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Complaint</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="2"
            :class="{invalid:!complaint.isValid}"
            @change="clearError('complaint')"
            v-model.trim="complaint.value"
          ></textarea>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2"
            >History of presenting illness</label
          >
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="2"
            
            :class="{invalid:!historyOfIllneses.isValid}"
            @change="clearError('historyOfIllneses')"
            v-model.trim="historyOfIllneses.value"
          ></textarea>
        </div>
        <div class="row mb-4">
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Pulse</label>
            <input type="text" class="form-control"
             :class="{invalid:!pulse.isValid}"
            @change="clearError('pulse')"
            v-model.trim="pulse.value" />
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Bp</label>
            <input type="text" class="form-control"
             :class="{invalid:!bP.isValid}"
            @change="clearError('bP')"
            v-model.trim="bP.value" />
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Temp</label>
            <input type="number" class="form-control"
             :class="{invalid:!temp.isValid}"
            @change="clearError('temp')"
            v-model="temp.value" />
          </div>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">General condition
            <span v-if="!condition.isValid" class="error-hint">Please select from the choices below or write some information about patient condition </span>
          </label>
          <input type="text" class="mb-2 mx-2 form-control full-width" :class="{invalid:!generalCondition.isValid && !condition.isValid}"
            @change="clearError('generalCondition')"
            v-model="generalCondition.value" />
        </div>
        <div class="ms-1 mb-4">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="Pale"
               v-model="condition.value"
               @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox1"
              >Pale</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="Jaundicw"
               v-model="condition.value"
                @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox2"
              >Jaundicw</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="Cyanosis"
               v-model="condition.value"
                @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox3"
              >Cyanosis</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="Edema"
               v-model="condition.value"
              @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox4"
              >Edema</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="Espll"
               v-model="condition.value"
              @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox5"
              >Espll</label
            >
          </div>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">CVS & Chest examination</label>
          <input type="text" class="mb-4 mx-2 form-control full-width" v-model.trim="chestExamination.value"
            :class="{invalid:!chestExamination.isValid}"  @change="clearError('chestExamination')"/>
        </div>
        <div class="row mb-4">
          <div class="col-md-4 col-12 mt-3">
            <label for="" class="d-block mb-2">FundalHeight</label>
            <input type="number" class="form-control" 
            v-model="fundalHeight.value"
            :class="{invalid:!fundalHeight.isValid}"  @change="clearError('fundalHeight')"/>
          </div>
          <div class="col-md-4 col-12 mt-3">
            <label for="" class="d-block mb-2">Lie</label>
            <input type="text" class="form-control"
             v-model.trim="lie.value"
            :class="{invalid:!lie.isValid}"  @change="clearError('lie')" />
          </div>
          <div class="col-md-4 col-12 mt-3">
            <label for="" class="d-block mb-2">Presentation</label>
            <input type="text" class="form-control"
             v-model.trim="presentation.value"
            :class="{invalid:!presentation.isValid}"  @change="clearError('presentation')"
             />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">FHR</label>
            <input type="text" class="form-control"
             v-model.trim="FHR.value"
            :class="{invalid:!FHR.isValid}"  @change="clearError('FHR')" />
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">FM</label>
            <input type="text" class="form-control" 
             v-model.trim="FM.value"
            :class="{invalid:!FM.isValid}"  @change="clearError('FM')" />
          </div>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Vaginal examination (If needed)</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="2"
            v-model=" vaginalExamination"
          ></textarea>
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Diagnosis</label>
          <input type="text" class="mb-4 mx-2 form-control full-width" 
           v-model.trim="diagnosis.value"
            :class="{invalid:! diagnosis.isValid}"  @change="clearError('diagnosis')" />
        </div>
        <div class="row mb-4">
          <label for="" class="d-block mb-2">Immediate instructions</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model.trim="immediateInstructions.value"
            :class="{invalid:! immediateInstructions.isValid}"  @change="clearError('immediateInstructions')"
          ></textarea>
        </div>
        <p v-if="!formIsValid" class="error-hint">Please fill the required fields</p>
        <div class="row mb-4">
          <base-button width="expand"  data-bs-toggle="modal" data-bs-target="#exampleModal">Save</base-button>
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
      complaint:{value:'',isValid:true},
      historyOfIllneses:{value:'', isValid:true},
      pulse:{value:'',isValid:true},
      bP:{value:'',isValid:true},
      temp:{value:null, isValid:true},
      generalCondition:{value:'',isValid:true},
      condition:{value:[],isValid:true},
      chestExamination:{value:'',isValid:true},
      fundalHeight:{value:null,isValid:true},
      lie:{value:'',isValid:true},
      presentation:{value:'',isValid:true},
      FHR:{value:'', isValid:true},
      FM:{value:'',isValid:true},
      vaginalExamination:'',
      diagnosis:{value:'', isValid:true},
      immediateInstructions:{value:'',isValid:true},
      formIsValid:true,
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
  //       await this.$store.dispatch("doctor/fetchAntenatalAdmissionSheet",id);
  //     } catch (error) {
  //       this.errors = error.message || " Something went wrong!";
  //     }
  //     const exist = this.$store.getters['doctor/hasAntenatalAdmissionSheet'];
  //     if(exist){
  //       this.$router.replace(`/doctor/${id}/AntenatalAdmissionSheet`);
  //     }

  // },
  methods: {
    clearError(input){
                this[input].isValid=true;
            },
    validateData() {
      this.formIsValid=true;
      if(this.complaint.value===''){
        this.complaint.isValid=false;
        this.formIsValid=false;
      }
      if(this.historyOfIllneses.value===''){
        this.historyOfIllneses.isValid=false;
        this.formIsValid=false;
      }
      if(this.pulse.value===''){
        this.pulse.isValid=false;
        this.formIsValid=false;
      }
       if(this.bP.value===''){
        this.bP.isValid=false;
        this.formIsValid=false;
      }
      if(!this.temp.value || this.temp.value<=0){
        this.temp.isValid=false;
        this.formIsValid=false;
      }
      if(this.generalCondition.value===''){
        this.generalCondition.isValid=false;
        if(this.condition.value.length<1){
          this.condition.isValid=false;
          this.formIsValid=false;
        }
      }
        if(this.chestExamination.value===''){
        this.chestExamination.isValid=false;
        this.formIsValid=false;
      }

       if(!this.fundalHeight.value || this.fundalHeight.value<=0){
        this.fundalHeight.isValid=false;
        this.formIsValid=false;
      }
       if(this.lie.value===''){
        this.lie.isValid=false;
        this.formIsValid=false;
      }
       if(this.presentation.value===''){
        this.presentation.isValid=false;
        this.formIsValid=false;
      }
     if(this.FHR.value===''){
        this.FHR.isValid=false;
        this.formIsValid=false;
      }
       if(this.FM.value===''){
        this.FM.isValid=false;
        this.formIsValid=false;
      }
       if(this.diagnosis.value===''){
        this.diagnosis.isValid=false;
        this.formIsValid=false;
      }
       if(this.immediateInstructions.value===''){
        this.immediateInstructions.isValid=false;
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
         const antenatalAdmissionSheet={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          complaint: this.complaint.value,
          history_of_presenting_illness: this.historyOfIllneses.value,
          pulse:this.pulse.value,
          bp: this.bP.value,
          temp: this.temp.value ,
          general_condition: this.generalCondition.value,
          general_condition_list:this.condition.value.join(),
          cvs_and_chest_examination: this.chestExamination.value,
          fundal_height: this.fundalHeight.value,
          lie: this.lie.value,
          presentation: this.presentation.value,
          fhr:this.FHR.value,
          fm: this.FM.value,
          vaginal_examination: this.vaginalExamination,
          diagnosis:this.diagnosis.value,
          immediate_instruction: this.immediateInstructions.value
          
       }

        console.log(antenatalAdmissionSheet);
         try{
         await this.$store.dispatch('doctor/addData',{
          value:antenatalAdmissionSheet,
          path:"http://localhost:8000/api/post_vice_doctor_antenatal_admission_sheet",
          mutation:"setAntenatalAdmissionSheet",
        });
        this.$router.replace(`/doctor/${id}/AntenatalAdmissionSheet`);
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