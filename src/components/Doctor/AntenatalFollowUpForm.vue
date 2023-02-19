<template>
  <div class="row mt-3 ms-3 text-center">
    <h4 class="header2 mt-5">Add New Antenatal Follow-up</h4>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        <div class="row mb-4">
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">B.P</label>
            <input type="text" class="form-control" 
            :class="{invalid: !bP.isValid}"
             @change="clearError('bP')"
            v-model.trim="bP.value" />
             <p v-if="!bP.isValid">Blood pressure shouldn't be empty</p>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">G.A</label>
            <input type="number" class="form-control" 
            :class="{invalid: !gA.isValid}"
             @change="clearError('gA')"
            v-model="gA.value"/>
             <p v-if="!gA.isValid">Gestational age should be greater than zero</p>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">F.L</label>
            <input type="number" class="form-control"
            :class="{invalid: !fL.isValid}"
             @change="clearError('fL')"
            v-model="fL.value" />
            <p v-if="!fL.isValid">F.L should be greater than zero</p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Pres.</label>
            <input type="text" class="form-control"
            :class="{invalid: !pres.isValid}"
             @change="clearError('pres')"
            v-model.trim="pres.value" />
            <p v-if="!pres.isValid">Pres shouldn't be empty</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Eng.</label>
            <input type="number" class="form-control"
            :class="{invalid: !eng.isValid}"
             @change="clearError('eng')"
            v-model="eng.value" />
            <p v-if="!eng.isValid">Eng. shouldn't be empty</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">F.H</label>
            <input type="number" class="form-control"
            :class="{invalid: !fH.isValid}"
             @change="clearError('fH')"
            v-model="fH.value" />
            <p v-if="!fH.isValid">F.H shouldn't be empty</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Urine</label>
            <select class="form-select mb-3" 
            :class="{invalid: !urine.isValid}"
             @change="clearError('urine')"
            v-model="urine.value">
              <option value="clear">clear</option>
              <option value="UTI">UTI</option>
            </select>
            <p v-if="!urine.isValid">Select value from dropdown menu</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">HB%</label>
            <input type="number" class="form-control" 
            :class="{invalid: !hB.isValid}"
             @change="clearError('hB')"
            v-model="hB.value"/>
            <p v-if="!hB.isValid">HB should be greater than zero</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Next visit</label>
            <select class="form-select mb-3" 
            :class="{invalid: !nextVisit.isValid}"
             @change="clearError('nextVisit')"
            v-model="nextVisit.value">
              <option value="1 week">1 week</option>
              <option value="2 weeks">2 weeks</option>
              <option value="3 weeks">3 weeks</option>
              <option value="4 weeks">4 weeks</option>
            </select>
             <p v-if="!nextVisit.isValid">Select value from dropdown menu</p>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2"> Comment</label>
          <input type="text" class="mb-4 mx-2 form-control full-width"
          v-model="comment.value" />
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
      bP:{value:'', isValid:true},
      gA:{value:null, isValid:true},
      fL:{value:null, isValid:true},
      pres:{value:'', isValid:true},
      eng:{value:null, isValid:true},//may be +ve or -ve
      fH:{value:null, isValid:true},//may be +ve or -ve
      urine:{value:'', isValid:true},
      hB:{value:null, isValid:true},
      nextVisit:{value:'', isValid:true},
      comment:{value:'', isValid:true},
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
      console.log(this.urine.value);
      console.log(this.nextVisit.value);
      this.formIsValid=true;
      if(this.bP.value===''){
        this.bP.isValid=false;
        this.formIsValid=false;
      }
      if(!this.gA.value || this.gA.value<=0){
        this.gA.isValid=false;
        this.formIsValid=false;
      }
       if(!this.fL.value || this.fL.value<=0){
        this.fL.isValid=false;
        this.formIsValid=false;
      }
      if(this.pres.value===''){
        this.pres.isValid=false;
        this.formIsValid=false;
      }
      if(!this.eng.value){
        this.eng.isValid=false;
        this.formIsValid=false;
      }
      if(!this.fH.value){
        this.fH.isValid=false;
        this.formIsValid=false;
      }
      if(this.urine.value===''){
        this.urine.isValid=false;
        this.formIsValid=false;
      }
      if(!this.hB.value || this.hB.value<=0){
        this.hB.isValid=false;
        this.formIsValid=false;
      }
      if(this.nextVisit.value===''){
        this.nextVisit.isValid=false;
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
         const antenatalFollowup={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          b_p: this.bP.value,
          g_a: this.gA.value,
          f_l: this.fL.value,
          pres: this.pres.value,
          eng: this.eng.value,
          f_h: this.fH.value,
          h_b: this.hB.value,
          urine:this.urine.value,
          comment: this.comment.value,
          next_visit: this.nextVisit.value
          
       }

        console.log(antenatalFollowup);
        try{
        await this.$store.dispatch('doctor/addData',{
          value:antenatalFollowup,
          path:"http://localhost:8000/api/post_vice_doctor_antenatal_follow_up",
          mutation:"pushAntenatalFollowUp",
        });
        this.$router.replace(`/doctor/${id}/AntenatalFollowUp`);
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
 p  {
  color:red;
}
.invalid 
 {
  border: 1px solid red;
}
</style>
  
  