<template>
  <div class="row text-center mt-5 mb-3">
    <h3 class="mt-3 ps-2">Vaginal Examination Findings</h3>
  </div>
  <base-card class="ps-5">
    <form @submit.prevent="validateData">
      
      <div class="row">
        <h4 class="mt-1 mb-4">Vaginal Examination Findings</h4>
        <h5>1. CX</h5>
        <div class="row ms-1">
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Position</label>
            <input type="text" class="form-control" 
            v-model.trim="cxPosition.value" :class="{invalid: !cxPosition.isValid}" @change="clearError('cxPosition')"/>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Effacement %
              <span class="error-hint" v-if="!effacement.isValid">must be greater than zero</span>
            </label>
            <input  type="number"
            step="0.01" class="form-control" 
             v-model="effacement.value" :class="{invalid: !effacement.isValid}"  @change="clearError('effacement')" />
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Consistency</label>
            <select class="form-select mb-3"
             v-model="consistency.value" :class="{invalid: !consistency.isValid}" @change="clearError('consistency')">
              <option value="Hard">Hard</option>
              <option value="Medium">Medium</option>
              <option value="Soft">Soft</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Dilatation
              <span class="error-hint" v-if="!dilation.isValid">must be greater than zero</span></label>
            <input  type="number"
            step="0.01" class="form-control" placeholder="cm" 
             v-model="dilation.value" :class="{invalid: !dilation.isValid}" @change="clearError('dilation')"/>
          </div>
        </div>
        <h5>2. Presenting part</h5>
        <div class="row ms-1">
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Station</label>
            <select class="form-select mb-3"
            v-model="station.value" :class="{invalid: !station.isValid}" @change="clearError('station')">
              <option value="-3">-3</option>
              <option value="-2">-2</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="+1">+1</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Position</label>
            <input type="text" class="form-control" 
             v-model.trim="presentingPartPosition.value" :class="{invalid: !presentingPartPosition.isValid}" @change="clearError('presentingPartPosition')"/>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Caput</label>
            <select class="form-select mb-3"
             v-model="caput.value" :class="{invalid: !caput.isValid}"  @change="clearError('caput')">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Moulding</label>
            <select class="form-select mb-3"
            v-model="moulding.value" :class="{invalid: ! moulding.isValid}"  @change="clearError('moulding')">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <h5>3. Membrane</h5>
        <div class="row ms-1">
          <div class="col-md-12 mb-3">
            <select class="form-select mb-2 full-width" v-model="membrane.value" :class="{invalid: ! membrane.isValid}" @change="clearError('membrane')">
              <option value="Intact">Intact</option>
              <option value="Reptured">Reptured</option>
            </select>
          </div>
          <div class="row w-100 mb-4" v-if="isReptured">
            <div class="col-md-3 mb-3">
              <label class="d-block mb-2">Time</label>
              <input type="time" class="form-control" v-model="reptureTime.value" :class="{invalid: ! reptureTime.isValid}" @change="clearError('reptureTime')"/>
            </div>
            <div class="col-md-3 mb-3">
              <label class="d-block mb-2">Amount</label>
              <select class="form-select mb-3"
              v-model="reptureAmount.value" :class="{invalid: !reptureAmount.isValid}" @change="clearError('reptureAmount')">
                <option value="Low">Low</option>
                <option value="medium">medium</option>
                <option value="Access">Access</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label class="d-block mb-2">Reptured</label>
              <select class="form-select mb-3"
               v-model="reptureHow.value" :class="{invalid: !reptureHow.isValid}" @change="clearError('reptureHow')">
                <option value="spontaneous">spontaneous</option>
                <option value="ARM">ARM</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label class="d-block mb-2">Meconium</label>
              <select class="form-select mb-3" v-model="meconium.value" :class="{invalid: !meconium.isValid}" @change="clearError('meconium')">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            
          </div>
        </div>
        <div class="col-12 mb-3">
            <label class="d-block mb-2">Special Instructions</label>
            <textarea
              class="form-control mb-4 full-width"
              id="exampleFormControlTextarea1"
              rows="2"
              v-model.trim="specialInstructions"
            ></textarea>
          </div>
        <p class="error-hint" v-if="!formIsValid">Please enter the above required information</p>
      </div>
      <div class="col-11 ms-1 mb-4">
        <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand">Save</base-button>
      </div>
    </form>
  </base-card>
  <error-modal :check="checkError" :message="error"></error-modal>
</template>
<script>
export default {
  data() {
    return {
      cxPosition:{value:'',isValid:true},
      effacement:{value:null, isValid:true},
      consistency:{value:'', isValid:true},
      dilation:{value:null,isValid:true},
      station:{value:'', isValid:true},
      presentingPartPosition:{value:'', isValid:true},
      caput:{value:'', isValid:true},
      moulding:{value:'', isValid:true},
      membrane:{value:'', isValid:true},
      reptureTime:{value:'', isValid:true},
      reptureAmount:{value:'', isValid:true},
      reptureHow:{value:'', isValid:true},
      meconium:{value:'',isValid:true},
      specialInstructions:'',
      formIsValid:true,
      error:''
    };
  },
  computed: {
    isReptured() {
      return this.membrane.value === "Reptured";
    },
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
      if(this.cxPosition.value===''){
        this.cxPosition.isValid=false;
        this.formIsValid=false;
      }
      if(!this.effacement.value || this.effacement.value<=0){
        this.effacement.isValid=false;
        this.formIsValid=false;
      }
      if(this.consistency.value===''){
        this.consistency.isValid=false;
        this.formIsValid=false;
      }
       if(!this.dilation.value || this.dilation.value<=0){
        this.dilation.isValid=false;
        this.formIsValid=false;
      }
      if(this.station.value===''){
        this.station.isValid=false;
        this.formIsValid=false;
      }
      if(this.presentingPartPosition.value===''){
        this.presentingPartPosition.isValid=false;
        this.formIsValid=false;
      }
      if(this.station.value===''){
        this.station.isValid=false;
        this.formIsValid=false;
      }
      if(this.presentingPartPosition.value===''){
        this.presentingPartPosition.isValid=false;
        this.formIsValid=false;
      }
      if(this.caput.value===''){
        this.caput.isValid=false;
        this.formIsValid=false;
      }
      if(this.moulding.value===''){
        this.moulding.isValid=false;
        this.formIsValid=false;
      }
      if(this.membrane.value===''){
        this.membrane.isValid=false;
        this.formIsValid=false;
      }
      if(this.membrane.value==='Reptured' && this.reptureTime.value===''){
        this.reptureTime.isValid=false;
        this.formIsValid=false;
      }
       if(this.membrane.value==='Reptured' && this.reptureAmount.value===''){
        this.reptureAmount.isValid=false;
        this.formIsValid=false;
      }
      if(this.membrane.value==='Reptured' && this.reptureHow.value===''){
        this.reptureHow.isValid=false;
        this.formIsValid=false;
      }
      if(this.membrane.value==='Reptured' && this.meconium.value===''){
        this.meconium.isValid=false;
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
         const record={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          cx_position: this.cxPosition.value,
          cx_effacement: this.effacement.value,
          cx_consistency:this.consistency.value,
          cx_dilatation: this.dilation.value,
          presenting_part_station: this.station.value,
          presenting_part_position: this.presentingPartPosition.value,
          presenting_part_caput: this.caput.value,
          presenting_part_moulding: this.moulding.value,
          membranes:this.membrane.value,
          if_ruptur_time:this.reptureTime.value,
          amount:this.reptureAmount.value,
          how_reptured:this.reptureHow.value,
          meconium:this.meconium.value,
          special_instructions:this.specialInstructions,
       }

        console.log(record);
        try{
         await this.$store.dispatch('doctor/addData',{
          value:record,
          path:"http://localhost:8000/api/post_vice_doctor_labour_record_form",
          mutation:"pushVaginalExaminationFindings",
        });
        this.$router.replace(`/doctor/${id}/LabourRecords`);
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
.s {
  width: 79%;
}

label {
  font-weight: 600;
  font-size: 1.15rem;
}
.full-width {
  width: 93%;
}
.error-hint {
   font-weight: 600;
  color:red;
}
.invalid {
  border: 1px solid red;
}
span{
  font-size: 1rem;
}
</style>