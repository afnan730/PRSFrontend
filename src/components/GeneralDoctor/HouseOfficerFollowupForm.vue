<template>
  <div class="row mt-3 ms-3 text-center">
    <h4 class="header2 mt-5">New House Officer Follow-up</h4>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        <div class="row mb-4">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">B.P</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !BP.isValid }"
              v-model.trim="BP.value"
              @change="clearError('BP')"
            />
            <p v-if="!BP.isValid">BP shouldn't be empty</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Odema</label>
            <select
              class="form-select mb-3"
              :class="{ invalid: !odema.isValid }"
              v-model.trim="odema.value"
              @change="clearError('odema')"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <p v-if="!odema.isValid">Please select the odema</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">FHR</label>
            <input
              type="text"
              class="form-control"
              :class="{ invalid: !fhr.isValid }"
              v-model.trim="fhr.value"
              @change="clearError('fhr')"
            />
            <p v-if="!fhr.isValid">FHR shouldn't be empty</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Urine</label>
            <select
              class="form-select mb-3"
              :class="{ invalid: !urine.isValid }"
              v-model.trim="urine.value"
              @change="clearError('urine')"
            >
              <option value="clear">clear</option>
              <option value="UTI">UTI</option>
            </select>
            <p v-if="!urine.isValid">Please select the urine</p>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2"> Remarks</label>
          <input v-model.trim="remarks" type="text" class="mb-4 mx-2 form-control full-width" />
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
      BP: { value: "", isValid: true },
      fhr: { value: "", isValid: true },
      odema: { value: "", isValid: true },
      urine: { value: "", isValid: true },
      remarks:"",
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
      if (this.BP.value === "") {
        this.BP.isValid = false;
        this.formIsValid = false;
      }
      if (this.fhr.value === "") {
        this.fhr.isValid = false;
        this.formIsValid = false;
      }
      if (this.odema.value === "") {
        this.odema.isValid = false;
        this.formIsValid = false;
      }

      if (this.urine.value === "") {
        this.urine.isValid = false;
        this.formIsValid = false;
      }

      this.submitForm();
    },
  async submitForm() {
      const id=this.$route.params.patientId;
      if (!this.formIsValid) {
        return;
      } else {
        const houseOfficerFollowup={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          bp:this.BP.value,
          urine:this.urine.value,
          fhr:this.fhr.value,
          odema:this.odema.value,
          remarks:this.remarks
       }

        console.log(houseOfficerFollowup);
        try{
        await this.$store.dispatch('generalDoctor/addPatient_follow_up',houseOfficerFollowup);
        this.$router.replace(`/generalDoctor/${id}/houseOfficerFollowup`);
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
p {
  color: red;
}
.invalid {
  border: 1px solid red;
}
</style>
  
  