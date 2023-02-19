<template>
  <div class="row text-center mt-5 mb-3">
    <h3 class="mt-3 ps-2">Delivery and Postnatal</h3>
  </div>
  <base-card class="ps-5">
    <form @submit.prevent="validateData">
      <div class="row mb-3">
        <div class="col-md-4 col-11">
          <label class="d-block mb-2">Mode of delivery</label>
          <input
            type="text"
            class="form-control mb-3"
            :class="{ invalid: !Modeofdelivery.isValid }"
            @change="clearError('Modeofdelivery')"
            v-model.trim="Modeofdelivery.value"
          />
        </div>
        <div class="col-md-4">
          <label class="d-block mb-2">Date</label>
          <input
            type="date"
            class="form-control"
            :class="{ invalid: !datee.isValid }"
            @change="clearError('datee')"
            v-model="datee.value"
          />
        </div>
        <div class="col-md-4">
          <label class="d-block mb-2">Time</label>
          <input
            type="time"
            class="form-control"
            :class="{ invalid: !Time.isValid }"
            @change="clearError('Time')"
            v-model="Time.value"
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="form-check form-check-inline">
          <label class="form-check-label me-5" for="inlineCheckbox1"
            >Placenta</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="CCT"
            v-model="Placenta.value"
            @change="clearError('Placenta')"
          />
          <label class="form-check-label me-5" for="inlineCheckbox2">CCt</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="MR"
            v-model="Placenta.value"
            @change="clearError('Placenta')"
          />
          <label class="form-check-label me-5" for="inlineCheckbox3">MR</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox4"
            value="Complete"
            v-model="Placenta.value"
            @change="clearError('Placenta')"
          />
          <label class="form-check-label me-5" for="inlineCheckbox4"
            >Complete</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox5"
            value="Incomplete"
            v-model="Placenta.value"
            @change="clearError('Placenta')"
          />
          <label class="form-check-label me-5" for="inlineCheckbox5"
            >Incomplete</label
          >
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6 mb-3 pe-5">
          <label class="d-block mb-2">Episiotomy</label>
          <select
            class="form-select mb-3"
            :class="{ invalid: !Episiotomy.isValid }"
            @change="clearError('Episiotomy')"
            v-model="Episiotomy.value"
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <div class="col-md-6 mb-3 pe-5">
          <label class="d-block mb-2">Decircumcision</label>
          <select
            class="form-select mb-3"
            :class="{ invalid: !Decircumcision.isValid }"
            @change="clearError('Decircumcision')"
            v-model="Decircumcision.value"
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6 mb-3 pe-5">
          <label class="d-block mb-2">Lactation</label>
          <select
            class="form-select mb-3"
            :class="{ invalid: !Lactation.isValid }"
            @change="clearError('Lactation')"
            v-model="Lactation.value"
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <div class="col-md-6 mb-3 pe-5">
          <label class="d-block mb-2">Anti D</label>
          <select
            class="form-select mb-3"
            :class="{ invalid: !AntiD.isValid }"
            @change="clearError('AntiD')"
            v-model="AntiD.value"
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12 mb-3">
          <label class="d-block mb-2">Blood loss</label>
          <select
            class="form-select mb-3"
            :class="{ invalid: !Bloodloss.isValid }"
            @change="clearError('Bloodloss')"
            v-model="Bloodloss.value"
          >
            <option value="Less than 500">Less than 500</option>
            <option value="Between 500-1000">Between 500-1000</option>
            <option value="More than 1000">More than 1000</option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 mb-3">
          <label class="d-block mb-2">Comments</label>
          <textarea
            class="form-control mb-4 full-width"
            id="exampleFormControlTextarea1"
            rows="2"
            v-model.trim="comments"
          ></textarea>
        </div>
      </div>

      <div class="mb-3">
        <div class="form-check form-check-inline">
          <label class="form-check-label me-5" for="inlineCheckbox1"
            >Baby</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="Male"
            v-model="Baby.value"
            @change="clearError('Baby')"
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
            v-model="Baby.value"
            @change="clearError('Baby')"
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
            v-model="Baby.value"
            @change="clearError('Baby')"
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
            v-model="Baby.value"
            @change="clearError('Baby')"
          />
          <label class="form-check-label me-5" for="inlineCheckbox5"
            >Twins</label
          >
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">Weight in kg</label>
          <input
            type="number"
            class="form-control"
            :class="{ invalid: !Weightinkg.isValid }"
            @change="clearError('Weightinkg')"
            v-model="Weightinkg.value"
          />
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">Apgar score</label>
          <input
            type="number"
            class="form-control"
            :class="{ invalid: !Apgarscore.isValid }"
            @change="clearError('Apgarscore')"
            v-model="Apgarscore.value"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6 mb-3 pe-5">
          <label class="d-block mb-2">Refer to scub</label>
          <select
            class="form-select mb-3"
            :class="{ invalid: !Refertoscub.isValid }"
            @change="clearError('Refertoscub')"
            v-model="Refertoscub.value"
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">Date of discharge</label>
          <input
            type="date"
            class="form-control"
            :class="{ invalid: !Dateofdischarge.isValid }"
            @change="clearError('Dateofdischarge')"
            v-model="Dateofdischarge.value"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 mb-3">
          <label class="d-block mb-2">Postnatal follow up</label>
          <textarea
            class="form-control mb-4 full-width"
            id="exampleFormControlTextarea1"
            rows="2"
            :class="{ invalid: !Postnatalfollowup.isValid }"
            @change="clearError('Postnatalfollowup')"
            v-model="Postnatalfollowup.value"
          ></textarea>
          <p class="error-hint" v-if="!formIsValid">
            Please enter the above required information
          </p>
        </div>
      </div>

      <div class="col-12 ms-1 mb-4 me-5 pe-5">
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
      error:null,
      comments:'',
      Modeofdelivery: { value: "", isValid: true },
      datee: { value: null, isValid: true },
      Time: { value: null, isValid: true },
      Decircumcision: { value: "", isValid: true },
      Episiotomy: { value: "", isValid: true },
      Lactation: { value: "", isValid: true },
      AntiD: { value: "", isValid: true },
      Bloodloss: { value: "", isValid: true },
      Baby: { value: [], isValid: true },
      Weightinkg: { value: "", isValid: true },
      Apgarscore: { value: "", isValid: true },
      Refertoscub: { value: "", isValid: true },
      Dateofdischarge: { value: null, isValid: true },
      Postnatalfollowup: { value: "", isValid: true },
      Placenta: { value: [], isValid: true },
      formIsValid: true,
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
     

      if (!this.Modeofdelivery.value) {
        this.Modeofdelivery.isValid = false;
        this.formIsValid = false;
      }
      if (!this.datee.value) {
        this.datee.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Time.value) {
        this.Time.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Episiotomy.value) {
        this.Episiotomy.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Decircumcision.value) {
        this.Decircumcision.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Lactation.value) {
        this.Lactation.isValid = false;
        this.formIsValid = false;
      }
      if (!this.AntiD.value) {
        this.AntiD.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Bloodloss.value) {
        this.Modeofdelivery.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Weightinkg.value) {
        this.Weightinkg.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Apgarscore.value) {
        this.Apgarscore.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Refertoscub.value) {
        this.Refertoscub.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Dateofdischarge.value) {
        this.Dateofdischarge.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Postnatalfollowup.value) {
        this.Postnatalfollowup.isValid = false;
        this.formIsValid = false;
      }

      if (this.Baby.value.length < 1) {
        this.Baby.isValid = false;
        this.formIsValid = false;
      }
      if (this.Placenta.value.length < 1) {
        this.Placenta.isValid = false;
        this.formIsValid = false;
      }

      this.submitForm();
    },
    async submitForm() {
      if (!this.formIsValid) {
        return;
      } else {
        const id=this.$route.params.patientId;
         const deliveryAndPost={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          mode_of_delivery: this.Modeofdelivery.value,
          placenta: this.Placenta.value.join(),
          episiotomy:this.Episiotomy.value,
          decircumcision: this.Decircumcision.value,
          location:this.Lactation.value,
          anti_d: this.AntiD.value,
          blood_loss: this.Bloodloss.value,
          comments: this.comments,
          baby_gender:this.Baby.value.join(),
          date_of_discharge: this.Dateofdischarge.value,
          weight: this.Weightinkg.value,
          apgar_score:this.Apgarscore.value,
          refer_to_scbu:this.Refertoscub.value,
          postnatal_follow_up: this.Postnatalfollowup.value
          
       }

        console.log(deliveryAndPost);
        try{
        await this.$store.dispatch('doctor/addData',{
          value:deliveryAndPost,
          path:"http://localhost:8000/api/post_vice_doctor_delivery_and_postnatal",
          mutation:"setDeliveryAndPostnatal",
        });
        this.$router.replace(`/doctor/${id}/deliveryAndPostnatal`);
        }catch(error){
          this.error=error.message;
        }
      }
    },
  },
    async beforeCreate(){
    const id=this.$route.params.patientId;
     try {
        await this.$store.dispatch("doctor/fetchDeliveryAndPostnatal",id);
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      const exist = this.$store.getters['doctor/hasDeliveryAndPostnatal'];
      if(exist){
        this.$router.replace(`/doctor/${id}/deliveryAndPostnatal`);
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

.form-check {
  padding-left: 0;
}

.error-hint {
  font-weight: 600;
  color: red;
}
.invalid {
  border: 1px solid red;
}
span {
  font-size: 1rem;
}
</style>
