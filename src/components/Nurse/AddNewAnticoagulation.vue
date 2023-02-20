<template>
  <div class="row text-center mt-5">
    <h3 class="header2 mt-3">Add New Anticoagulation</h3>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="px-2" action="#" @submit.prevent="validateData">
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">Day</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="number" class="form-control"
            :class="{invalid: !day.isValid}"
            @blur="clearError('day')"
            v-model="day.value" />
            <p class="error-hint" v-if="!day.isValid">Day value should be greater than zero</p>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">Tick for INR</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="number" class="form-control" 
            :class="{invalid: !inrTick.isValid}"
            @blur="clearError('inrTick')"
            v-model="inrTick.value"/>
            <p class="error-hint" v-if="!inrTick.isValid">Tick for INR should not be empty</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">INR</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="number" class="form-control" 
            :class="{invalid: !INR.isValid}"
            @blur="clearError('INR')"
            v-model="INR.value"/>
            <p class="error-hint" v-if="!INR.isValid">INR should be greater than zero</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">APTT</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="number" class="form-control" 
            :class="{invalid: !APTT.isValid}"
            @blur="clearError('APTT')"
            v-model="APTT.value"/>
            <p class="error-hint" v-if="!APTT.isValid">APTT should be greater than zero</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">APT</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="number" class="form-control" 
            :class="{invalid: !APT.isValid}"
            @blur="clearError('APT')"
            v-model="APT.value"/>
            <p class="error-hint" v-if="!APT.isValid">APT should be greater than zero</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">Dosage of Warfarin</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="number" class="form-control" 
            :class="{invalid: !warfinDosage.isValid}"
            @blur="clearError('warfinDosage')"
            v-model="warfinDosage.value"
            />
            <p class="error-hint" v-if="!warfinDosage.isValid">Warfarin dosage should be greater than zero</p>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-5"></div>
          <div class="col-md-7 col-12">
            <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand">Save</base-button>
          </div>
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
      day:{ value:null, isValid:true},
      inrTick: { value:null, isValid:true},
      INR:{ value:null, isValid:true},
      APT:{ value:null, isValid:true},
      APTT:{ value:null, isValid:true},
      warfinDosage:{ value:null, isValid:true},
      formIsValid:true,
      error:'',
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
       if(!this.day.value || this.day.value<=0){
        this.day.isValid=false;
        this.formIsValid=false;
      }
       if(!this.inrTick.value){
        this.inrTick.isValid=false;
        this.formIsValid=false;
      }
       if(!this.INR.value || this.INR.value<=0){
        this.INR.isValid=false;
        this.formIsValid=false;
      }
       if(!this.APT.value || this.APT.value<=0){
        this.APT.isValid=false;
        this.formIsValid=false;
      }
       if(!this.APTT.value || this.APTT.value<=0){
        this.APTT.isValid=false;
        this.formIsValid=false;
      }
       if(!this.warfinDosage.value || this.warfinDosage.value<=0){
        this.warfinDosage.isValid=false;
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
         const anticoagulationNote={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          tick_for_inr: this.inrTick.value,
          inr: this.INR.value,
          aptt:this.APTT.value,
          apt:this.APT.value,
          dosage_of_warfarin:this.warfinDosage.value
       }

        console.log(anticoagulationNote);
         try{
         await this.$store.dispatch('doctor/addData',{
          value:anticoagulationNote,
          path:"http://localhost:8000/api/post_vice_doctor_anticoagulation_chart",
          mutation:"pushAnticogulationNote",
        });
        this.$router.replace(`/doctor/${id}/viewanticoagulation`);
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
  width: 100%;
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