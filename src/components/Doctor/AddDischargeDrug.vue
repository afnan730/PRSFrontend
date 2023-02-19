<template>
  <div class="row text-center mt-5">
    <h3 class="header2 mt-3">Add Discharge Drug</h3>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">Drugs</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="text" class="form-control" 
            v-model.trim="drugs.value" :class="{invalid: !drugs.isValid}" @blur="clearError('drugs')"/>
            <p class="error-hint" v-if="!drugs.isValid">Drugs should not be empty</p>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">Dose</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="text" class="form-control" 
            v-model.trim="dose.value" :class="{invalid: !dose.isValid}" @blur="clearError('dose')"/>
             <p class="error-hint" v-if="!dose.isValid">Dose should not be empty</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">Route</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="text" class="form-control" 
             v-model.trim="route.value" :class="{invalid: !route.isValid}" @blur="clearError('route')"/>
              <p class="error-hint" v-if="!route.isValid">Route should not be empty</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">Frequency</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="text" class="form-control" 
             v-model.trim="frequency.value" :class="{invalid: !frequency.isValid}" @blur="clearError('frequency')"/>
              <p class="error-hint" v-if="!frequency.isValid">Frequency should not be empty</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">No. of days</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="number" class="form-control" 
             v-model="noOfDays.value" :class="{invalid: !noOfDays.isValid}" @blur="clearError('noOfDays')"/>
             <p class="error-hint" v-if="!noOfDays.isValid">Number of days should be greater than zero</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 col-12">
            <label for="" class="d-block mb-2">Remarks</label>
          </div>
          <div class="col-md-7 col-12">
            <input type="text" class="form-control" v-model.trim="remarks.value"/>
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
      drugs:{value:'', isValid:true},
      dose:{value:null, isValid:true},
      route:{value:'',isValid:true},
      frequency:{value:'', isValid:true},
      noOfDays:{value:null, isValid:true},
      remarks:{value:'',isValid:true},
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
      if(this.drugs.value===''){
        this.drugs.isValid=false;
        this.formIsValid=false;
      }
      if(this.route.value===''){
        this.route.isValid=false;
        this.formIsValid=false;
      }
      if(this.frequency.value===''){
        this.frequency.isValid=false;
        this.formIsValid=false;
      }
      if(!this.dose.value ){
        this.dose.isValid=false;
        this.formIsValid=false;
      }
       if(!this.noOfDays.value || this.noOfDays.value<=0){
        this.noOfDays.isValid=false;
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
         const drug={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          drug_name: this.drugs.value,
          dose:this.dose.value ,
          route:this.route.value,
          frequency: this.frequency.value,
          no_day:this.noOfDays.value,
          remarks:this.remarks.value,
       }

        console.log(drug);
        try{
        await this.$store.dispatch('doctor/addDischargeDrugs',drug);
        this.$router.replace(`/doctor/${id}/viewDischargeDrugs`);
        }catch(e){
          this.error=e.message;
        }
     
      }
    },
   
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
.invalid {
  border: 1px solid red;
}

</style>
  
  
  
  