<template>
  <div class="row text-center mt-5">
    <h4 class="header2 mt-3">Birth Report</h4>
  </div>
  <div class="forms mt-3 p-3 ms-4 me-5">
    <base-card>
      <form action="#" @submit.prevent="validateData">
        <div class="row ps-5">
          <div class="col-md-6">
            <label for="" class="d-block mb-2">Birth date</label>
            <input
              type="date"
              class="mb-3 form-control"
              :class="{ invalid: !birthDate.isValid }"
              v-model.trim="birthDate.value"
              @change="clearError('birthDate')"
            />
            <p v-if="!birthDate.isValid">Please enter the birth date</p>
        
            <label for="" class="d-block mb-2">Placenta birth hour</label>
            <input
              type="time"
              class="mb-3 form-control"
              :class="{ invalid: !placentaBirthHour.isValid }"
              v-model.trim="placentaBirthHour.value"
              @change="clearError('placentaBirthHour')"
            />
            <p v-if="!placentaBirthHour.isValid">
              Please enter the placenta birth hour
            </p>

            <label for="" class="d-block mb-2">Birth type</label>
            <select
              class="form-select mb-3"
              :class="{ invalid: !birthType.isValid }"
              v-model.trim="birthType.value"
              @change="clearError('birthType')"
            >
              <option value="Head">Head</option>
              <option value="Solid">Solid</option>
              <option value="Operation">Operation</option>
              <option value="Dried">Dried</option>
            </select>
            <p v-if="!birthType.isValid">Please select the birth type</p>

            <label for="" class="d-block mb-2">Newborn weight</label>
            <input
              type="number"
              class="mb-3 form-control"
              :class="{ invalid: !newbornWeight.isValid }"
              v-model="newbornWeight.value"
              @change="clearError('newbornWeight')"
            />
            <p v-if="!newbornWeight.isValid">
              Newborn weight should not be empty
            </p>
          </div>
          <div class="col-md-6">
            <label for="" class="d-block mb-2">Fetal birth hour</label>
            <input
              type="time"
              class="mb-3 form-control"
              :class="{ invalid: !fetalBirthHour.isValid }"
              v-model.trim="fetalBirthHour.value"
              @change="clearError('fetalBirthHour')"
            />
            <p v-if="!fetalBirthHour.isValid">Please enter Fetal birth hour</p>
            <label for="" class="d-block mb-2">Blood quantity</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !bloodQuantity.isValid }"
              v-model.trim="bloodQuantity.value"
              @change="clearError('bloodQuantity')"
            />
            <p v-if="!bloodQuantity.isValid">
              Blood Quantity should not be empty
            </p>

            <label for="" class="d-block mb-2">Newborn status </label>
            <select
              class="form-select mb-3"
              :class="{ invalid: !newbornStatus.isValid }"
              v-model="newbornStatus.value"
              @change="clearError('newbornStatus')"
            >
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="Scavenged">Scavenged</option>
              <option value="Died after birth">Died after birth</option>
            </select>
            <p v-if="!newbornStatus.isValid">
              Please select the newborn status
            </p>

            <label for="" class="d-block mb-2">Feeding parctice </label>
            <select
              class="form-select mb-3"
              :class="{ invalid: !feedingParctice.isValid }"
              v-model="feedingParctice.value"
              @change="clearError('feedingParctice')"
            >
              <option value="One hour after birth">One hour after birth</option>
              <option value="Not breastfed">Not breastfed</option>
            </select>
            <p v-if="!feedingParctice.isValid">
              Please select the feeding parctice
            </p>
          </div>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2">Wound</label>

          <select
            class="form-select mx-2 full-width mb-3"
            :class="{ invalid: !wound.isValid }"
            v-model="wound.value"
            @change="clearError('wound')"
          >
            <option value="Warah">Warah</option>
            <option value="Adele">Adele</option>
            <option value="Taqa">Taqa</option>
          </select>
          <p v-if="!wound.isValid">Please select the wound</p>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2">Vitamin K</label>

          <select
            class="form-select mx-2 full-width mb-3"
            :class="{ invalid: !vitaminK.isValid }"
            v-model="vitaminK.value"
            @change="clearError('vitaminK')"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <p v-if="!wound.isValid">Please select Vitamin K</p>
        </div>
        <div class="row ps-5">
          <div class="d-flex mt-2">
            <label for="">Token</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input ms-5"
                type="checkbox"
                id="inlineCheckbox2"
                value="Ergometrine injection"
                @change="clearError('token')"
                v-model="token.value"
              />
              <label class="form-check-label ms-1 me-5" for="inlineCheckbox2"
                >Ergometrine injection</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Cintnon"
                @change="clearError('token')"
                v-model="token.value"
              />
              <label class="form-check-label me-5" for="inlineCheckbox3"
                >Cintnon</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                value="Ergometrine pills"
                @change="clearError('token')"
                v-model="token.value"
              />
              <label class="form-check-label me-5" for="inlineCheckbox5"
                >Ergometrine pills</label
              >
            </div>
          </div>
        </div>
        <div class="row ps-5">
          <div class="d-flex mt-2">
            <label class="me-5" for="">Baby </label>
            <div class="form-check form-check-inline ms-5">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox4"
                value="Single"
                @change="clearError('babyKind')"
                v-model="babyKind.value"
              />
              <label class="form-check-label me-5" for="inlineCheckbox4"
                >Single</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineCheckbox5"
                value="Twins"
                @change="clearError('babyKind')"
                v-model="babyKind.value"
              />
              <label class="form-check-label me-5" for="inlineCheckbox5"
                >Twins</label
              >
            </div>
            <p v-if="!babyKind.isValid">Please select baby type</p>
          </div>
        </div>
        <div class="row ps-5">
          <div class="d-flex mt-2">
            <label for="">Gender </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input ms-5"
                type="checkbox"
                id="inlineCheckbox2"
                value="Male"
                @change="clearError('baby')"
                v-model="baby.value"
              />
              <label class="form-check-label ms-2 me-5" for="inlineCheckbox2"
                >Male</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Female"
                @change="clearError('baby')"
                v-model="baby.value"
              />
              <label class="form-check-label me-5" for="inlineCheckbox3"
                >Female</label
              >
            </div>
            <p v-if="!baby.isValid">Please select birth gender</p>
          </div>
        </div>
        <div class="me-5 ps-5">
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
       error:'',
      fetalBirthHour: { value:null, isValid: true },
      placentaBirthHour: { value: null, isValid: true },
      birthDate: { value:null, isValid: true },
      newbornStatus: { value: "", isValid: true },
      birthType: { value: "", isValid: true },
      newbornWeight: { value: null, isValid: true },
      feedingParctice: { value: "", isValid: true },
      wound: { value: "", isValid: true },
      vitaminK: { value: "", isValid: true },
      token: { value: [], isValid: true },
      bloodQuantity: { value: null, isValid: true },
      baby: { value: [], isValid: true },
      babyKind: { value: [], isValid: true },

      formIsValid: true,
    };
  },
   computed:{
    checkError(){
      return this.error;
    },
    // isMale(){

    // },
    // isFemale(){

    // },
    // isTwins(){

    // }
  },
  // async beforeCreate(){
  //   const id=this.$route.params.patientId;
  //    try {
  //       await this.$store.dispatch("Statistician/fetchBirthReport",id);
  //     } catch (error) {
  //       this.errors = error.message || " Something went wrong!";
  //     }
  //     const exist = this.$store.getters['Statistician/hasBirthReport'];
  //     if(exist){
  //       this.$router.replace(`/statistic/${id}/ShowBirthReport`);
  //     }

  // },
  methods: {
    clearError(input) {
      this[input].isValid = true;
    },
    validateData() {
      this.formIsValid = true;

      if (!this.fetalBirthHour.value ) {
        this.fetalBirthHour.isValid = false;
        this.formIsValid = false;
      }
      if (!this.birthDate.value) {
        this.birthDate.isValid = false;
        this.formIsValid = false;
      }
      if (!this.placentaBirthHour.value) {
        this.placentaBirthHour.isValid = false;
        this.formIsValid = false;
      }
      if (this.birthType.value === "") {
        this.birthType.isValid = false;
        this.formIsValid = false;
      }
      if (this.newbornStatus.value === "") {
        this.newbornStatus.isValid = false;
        this.formIsValid = false;
      }
      if (!this.newbornWeight.value || this.newbornWeight.value<0) {
        this.newbornWeight.isValid = false;
        this.formIsValid = false;
      }
      if (this.feedingParctice.value === "") {
        this.feedingParctice.isValid = false;
        this.formIsValid = false;
      }
      if (this.wound.value === "") {
        this.wound.isValid = false;
        this.formIsValid = false;
      }
      if (this.vitaminK.value === "") {
        this.vitaminK.isValid = false;
        this.formIsValid = false;
      }

      if (!this.bloodQuantity.value) {
        this.bloodQuantity.isValid = false;
        this.formIsValid = false;
      }
      if (this.babyKind.value.length<1) {
        this.babyKind.isValid = false;
        this.formIsValid = false;
      }
       if (this.baby.value.length<1) {
        this.baby.isValid = false;
        this.formIsValid = false;
      }

      this.submitForm();
    },
    async submitForm() {
      const id=this.$route.params.patientId;
      if (!this.formIsValid) {
        return;
      } else {
       const birthReport={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          birth_date:this.birthDate.value,
          Fetal_birth_hour: this.fetalBirthHour.value,
          birth_type: this.birthType.value,
          placenta_birth_hour:this.placentaBirthHour.value,
          blood_quantity: this.bloodQuantity.value,
          newborn_status:this.newbornStatus.value,
          birth_weight: this.newbornWeight.value,
          breast_feeding_practice: this.feedingParctice.value,
          wound: this.wound.value,
          vitamin_k: this.vitaminK.value,
          token: this.token.value.join(),
          baby_type: this.baby.value.join(),
          baby_kind:this.babyKind.value,
       }
        console.log(birthReport);
        try{
        await this.$store.dispatch('Statistician/addBirthReport',birthReport);
       
        this.$router.replace(`/statistic/${id}/ShowBirthReport`);
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
  height: 2.3rem;
  width: 85%;
  border-radius: 10px;
}
label {
  font-weight: 600;
  font-size: 1.15rem;
}
span {
  font-weight: 300;
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