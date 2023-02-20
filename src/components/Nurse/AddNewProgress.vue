<template>
  <div class="row w-100 forms mt-5 p-3 ms-4 me-5">
    <base-card>
      <h3 class="header2 text-center mb-5">Add New Note</h3>

      <form action="#" @submit.prevent="validateData">
        <div class="row ps-5">
          <label for="" class="d-block mb-2 text-secondary"
            >Pateint condition</label
          >
          <textarea
            class="form-control mb-5 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            :class="{ invalid: !Pateintcondition.isValid }"
            v-model.trim="Pateintcondition.value"
            @change="clearError('Pateintcondition')"
          ></textarea>
          <p v-if="!Pateintcondition.isValid">
            Pateint condition should not be empty
          </p>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2 text-secondary">Remarks</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            :class="{ invalid: !Remarks.isValid }"
            v-model.trim="Remarks.value"
            @change="clearError('Remarks')"
          ></textarea>
          <p v-if="!Remarks.isValid">Remarks should not be empty</p>
        </div>

        <div class="text-center">
          <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="" class="mt-4 px-5">Save</base-button>
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
      Pateintcondition: { value: "", isValid: true },
      Remarks: { value: "", isValid: true },
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

      if (this.Pateintcondition.value === "") {
        this.Pateintcondition.isValid = false;
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
        const note={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          patient_condition: this.Pateintcondition.value ,
          remarks: this.Remarks.value
       }

        console.log(note);
        try{
        await this.$store.dispatch('Nurse/addNurseProgress',note);
        this.$router.replace(`/nurse/${id}/viewprogress`);
        }catch(error){
          this.error=error.message;
        }
      }
    },
  },
};
</script>
    
    <style scoped>
.form-control,
.form-select {
  width: 85%;
  border-radius: 10px;
  background: white;
}
.form-select {
  width: 91%;
}

label {
  font-weight: 600;
  font-size: 1.15rem;
}
.full-width {
  width: 91%;
}
base-card {
  margin-top: 30%;
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
p {
  color: red;
}
.invalid {
  border: 1px solid red;
}
</style>