<template>
  <div class="row text-center mt-5 mb-3">
    <h3 class="mt-3 ps-2">Operation Notes</h3>
  </div>
  <base-card class="ps-5">
    <form @submit.prevent="validateData"> 
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <label class="d-block mb-2">Operation
            <span class="error-hint" v-if="!operation.isValid">Please select at least one</span>
          </label>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="Caesarean Ssection"
              @change="clearError('operation')"
              v-model="operation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox1"
              >Caesarean Ssection</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="Ventouse Delivery"
              @change="clearError('operation')"
              v-model="operation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox2"
              >Ventouse Delivery</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="Repair of 3rd Degree Tear"
              @change="clearError('operation')"
              v-model="operation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox3"
              >Repair of 3rd Degree Tear</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="Emergency"
              @change="clearError('operation')"
              v-model="operation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox4"
              >Emergency</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="Forceps Delivery"
              @change="clearError('operation')"
              v-model="operation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox5"
              >Forceps Delivery</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox6"
              value="M.R.O Placenta"
              @change="clearError('operation')"
              v-model="operation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox6"
              >M.R.O Placenta</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox7"
              value="Other"
              @change="clearError('operation')"
              v-model="operation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox7"
              >Other</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox8"
              value="Elective"
              @change="clearError('operation')"
              v-model="operation.value"
            />
            <label class="form-check-label me-5" for="inlineCheckbox8"
              >Elective</label
            >
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12">
          <label class="d-block mb-2">Indication</label>
          <input type="text" class="form-control full-width"
          :class="{invalid: !indication.isValid}"
           @change="clearError('indication')"
            v-model.trim="indication.value" />
        </div>
        
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">Surgeon</label>
          <input type="text" class="form-control"
          :class="{invalid: !surgeon.isValid}"
           @change="clearError('surgeon')"
              v-model.trim="surgeon.value" />
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">Assistant</label>
          <input type="text" class="form-control"
          :class="{invalid: !assistant.isValid}"
           @change="clearError('assistant')"
              v-model.trim="assistant.value" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">Anaesthetist</label>
          <input type="text" class="form-control"
          :class="{invalid: !anaesthetist.isValid}"
           @change="clearError('anaesthetist')"
              v-model.trim="anaesthetist.value" />
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">Anaesthesia</label>
          <input type="text" class="form-control" 
          :class="{invalid: !anaesthesia.isValid}"
           @change="clearError('anaesthesia')"
            v-model.trim="anaesthesia.value"/>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <label class="d-block mb-2">Incision</label>
          <select class="form-select mb-3"
          :class="{invalid: !incision.isValid}"
           @change="clearError('incision')"
            v-model="incision.value">
            <option value="yes">yes</option>
            <option value="no">no</option>
           
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 mb-3">
          <label class="d-block mb-2">Process</label>
          <textarea
            class="form-control mb-4 full-width"
            id="exampleFormControlTextarea1"
            rows="2"
            :class="{invalid: !process.isValid}"
           @change="clearError('process')"
            v-model.trim="process.value"
          ></textarea>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6 mb-3 pe-5">
          <label class="d-block mb-2">Blood loss</label>
          <select class="form-select mb-3"
          :class="{invalid: !bloodLoss.isValid}"
           @change="clearError('bloodLoss')"
            v-model="bloodLoss.value">
            <option value="+-500mls">+-500mls</option>
            <option value="+-750mls">+-750mls</option>
            <option value=">100mls">>100mls</option>
          </select>
        </div>
        <div class="col-md-6 mb-3 pe-5">
          <label class="d-block mb-2">Ovaries and tubes checked</label>
          <select class="form-select mb-3" 
          :class="{invalid: !ovariesChecked.isValid}"
           @change="clearError('ovariesChecked')"
            v-model="ovariesChecked.value">
            <option value="Yes">yes</option>
            <option value="No">no</option>
            
          </select>
        </div>
      </div>
      <div class="ms-1 mb-3">
        <div class="form-check form-check-inline">
          <label class="form-check-label me-5" for="inlineCheckbox1"
            >Baby
            <span class="error" v-if="!baby.isValid">Please choose 2 values</span></label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="Male"
            :class="{invalid: !baby.isValid}"
           @change="clearError('baby')"
            v-model="baby.value"
          />
          <label class="form-check-label me-5" for="inlineCheckbox2"
            >Male</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="Female"
             :class="{invalid: !baby.isValid}"
           @change="clearError('baby')"
            v-model="baby.value"
          />
          <label class="form-check-label me-5" for="inlineCheckbox3"
            >Female</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox4"
            value="Single"
             :class="{invalid: !baby.isValid}"
           @change="clearError('baby')"
            v-model="baby.value"
          />
          <label class="form-check-label me-5" for="inlineCheckbox4"
            >Single</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox5"
            value="Twins"
            :class="{invalid: !baby.isValid}"
           @change="clearError('baby')"
            v-model="baby.value"
          />
          <label class="form-check-label me-5" for="inlineCheckbox5"
            >Twins</label
          >
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">Weight in kg</label>
          <input type="number" step="0.01" class="form-control" 
          :class="{invalid: !weight.isValid}"
           @change="clearError('weight')"
            v-model="weight.value"/>
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">Apgar score</label>
          <input type="number" step="0.01" class="form-control" 
          
            v-model="score.value"/>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <label class="d-block mb-2">Refer to scub</label>
          <select class="form-select mb-3"
           :class="{invalid: !refer.isValid}"
           @change="clearError('refer')"
            v-model="refer.value">
            <option value="yes">yes</option>
            <option value="no">no</option>
        
          </select>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Treatment</label>
          <input type="text" class="form-control  full-width mb-3" v-model="treatment.value"/>
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Antibiotics</label>
          <input type="text" class="form-control full-width mb-3" v-model="antibiotics.value" />
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2"> Analgesia</label>
          <input type="text" class="form-control full-width mb-3" v-model="analgesia.value"/>
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Anticoagulant</label>
          <input type="text" class="form-control full-width mb-3" v-model="anticoagulant.value" />
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">I.V Fluids</label>
          <input type="text" class="form-control full-width mb-3" v-model="ivFluids.value"/>
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Blood transfusion</label>
          <input type="text" class="form-control full-width mb-3" v-model="bloodTrans.value" />
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Recommendation for next pregnancy</label>
          <input type="text" class="form-control full-width mb-3" v-model="recommendation.value" />
        </div>
        <p class="error-hint" v-if="!formIsValid">Please enter the above required information</p>
      </div>
      <div class="col-12 ms-1 mb-4 me-5 pe-5">
        <base-button  data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand">Save</base-button>
      </div>
    </form>
  </base-card>
  <error-modal :check="checkError" :message="error"></error-modal>
</template>
<script>
export default {
  data() {
    return {
    operation:{value:[],isValid:true},
     indication:{value:'',isValid:true},
     surgeon:{value:'',isValid:true},
     assistant:{value:'',isValid:true},
     anaesthetist:{value:'',isValid:true},
     anaesthesia:{value:'',isValid:true},
     incision:{value:'',isValid:true},
     process:{value:'',isValid:true},
     bloodLoss:{value:'',isValid:true},
     ovariesChecked:{value:'',isValid:true},
     baby:{value:[],isValid:true},
     weight:{value:null,isValid:true},
     score:{value:'',isValid:true},
     refer:{value:'',isValid:true},
     treatment:{value:'',isValid:true},
     antibiotics:{value:'',isValid:true},
     analgesia:{value:'',isValid:true},
     anticoagulant:{value:'',isValid:true},
     ivFluids:{value:'',isValid:true},
     bloodTrans:{value:'',isValid:true},
     recommendation:{value:'',isValid:true},
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
       if(this.operation.value.length<1){
          this.operation.isValid=false;
          this.formIsValid=false;
       }
      
       if(this.indication.value===''){
        this.indication.isValid=false;
        this.formIsValid=false;
      }
      if(this.surgeon.value===''){
        this.surgeon.isValid=false;
        this.formIsValid=false;
      }
      if(this.assistant.value===''){
        this.assistant.isValid=false;
        this.formIsValid=false;
      }
      if(this.anaesthetist.value===''){
        this.anaesthetist.isValid=false;
        this.formIsValid=false;
      }
      if(this.anaesthesia.value===''){
        this.anaesthesia.isValid=false;
        this.formIsValid=false;
      }
      if(this.incision.value===''){
        this.incision.isValid=false;
        this.formIsValid=false;
      }
      if(this.process.value===''){
        this.process.isValid=false;
        this.formIsValid=false;
      }
       if(this.bloodLoss.value===''){
        this.bloodLoss.isValid=false;
        this.formIsValid=false;
      }
      if(this.ovariesChecked.value===''){
        this.ovariesChecked.isValid=false;
        this.formIsValid=false;
      }
      
       if(this.baby.value.length<2){
          this.baby.isValid=false;
          this.formIsValid=false;
       }
       if(!this.weight.value ||this.weight.value<=0){
          this.weight.isValid=false;
          this.formIsValid=false;
       }
       if(this.refer.value===''){
        this.refer.isValid=false;
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
         const notes={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          operation: this.operation.value.join(),
          indication_1: this.indication.value,
          indication_2: null,
          surgeon: this.surgeon.value,
          anaesthetist:this.anaesthetist.value,
          assistant:this.assistant.value,
          anaesthesia:this.anaesthesia.value,
          incision: this.incision.value,
          process: this.process.value,
          blood_loss: this.bloodLoss.value,
          ovaries_and_tubes_checked:this.ovariesChecked.value,
          baby: this.baby.value.join(),
          
          weight:this.weight.value,
          apgar_score:this.score.value,
          refer_to_scub:this.refer.value,
          treatment:this.treatment.value,
          antibiotics: this.antibiotics.value,
          analgesia:this.analgesia.value,
          anticoagulant: this.anticoagulant.value,
          iv_fluids: this.ivFluids.value,
          blood_transfusion:this.bloodTrans.value,
          recommendations_for_next_pregnancy: this.recommendation.value
       }

        console.log(notes);
        try{
         await this.$store.dispatch('doctor/addData',{
          value:notes,
          path:"http://localhost:8000/api/post_vice_doctor_operation_note",
          mutation:"setOperationNotes",
        });
        this.$router.replace(`/doctor/${id}/operationNotes`);
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
  width: 93%;
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