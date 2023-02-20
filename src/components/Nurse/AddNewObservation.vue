<template>
  <div class="row text-center mt-5">
    <h3 class="header2 mt-3">Add New Observation</h3>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        <div class="row mb-4">
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Temperature</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !Temperature.isValid }"
              v-model.trim="Temperature.value"
              @change="clearError('Temperature')"
            />
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Pulse rate</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !pulseRate.isValid }"
              v-model.trim="pulseRate.value"
              @change="clearError('pulseRate')"
            />
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Resp rate</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !respRate.isValid }"
              v-model.trim="respRate.value"
              @change="clearError('respRate')"
            />
          </div>
          <div class="col-md-4 col-12 mt-3">
            <label for="" class="d-block mb-2">Skin color</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !Skincolor.isValid }"
              v-model.trim="Skincolor.value"
              @change="clearError('Skincolor')"
            />
          </div>
          <div class="col-md-4 col-12 mt-3">
            <label for="" class="d-block mb-2">O2</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !O2.isValid }"
              v-model.trim="O2.value"
              @change="clearError('O2')"
            />
          </div>
          <div class="col-md-4 col-12 mt-3">
            <label for="" class="d-block mb-2">B.P</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !BP.isValid }"
              v-model.trim="BP.value"
              @change="clearError('BP')"
            />
          </div>
        </div>
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Urine</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Acetone</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !Acetone.isValid }"
              v-model.trim="Acetone.value"
              @change="clearError('Acetone')"
            />
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Suger</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !Suger.isValid }"
              v-model.trim="Suger.value"
              @change="clearError('Suger')"
            />
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Protein</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !Protein.isValid }"
              v-model.trim="Protein.value"
              @change="clearError('Protein')"
            />
          </div>
        </div>
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Urine Output</h5>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">N</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !N.isValid }"
              v-model.trim="N.value"
              @change="clearError('N')"
            />
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">D</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !D.isValid }"
              v-model.trim="D.value"
              @change="clearError('D')"
            />
          </div>
        </div>
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Odeme</h5>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">General</label>
            <select
              class="form-select mb-3"
              :class="{ invalid: !Generl.isValid }"
              v-model.trim="Generl.value"
              @change="clearError('Generl')"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <p v-if="!Generl.isValid">Please select the generl</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">LL</label>
            <select
              class="form-select mb-3"
              :class="{ invalid: !LL.isValid }"
              v-model.trim="LL.value"
              @change="clearError('LL')"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <p v-if="!LL.isValid">Please select LL</p>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2"
            >Level of Conaciouancess Muscle Tone & reflex</label
          >
          <input
            type="text"
            class="mb-4 mx-2 form-control full-width"
            :class="{ invalid: !LevelofConaciouancess.isValid }"
            v-model.trim="LevelofConaciouancess.value"
            @change="clearError('LevelofConaciouancess')"
          />
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2">Remarks</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            :class="{ invalid: !Remarks.isValid }"
            v-model.trim="Remarks.value"
            @change="clearError('Remarks')"
          ></textarea>
        </div>

        <div class="row mb-4">
          <p v-if="!formIsValid">Please enter the required information above</p>
          <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand">Save</base-button>
        </div>
      </form>
    </base-card>
    <error-modal :check="checkError" :message="error"></error-modal>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      Temperature: { value: "", isValid: true },
      pulseRate: { value: "", isValid: true },
      respRate: { value: "", isValid: true },
      Skincolor: { value: "", isValid: true },
      O2: { value: "", isValid: true },
      BP: { value: "", isValid: true },
      Acetone: { value: "", isValid: true },
      Suger: { value: "", isValid: true },
      Protein: { value: "", isValid: true },
      N: { value: "", isValid: true },
      D: { value: "", isValid: true },
      Generl: { value: "", isValid: true },
      LL: { value: "", isValid: true },
      LevelofConaciouancess: { value: "", isValid: true },
      Remarks: { value: "", isValid: true },
      formIsValid:true,
      error:''//in case something wrong happened while submitting the form
    };
  },
   computed:{
    checkError(){
      return this.error;
    }
  },
  methods: {
    clearError(input) {
      this[input].isValid = true;
    },
    validateData() {
      this.formIsValid = true;
      this.error='';

      if (this.Temperature.value === "") {
        this.Temperature.isValid = false;
        this.formIsValid = false;
      }
      if (this.pulseRate.value === "") {
        this.pulseRate.isValid = false;
        this.formIsValid = false;
      }
      if (this.respRate.value === "") {
        this.respRate.isValid = false;
        this.formIsValid = false;
      }
      if (this.Skincolor.value === "") {
        this.Skincolor.isValid = false;
        this.formIsValid = false;
      }
      if (this.O2.value === "") {
        this.O2.isValid = false;
        this.formIsValid = false;
      }
      if (this.BP.value === "") {
        this.BP.isValid = false;
        this.formIsValid = false;
      }
      if (this.Acetone.value === "") {
        this.Acetone.isValid = false;
        this.formIsValid = false;
      }
      if (this.Suger.value === "") {
        this.Suger.isValid = false;
        this.formIsValid = false;
      }
      if (this.Protein.value === "") {
        this.Protein.isValid = false;
        this.formIsValid = false;
      }
      if (this.N.value === "") {
        this.N.isValid = false;
        this.formIsValid = false;
      }
      if (this.D.value === "") {
        this.D.isValid = false;
        this.formIsValid = false;
      }
      if (this.Generl.value === "") {
        this.Generl.isValid = false;
        this.formIsValid = false;
      }
      if (this.LL.value === "") {
        this.LL.isValid = false;
        this.formIsValid = false;
      }
      if (this.LevelofConaciouancess.value === "") {
        this.LevelofConaciouancess.isValid = false;
        this.formIsValid = false;
      }
      if (this.Remarks.value === "") {
        this.Remarks.isValid = false;
        this.formIsValid = false;
      }

      this.submitForm();
    },
    async submitForm() {
      const id=this.$route.params.patientId;
      if (!this.formIsValid) {
        return;
      } else {
         const observation={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          remarks: this.Remarks.value,
          Temp:this.Temperature.value,
          plus_rate: this.pulseRate.value,
          resp_rate:this.respRate.value,
          b_p: this.BP.value,
          urine_output_n: this.N.value,
          urine_output_d: this.D.value,
          level_of_conaciouances_muscle_tone_and_reflex: this.LevelofConaciouancess.value,
          o2_oxygen:this.O2.value,
          odema_general: this.Generl.value,
          odema_ll: this.LL.value,
          urine_acetone:this.Acetone.value,
          urine_sugar: this.Suger.value,
          urine_protein:this.Protein.value ,
          skin_color: this.Skincolor.value,
         
       }

        console.log(observation);
        try{
        await this.$store.dispatch('Nurse/addObservation',observation);
        this.$router.replace(`/nurse/${id}/viewobservations`);
        }catch(error){
          this.error=error.message;
        }
      }
    },
  },
};
</script>
      
<style scoped>
p {
  color: red;
}
.invalid {
  border: 1px solid red;
}
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
.header2,
.forms {
  margin-left: -4rem;
}

@media only screen and (max-width: 900px) {
  /* For desktop: */
  .header2,
  .forms {
    margin-left: -2.7rem;
  }
}
</style>