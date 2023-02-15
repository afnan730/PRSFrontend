<template>
  <div class="row text-center mt-5">
    <h3 class="header2 mt-3">Statistic Form</h3>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5">
    <base-card>
      <form action="#" @submit.prevent="validateData">
        <div class="row ps-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Hospital name</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !Hospitalname.isValid }"
              v-model.trim="Hospitalname.value"
              @change="clearError('Hospitalname')"
            />

            <p v-if="!Hospitalname.isValid">
              Hospital name should not be empty
            </p>
            <label for="" class="d-block mb-2">Patient address</label>
            <input
              type="text"
              class="mb-4 form-control"
              :class="{ invalid: !Patientaddress.isValid }"
              v-model.trim="Patientaddress.value"
              @change="clearError('Patientaddress')"
            />

            <p v-if="!Patientaddress.isValid">
              Patient address should not be empty
            </p>
            <label for="" class="d-block mb-2">Entry date</label>
            <input
              type="date"
              class="mb-4 form-control"
              :class="{ invalid: !Entrydate.isValid }"
              v-model="Entrydate.value"
              @change="clearError('Entrydate')"
            />

            <p v-if="!Entrydate.isValid">Entry date should not be empty</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Hospital address</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !Hospitaladdress.isValid }"
              v-model.trim="Hospitaladdress.value"
              @change="clearError('Hospitaladdress')"
            />

            <p v-if="!Hospitaladdress.isValid">
              Hospital address should not be empty
            </p>
            <label for="" class="d-block mb-2">Patient profession</label>
            <input
              type="text"
              class="mb-4 form-control"
              :class="{ invalid: !Patientprofession.isValid }"
              v-model.trim="Patientprofession.value"
              @change="clearError('Patientprofession')"
            />

            <p v-if="!Patientprofession.isValid">
              Patient profession should not be empty
            </p>
            <label for="" class="d-block mb-2">Exit date</label>
            <input
              type="date"
              class="mb-4 form-control"
              :class="{ invalid: !Exitdate.isValid }"
              v-model="Exitdate.value"
              @change="clearError('Exitdate')"
            />

            <p v-if="!Exitdate.isValid">Exit date should not be empty</p>
          </div>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2">Final diagnosis</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            :class="{ invalid: !Finaldiagnosis.isValid }"
            v-model.trim="Finaldiagnosis.value"
            @change="clearError('Finaldiagnosis')"
          ></textarea>
          <p v-if="!Finaldiagnosis.isValid">
            Final diagnosisshould not be empty
          </p>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2"
            >Other diseases & complications. If anys</label
          >
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            :class="{ invalid: !Otherdiseases.isValid }"
            v-model.trim="Otherdiseases.value"
            @change="clearError('Otherdiseases')"
          ></textarea>
          <p v-if="!Otherdiseases.isValid">
            Other diseases should not be empty
          </p>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2"
            >In case of accidents, the injury was caused by
          </label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
            :class="{ invalid: !InjuryCause.isValid }"
            v-model.trim="InjuryCause.value"
            @change="clearError('InjuryCause')"
          ></textarea>
          
          
        </div>

        <div class="row ps-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Accident date</label>
            <input
              type="date"
              class="mb-3 form-control"
              :class="{ invalid: !Accidentdate.isValid }"
              v-model.trim="Accidentdate.value"
              @change="clearError('Accidentdate')"
            />

            <p v-if="!Accidentdate.isValid">
              Accident date should not be empty
            </p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Accident time</label>
            <input
              type="time"
              class="mb-3 form-control"
              :class="{ invalid: !Accidenttime.isValid }"
              v-model.trim="Accidenttime.value"
              @change="clearError('Accidenttime')"
            />

            <p v-if="!Accidenttime.isValid">
              Accident time should not be empty
            </p>
          </div>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2">Diabetes test</label>
          <input
            type="text"
            class="mb-4 mx-2 form-control full-width"
            :class="{ invalid: !Diabetestest.isValid }"
            v-model.trim="Diabetestest.value"
            @change="clearError('Diabetestest')"
          />

          <p v-if="!Diabetestest.isValid">Diabetes testshould not be empty</p>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2"
            >immunization againts diseases</label
          >
          <select
            class="form-select mx-2 form-select-lg mb-3"
            aria-label=".form-select-lg example"
            :class="{ invalid: !immunizationagaints.isValid }"
            v-model="immunizationagaints.value"
            @change="clearError('immunizationagaints')"
          >
            <option selected>Open this select menu</option>
            <option value="Not immunized">Not immunized</option>
            <option value="Full immunization">Full immunization</option>
            <option value="partial immunization">partial immunization</option>
          </select>
          <p v-if="!immunizationagaints.isValid">
            This field shouldn't be empty
          </p>
        </div>
        <div class="row ps-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">immunization date</label>
            <input
              type="date"
              class="mb-3 form-control"
              :class="{ invalid: !immunizationdate.isValid }"
              v-model="immunizationdate.value"
              @change="clearError('immunizationdate')"
            />

            <!-- <p v-if="!immunizationdate.isValid">
              immunization date should not be empty
            </p> -->
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">immunization place</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !immunizationplace.isValid }"
              v-model.trim="immunizationplace.value"
              @change="clearError('immunizationplace')"
            />

            <!-- <p v-if="!immunizationplace.isValid">
              immunization placeshould not be empty
            </p> -->
          </div>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2"
            >Patient condition upon existence</label
          >
          <select
            class="form-select mx-2 form-select-lg mb-3"
            aria-label=".form-select-lg example "
            :class="{ invalid: !Patientcondition.isValid }"
            v-model="Patientcondition.value"
            @change="clearError('Patientcondition')"
          >
            <option selected>Open this select menu</option>
            <option value="Recovered">Recovered</option>
            <option value="Better condition">Better condition</option>
            <option value="Escaped">Escaped</option>
            <option value="Died">Died</option>
            <option value="No improvement">No improvement</option>
            <option value="Wasn't treated">Wasn't treated</option>
          </select>
          <p v-if="!Patientcondition.isValid">
            Please select Patient condition
          </p>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2">Was the body autopsied</label>
          <select
            class="form-select mx-2 form-select-lg mb-3"
            aria-label=".form-select-lg example"
            :class="{ invalid: !Wasthebodyautopsied.isValid }"
            v-model="Wasthebodyautopsied.value"
            @change="clearError('Wasthebodyautopsied')"
          >
            <option selected>Open this select menu</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <p v-if="!Wasthebodyautopsied.isValid">
            Please select a value
          </p>
        </div>
        <div class="me-5">
          <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand" class="mt-4">Save</base-button>
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
      Hospitalname: { value: "", isValid: true },
      Hospitaladdress: { value: "", isValid: true },
      Patientaddress: { value: "", isValid: true },
      Patientprofession: { value: "", isValid: true },
      Entrydate: { value:null, isValid: true },
      Exitdate: { value: null, isValid: true },
      Finaldiagnosis: { value: "", isValid: true },
      Otherdiseases: { value: "", isValid: true },
      InjuryCause: { value: "", isValid: true },
      Accidentdate: { value: null, isValid: true },
      Diabetestest: { value: "", isValid: true },
      Accidenttime: { value: null, isValid: true },
      immunizationagaints: { value: "", isValid: true },
      immunizationdate: { value:null, isValid: true },
      immunizationplace: { value: "", isValid: true },
      Patientcondition: { value: "", isValid: true },
      Wasthebodyautopsied: { value: "", isValid: true },
      formIsValid: true,
      error:''
    };
  },
   computed:{
    checkError(){
      return this.error;
    }
  },
  // async beforeCreate(){
  //   const id=this.$route.params.patientId;
  //    try {
  //       await this.$store.dispatch("Statistician/fetchStatisticDetails",id);
  //     } catch (error) {
  //       this.errors = error.message || " Something went wrong!";
  //     }
  //     const exist = this.$store.getters['Statistician/hasStatisticDetails'];
  //     if(exist){
  //       this.$router.replace(`/statistic/${id}/ShowStatisicForm`);
  //     }

  // },
  methods: {
    clearError(input) {
      this[input].isValid = true;
    },
    validateData() {
      this.formIsValid = true;

      if (this.Patientprofession.value === "") {
        this.Patientprofession.isValid = false;
        this.formIsValid = false;
      }
      // if (this.Accidenttime.value === "") {
      //   this.Accidenttime.isValid = false;
      //   this.formIsValid = false;
      // }
      if (this.Patientaddress.value === "") {
        this.Patientaddress.isValid = false;
        this.formIsValid = false;
      }
      if (this.Hospitalname.value === "") {
        this.Hospitalname.isValid = false;
        this.formIsValid = false;
      }
      if (this.Hospitaladdress.value === "") {
        this.Hospitaladdress.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Exitdate.value) {
        this.Exitdate.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Entrydate.value ) {
        this.Entrydate.isValid = false;
        this.formIsValid = false;
      }
      if (this.Finaldiagnosis.value === "") {
        this.Finaldiagnosis.isValid = false;
        this.formIsValid = false;
      }
      if (this.Otherdiseases.value === "") {
        this.Otherdiseases.isValid = false;
        this.formIsValid = false;
      }
      // if (this.InjuryCause.value === "") {
      //   this.InjuryCause.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (!this.Accidentdate.value ) {
      //   this.Accidentdate.isValid = false;
      //   this.formIsValid = false;
      // }

      if (this.Diabetestest.value === "") {
        this.Diabetestest.isValid = false;
        this.formIsValid = false;
      }
      // if (this.immunizationdate.value === "") {
      //   this.immunizationdate.isValid = false;
      //   this.formIsValid = false;
      // }
      if (this.immunizationagaints.value === "") {
        this.immunizationagaints.isValid = false;
        this.formIsValid = false;
      }
      // if (this.immunizationplace.value === "") {
      //   this.immunizationplace.isValid = false;
      //   this.formIsValid = false;
      // }
      if (this.Patientcondition.value === "") {
        this.Patientcondition.isValid = false;
        this.formIsValid = false;
      }
      if (this.Wasthebodyautopsied.value === "") {
        this.Wasthebodyautopsied.isValid = false;
        this.formIsValid = false;
      }

      this.submitForm();
    },
    async submitForm() {
      const id=this.$route.params.patientId;
      if (!this.formIsValid) {
        return;
      } else {
        const statisticDetails={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          hospital_name:this.Hospitalname.value,
          hospital_address: this.Hospitaladdress.value,
          patient_address: this.Patientaddress.value,
          patients_profession: this.Patientprofession.value,
          date_of_entry:this.Entrydate.value,
          exit_date: this.Exitdate.value,
          final_diagnosis:this.Finaldiagnosis.value,
          other_diseases_and_complications: this.Otherdiseases.value,
          accident_cause:this.InjuryCause.value,
          incident_date: this.Accidentdate.value,
          incident_time: this.Accidenttime.value ,
          diabetes_test:this.Diabetestest.value,
          immunization_against_diseases: this.immunizationagaints.value,
          immunization_date:this.immunizationdate.value,
          immunization_place: this.immunizationplace.value,
          patients_condition_upon_exit:this.Patientcondition.value,
          was_the_body_autopsied: this.Wasthebodyautopsied.value,
          
       }
        console.log(statisticDetails);
        try{
        await this.$store.dispatch('Statistician/addStatisticDetails',statisticDetails);
        console.log("added")
        this.$router.replace(`/statistic/${id}/ShowStatisicForm`);
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