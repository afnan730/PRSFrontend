<template>
  <div class="row text-center mt-5">
    <h4 class="header2 mt-3">Statistic Supplement</h4>
  </div>
  <div class="forms mt-3 p-3 ms-4 me-5">
    <base-card>
      <form action="#" @submit.prevent="validateData">
        <div class="row ps-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Baby name</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !babyName.isValid }"
              v-model.trim="babyName.value"
              @change="clearError('babyName')"
            />
            <p v-if="!babyName.isValid">Name should not be empty</p>

            <label for="" class="d-block mb-2">Baby status</label>

            <select
              class="form-select mb-3"
              :class="{ invalid: !babyStatus.isValid }"
              v-model="babyStatus.value"
              @change="clearError('babyStatus')"
            >
              <option value="Dead">Dead</option>
              <option value="Alive">Alive</option>
            </select>
            <p v-if="!babyStatus.isValid">Please select the status</p>

            <label for="" class="d-block mb-2">Birth date</label>
            <input
              type="date"
              class="mb-3 form-control"
              :class="{ invalid: !birthDate.isValid }"
              v-model="birthDate.value"
              @change="clearError('birthDate')"
            />
            <p v-if="!birthDate.isValid">Date should not be empty</p>

            <label for="" class="d-block mb-2">Father's name</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !fatherName.isValid }"
              v-model.trim="fatherName.value"
              @change="clearError('fatherName')"
            />
            <p v-if="!fatherName.isValid">Name should not be empty</p>

            <label for="" class="d-block mb-2">Father's nationality</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !fatherNationality.isValid }"
              v-model.trim="fatherNationality.value"
              @change="clearError('fatherNationality')"
            />
            <p v-if="!fatherNationality.isValid">
              Nationality should not be empty
            </p>

            <label for="" class="d-block mb-2">Father's education</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !fatherEducation.isValid }"
              v-model.trim="fatherEducation.value"
              @change="clearError('fatherEducation')"
            />
            <p v-if="!fatherEducation.isValid">Education should not be empty</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Baby gender</label>

            <select
              class="form-select mb-3"
              :class="{ invalid: !babyGender.isValid }"
              v-model="babyGender.value"
              @change="clearError('babyGender')"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p v-if="!babyGender.isValid">Please select the gender</p>

            <label for="" class="d-block mb-2">Baby type</label>

            <select
              class="form-select mb-3"
              :class="{ invalid: !babyType.isValid }"
              v-model="babyType.value"
              @change="clearError('babyType')"
            >
              <option value="Single">Single</option>
              <option value="Twin">Twin</option>
            </select>
            <p v-if="!babyType.isValid">Please select the typpe</p>

            <label for="" class="d-block mb-2">Birth place</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !birthPlace.isValid }"
              v-model.trim="birthPlace.value"
              @change="clearError('birthPlace')"
            />
            <p v-if="!birthPlace.isValid">Place should not be empty</p>

            <label for="" class="d-block mb-2">Father's age</label>
            <input
              type="number"
              class="mb-3 form-control"
              :class="{ invalid: !fatherAge.isValid }"
              v-model="fatherAge.value"
              @change="clearError('fatherAge')"
            />
            <p v-if="!fatherAge.isValid">Please enter valid age</p>

            <label for="" class="d-block mb-2">Father's Religion</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !fatherReligion.isValid }"
              v-model.trim="fatherReligion.value"
              @change="clearError('fatherReligion')"
            />
            <p v-if="!fatherReligion.isValid">Religion should not be empty</p>

            <label for="" class="d-block mb-2">Father's profession</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !fatherProfession.isValid }"
              v-model.trim="fatherProfession.value"
              @change="clearError('fatherProfession')"
            />
            <p v-if="!fatherProfession.isValid">
              Profession should not be empty
            </p>
          </div>
        </div>
        <div class="row ps-5">
          <label for="" class="d-block mb-2">Father's residence</label>
          <input
            type="text"
            class="mb-3 form-control full-width mx-2"
            :class="{ invalid: !fatherResidence.isValid }"
            v-model.trim="fatherResidence.value"
            @change="clearError('fatherResidence')"
          />
          <p v-if="!fatherResidence.isValid">Residence should not be empty</p>
        </div>
        <div class="row ps-5">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Mother's education</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !motherEducation.isValid }"
              v-model.trim="motherEducation.value"
              @change="clearError('motherEducation')"
            />
            <p v-if="!motherEducation.isValid">Education should not be empty</p>
            <label for="" class="d-block mb-2">Marriage duration</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !marriageDuration.isValid }"
              v-model.trim="marriageDuration.value"
              @change="clearError('marriageDuration')"
            />
            <p v-if="!marriageDuration.isValid">Duration should not be empty</p>
            <label for="" class="d-block mb-2">Number of miscarriage</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !numberOfMiscarriage.isValid }"
              v-model.trim="numberOfMiscarriage.value"
              @change="clearError('numberOfMiscarriage')"
            />
            <p v-if="!numberOfMiscarriage.isValid">
              Miscarriage should not be empty
            </p>
            <label for="" class="d-block mb-2">Operation type</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !operationType.isValid }"
              v-model.trim="operationType.value"
              @change="clearError('operationType')"
            />
            <p v-if="!operationType.isValid">Operation should not be empty</p>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Mother's Profession</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !motherProfession.isValid }"
              v-model.trim="motherProfession.value"
              @change="clearError('motherProfession')"
            />
            <p v-if="!motherProfession.isValid">
              Profession should not be empty
            </p>
            <label for="" class="d-block mb-2">Marriage establishment</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !marriageEstablishment.isValid }"
              v-model.trim="marriageEstablishment.value"
              @change="clearError('marriageEstablishment')"
            />
            <p v-if="!marriageEstablishment.isValid">
              Marriage should not be empty
            </p>
            <label for="" class="d-block mb-2">Birth Order</label>
            <input
              type="number"
              class="mb-3 form-control"
              :class="{ invalid: !birthOrder.isValid }"
              v-model="birthOrder.value"
              @change="clearError('birthOrder')"
            />
            <p v-if="!birthOrder.isValid">Order Marriage</p>
            <label for="" class="d-block mb-2">Normal position shape</label>
            <input
              type="text"
              class="mb-3 form-control"
              :class="{ invalid: !normalPositionShape.isValid }"
              v-model.trim="normalPositionShape.value"
              @change="clearError('normalPositionShape')"
            />
            <p v-if="!normalPositionShape.isValid">
              Normal Position should not be empty
            </p>
          </div>
          <div class="me-5">
            <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand" class="mt-4">Save</base-button>
          </div>
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
      babyName: { value: "", isValid: true },
      babyStatus: { value: "", isValid: true },
      birthDate: { value: null, isValid: true },
      babyGender: { value: "", isValid: true },
      babyType: { value: "", isValid: true },
      birthPlace: { value: "", isValid: true },
      fatherName: { value: "", isValid: true },
      fatherNationality: { value: "", isValid: true },
      fatherEducation: { value: "", isValid: true },
      fatherReligion: { value: "", isValid: true },
      fatherAge: { value: null, isValid: true },
      fatherProfession: { value: "", isValid: true },
      fatherResidence: { value: "", isValid: true },
      motherEducation: { value: "", isValid: true },
      marriageDuration: { value: "", isValid: true },
      motherProfession: { value: "", isValid: true },
      marriageEstablishment: { value: "", isValid: true },
      numberOfMiscarriage: { value: "", isValid: true },
      birthOrder: { value: null, isValid: true },
      operationType: { value: "", isValid: true },
      normalPositionShape: { value: "", isValid: true },

      formIsValid: true,
      error:'',
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
  //       await this.$store.dispatch("Statistician/fetchStatisticSupplement",id);
  //     } catch (error) {
  //       this.errors = error.message || " Something went wrong!";
  //     }
  //     const exist = this.$store.getters['Statistician/hasStatisticSupplement'];
  //     if(exist){
  //       this.$router.replace(`/statistic/${id}/ShowStatisticSupplement`);
  //     }

  // },
  methods: {
    clearError(input) {
      this[input].isValid = true;
    },
    validateData() {
      this.formIsValid = true;

      if (this.babyName.value === "") {
        this.babyName.isValid = false;
        this.formIsValid = false;
      }
      if (this.babyStatus.value === "") {
        this.babyStatus.isValid = false;
        this.formIsValid = false;
      }
      if (this.babyType.value === "") {
        this.babyType.isValid = false;
        this.formIsValid = false;
      }
      if (this.babyGender.value === "") {
        this.babyGender.isValid = false;
        this.formIsValid = false;
      }
      if (this.birthPlace.value === "") {
        this.birthPlace.isValid = false;
        this.formIsValid = false;
      }
      if (!this.birthDate.value) {
        this.birthDate.isValid = false;
        this.formIsValid = false;
      }
      if (this.fatherReligion.value === "") {
        this.fatherReligion.isValid = false;
        this.formIsValid = false;
      }
      if (this.fatherProfession.value === "") {
        this.fatherProfession.isValid = false;
        this.formIsValid = false;
      }
      if (this.fatherName.value === "") {
        this.fatherName.isValid = false;
        this.formIsValid = false;
      }
      if (this.fatherNationality.value === "") {
        this.fatherNationality.isValid = false;
        this.formIsValid = false;
      }
      if (this.fatherResidence.value === "") {
        this.fatherResidence.isValid = false;
        this.formIsValid = false;
      }
      if (this.fatherEducation.value === "") {
        this.fatherEducation.isValid = false;
        this.formIsValid = false;
      }
      if (this.motherProfession.value === "") {
        this.motherProfession.isValid = false;
        this.formIsValid = false;
      }
      if (this.motherEducation.value === "") {
        this.motherEducation.isValid = false;
        this.formIsValid = false;
      }
      if (this.marriageDuration.value === "") {
        this.marriageDuration.isValid = false;
        this.formIsValid = false;
      }
      // if (this.marriageEstablishment.value === "") {
      //   this.marriageEstablishment.isValid = false;
      //   this.formIsValid = false;
      // }
      if (!this.birthOrder.value) {
        this.birthOrder.isValid = false;
        this.formIsValid = false;
      }
      if (this.numberOfMiscarriage.value === "") {
        this.numberOfMiscarriage.isValid = false;
        this.formIsValid = false;
      }
      if (this.normalPositionShape.value === "") {
        this.normalPositionShape.isValid = false;
        this.formIsValid = false;
      }
      if (this.operationType.value === "") {
        this.operationType.isValid = false;
        this.formIsValid = false;
      }

      if (!this.fatherAge.value || this.fatherAge.value <= 0) {
        this.fatherAge.isValid = false;
        this.formIsValid = false;
      }

      this.submitForm();
    },
    async submitForm() {
      const id=this.$route.params.patientId;
      if (!this.formIsValid) {
        return;
      } else {
        const statisticSupplement={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          baby_name: this.babyName.value,
          baby_gender:this.babyGender.value,
          baby_status: this.babyStatus.value,
          baby_type: this.babyType.value,
          birth_date: this.birthDate.value,
          birth_place: this.birthPlace.value,
          mothers_education:this.motherEducation.value,
          mother_industry: this.motherProfession.value,
          marriage_duration: this.marriageDuration.value,
          establish_marriage:this.marriageEstablishment.value,
          father_name: this.fatherName.value ,
          father_age:this.fatherAge.value,
          number_of_miscarriages: this.numberOfMiscarriage.value,
          baby_arrangement:this.birthOrder.value,
          fathers_nationality:this.fatherNationality.value ,
          religion:this.fatherReligion.value,
          operation_type:this.operationType.value,
          father_industry:this.fatherProfession.value,
          fathers_education: this.fatherEducation.value,
          normal_position_shape:this.normalPositionShape.value,
          fathers_residence: this.fatherResidence.value 
          
       }
        console.log(statisticSupplement);
        try{
        await this.$store.dispatch('Statistician/addStatisticSupplement',statisticSupplement);
        this.$router.replace(`/statistic/${id}/ShowStatisticSupplement`);
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
.full-width {
  width: 91%;
}
label {
  font-weight: 600;
  font-size: 1.15rem;
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