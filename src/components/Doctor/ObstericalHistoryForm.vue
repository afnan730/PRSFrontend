
<template>
  <div class="row text-center mt-5 mb-3">
    <h3 class="mt-3 ps-2">Obstetrical  History Form</h3>
  </div>
  <base-card class="ps-5">
    <form @submit.prevent="validateData">
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">Gr
             <span class="error-hint" v-if="!gravida.isValid">must be greater than zero</span>
          </label>
          <input type="number" class="form-control" 
          :class="{invalid:!gravida.isValid}"
            @change="clearError('gravida')"
            v-model="gravida.value"/>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-5">
              <label class="d-block mb-2">Par</label>
              <input
                type="number"
                class="form-control mt-2"
                placeholder="number of pregnancies"
                :class="{invalid:!pregnacyNo.isValid}"
                @change="clearError('pregnacyNo')"
                v-model="pregnacyNo.value"

              />
            </div>
            <div class="col-1 plus">+</div>
            <div class="col-5">
              <label>&nbsp;</label>
              <input
                type="number"
                class="form-control mt-2"
                placeholder="number of abortions"
                 :class="{invalid:!abortionNo.isValid}"
                @change="clearError('abortionNo')"
                v-model="abortionNo.value"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12">
          <label class="d-block mb-2">Comments
            <span class="error-hint" v-if="!comments.isValid">Please write information about par field</span>
          </label>
          <textarea class="form-control full-width" rows="2"
           v-model.trim="comments.value"
            :class="{invalid:!comments.isValid}"  @change="clearError('comments')"></textarea>
        </div>
        
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">LMP</label>
          <input type="date" class="form-control"
          :class="{invalid:!lmp.isValid}"
          @change="clearError('lmp')"
          v-model="lmp.value"  />
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">Scan EDD</label>
          <input type="date" class="form-control"
          :class="{invalid:!scanEDD.isValid}"
          @change="clearError('scanEDD')"
          v-model="scanEDD.value" />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Past medical history</label>
          <input type="text" class="form-control full-width mb-3" 
          :class="{invalid:!pastMedical.isValid}"
          @change="clearError('pastMedical')"
          v-model.trim="pastMedical.value"/>
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Past surgical history</label>
          <input type="text" class="form-control full-width mb-3" :class="{invalid:!pastSurgical.isValid}"
          @change="clearError('pastSurgical')"
          v-model.trim="pastSurgical.value"/>
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2"> Drug history</label>
          <input type="text" class="form-control full-width mb-3" 
          :class="{invalid:!drugHistory.isValid}"
          @change="clearError('drugHistory')"
          v-model.trim="drugHistory.value"/>
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Social history</label>
          <input type="text" class="form-control full-width mb-3" 
          :class="{invalid:!socialHistory.isValid}"
          @change="clearError('socialHistory')"
          v-model.trim="socialHistory.value"/>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6 mb-3">
          <label class="d-block mb-2" >Family history</label>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="Hypertension"
               v-model="familyHistory.value"
               @change="clearError('familyHistory')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox1"
              >Hypertension</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="Diabetes"
              v-model="familyHistory.value"
              @change="clearError('familyHistory')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox2"
              >Diabetes</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="Multiple pregnancy"
               v-model="familyHistory.value"
               @change="clearError('familyHistory')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox3"
              >Multiple pregnancy</label
            >
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label class="d-block mb-2">Others</label>
          <input type="text" class="form-control"
          :class="{invalid:!otherFamilyHistory.isValid && !familyHistory.isValid}"
          @change="clearError('otherFamilyHistory')"
          v-model.trim="otherFamilyHistory.value" />
        </div>
        <p class="error-hint" v-if="!otherFamilyHistory.isValid && !familyHistory.isValid">Please enter information about family history</p>
      </div>
      <div class="col-12 mb-3">
        <label class="d-block mb-2">CVS & Chest examination</label>
        <textarea
          class="form-control mb-4 full-width"
          id="exampleFormControlTextarea1"
          rows="2"
          v-model.trim="chestExamination.value"
            :class="{invalid:!chestExamination.isValid}"  @change="clearError('chestExamination')"
        ></textarea>
      </div>
      <div class="col-12 mb-3">
        <label class="d-block mb-2">Comments & special plans</label>
        <textarea
          class="form-control mb-4 full-width"
          id="exampleFormControlTextarea1"
          rows="2"
          v-model.trim="specialPlans"
        ></textarea>
         <p class="error-hint" v-if="!formIsValid">Please enter the above required information</p>
      </div>
      <div class="col-12 ms-1 mb-4 pe-5">
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
     gravida:{value:null,isValid:true},
      pregnacyNo:{value:null,isValid:true},
      abortionNo:{value:null,isValid:true},
      comments:{value:'',isValid:true},
      lmp:{value:null,isValid:true},
      scanEDD:{value:null,isValid:true},
      chestExamination:{value:'',isValid:true},
      pastMedical:{value:'',isValid:true},
      pastSurgical:{value:'',isValid:true},
      drugHistory:{value:'',isValid:true},
      socialHistory:{value:'',isValid:true},
      familyHistory:{value:[],isValid:true},
      otherFamilyHistory:{value:'',isValid:true},
      specialPlans:'',
      formIsValid:true,
      error:''
    };
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
       if(!this.gravida.value || this.gravida.value<=0){
        this.gravida.isValid=false;
        this.formIsValid=false;
      }
       if(!this.pregnacyNo.value || this.pregnacyNo.value<=0){
        this.pregnacyNo.isValid=false;
        this.formIsValid=false;
      }
       if(this.abortionNo.value<0){
        this.abortionNo.isValid=false;
        this.formIsValid=false;
      }
       if(!this.lmp.value){
        this.lmp.isValid=false;
        this.formIsValid=false;
      }
       if(!this.scanEDD.value){
        this.scanEDD.isValid=false;
        this.formIsValid=false;
      }
       if(this.comments.value===''){
        this.comments.isValid=false;
        this.formIsValid=false;
      }
      if(this.chestExamination.value===''){
        this.chestExamination.isValid=false;
        this.formIsValid=false;
      }
      if(this.pastMedical.value===''){
        this.pastMedical.isValid=false;
        this.formIsValid=false;
      }
      if(this.pastSurgical.value===''){
        this.pastSurgical.isValid=false;
        this.formIsValid=false;
      }
      if(this.drugHistory.value===''){
        this.drugHistory.isValid=false;
        this.formIsValid=false;
      }
      if(this.socialHistory.value===''){
        this.socialHistory.isValid=false;
        this.formIsValid=false;
      }
      if(this.otherFamilyHistory.value===''){
        this.otherFamilyHistory.isValid=false;
        if(this.familyHistory.value.length<1){
          this.familyHistory.isValid=false;
          this.formIsValid=false;
        }
      }
      this.submitForm();
      
    },
     async submitForm(){
       console.log(this.lmp.value);
       const l=this.lmp.value;
       var d=new Date(l);
       d.setMonth(d.getMonth()+9);
       console.log(d);
       if(!this.formIsValid){
        return;
      }
      else{
        const id=this.$route.params.patientId;
        const lmp=this.lmp.value;
        const edd=new Date(lmp);
        edd.setMonth(edd.getMonth()+9);

         const record={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          gr:this.gravida.value,
          para_1:this.pregnacyNo.value,
          para_2:this.abortionNo.value,
          comments_on_par:this.comments.value,
          lmp:this.lmp.value,
          edd:edd,
          drug_history: this.drugHistory.value,
          scan_edd: this.scanEDD.value,
          past_medical_history: this.pastMedical.value,
          past_surgical_history: this.pastSurgical.value,
          social_history: this.socialHistory.value,
          family_history:this.familyHistory.value.join(),
          others: this.otherFamilyHistory.value,
          chest_cvs_examination: this.chestExamination.value,
          comments_and_special_plans: this.specialPlans,
       }

        console.log(record);
        try{
         await this.$store.dispatch('doctor/addData',{
          value:record,
          path:"http://localhost:8000/api/post_vice_doctor_obstetrical_history",
          mutation:"setObstericalHistory",
        });
        this.$router.replace(`/doctor/${id}/obstericalHistory`);
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
.plus {
  font-weight: 600;
  font-size: 1.15rem;
  margin-top: 6%;
}
.error-hint {
   font-weight: 600;
  color:red;
}
.error{
   color:red;
}
.invalid {
  border: 1px solid red;
}
span{
  font-size: 1rem;
}
</style>