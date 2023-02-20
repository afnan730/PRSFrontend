<template>
  <div class="row text-center mt-5">
    <h3 class="header2 mt-3">Add New I.V.FLUIDS Note</h3>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        <div class="row mb-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Volume & Concentration</label>
          </div>
          <div class="col-md-6 col-12">
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !VolumeConcentration.isValid }"
              v-model.trim="VolumeConcentration.value"
              @change="clearError('VolumeConcentration')"
            />

            <p v-if="!VolumeConcentration.isValid">should not be empty</p>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Rate ml/br</label>
          </div>
          <div class="col-md-6 col-12">
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !Rate.isValid }"
              v-model.trim="Rate.value"
              @change="clearError('Rate')"
            />

            <p v-if="!Rate.isValid">should not be empty</p>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Additional Amount</label>
          </div>
          <div class="col-md-6 col-12">
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !AdditionalAmount.isValid }"
              v-model.trim="AdditionalAmount.value"
              @change="clearError('AdditionalAmount')"
            />

            <p v-if="!AdditionalAmount.isValid">should not be empty</p>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Discounted</label>
          </div>
          <div class="col-md-3 col-12">
            <input
              type="text"
              class="form-control"
              placeholder="On"
              :class="{ invalid: !DiscountedOn.isValid }"
              v-model.trim="DiscountedOn.value"
              @change="clearError('DiscountedOn')"
            />

            <p v-if="!DiscountedOn.isValid">should not be empty</p>
          </div>
          <div class="col-md-3 col-12">
            <input
              type="text"
              class="form-control"
              placeholder="By"
              :class="{ invalid: !DiscountedBy.isValid }"
              v-model.trim="DiscountedBy.value"
              @change="clearError('DiscountedBy')"
            />

            <p v-if="!DiscountedBy.isValid">should not be empty</p>
          </div>
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
  data() {
    return {
      VolumeConcentration: { value: "", isValid: true },
      Rate: { value: "", isValid: true },
      AdditionalAmount: { value: "", isValid: true },
      DiscountedOn: { value: "", isValid: true },
      DiscountedBy: { value: "", isValid: true },
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
    clearError(input) {
      this[input].isValid = true;
    },
    validateData() {
      this.formIsValid = true;

      if (this.VolumeConcentration.value === "") {
        this.VolumeConcentration.isValid = false;
        this.formIsValid = false;
      }
      if (this.Rate.value === "") {
        this.Rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.AdditionalAmount.value === "") {
        this.AdditionalAmount.isValid = false;
        this.formIsValid = false;
      }
      if (this.DiscountedBy.value === "") {
        this.DiscountedBy.isValid = false;
        this.formIsValid = false;
      }
      if (this.DiscountedOn.value === "") {
        this.DiscountedOn.isValid = false;
        this.formIsValid = false;
      }

      this.submitForm();
    },
    async submitForm() {
      if (!this.formIsValid) {
        return;
      } else {
        const id=this.$route.params.patientId;
         const IVFluid={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          volume_and_concentration: this.VolumeConcentration.value,
          rate_ml_br:this.Rate.value ,
          additives_amount: this.AdditionalAmount.value ,
          discontinued_on: this.DiscountedOn.value ,
          discontinued_by: this.DiscountedBy.value,
       }

        console.log(IVFluid);
        try{
        await this.$store.dispatch('Nurse/addIVFluid',IVFluid);
        this.$router.replace(`/nurse/${id}/viewivfluids`);
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