<template>
  <div class="row text-center mt-5">
    <h4 class="mt-3">
      Add new patient "Health information & research"
    </h4>
  </div>

  <div class="mt-3 p-3 ms-3">
    <base-card>
      <form action="#" @submit.prevent="validateData">
        <div class="row mt-2">
          <div class="col-md-4 text-start">
            <label for="" class="d-block mb-3">Patient name</label>
            <input type="text" class="mb-3 form-control" 
            :class="{invalid: !patientName.isValid}" 
            v-model.trim='patientName.value'
             @blur="clearError('patientName')">
            <p v-if="!patientName.isValid">Patient name shouldn't be empty</p>
            <label for="" class="d-block mb-3">Age</label>
            <input type="number" class="mb-3 form-control" 
            :class="{invalid: !age.isValid}" 
            v-model='age.value'
             @blur="clearError('age')">
            <p v-if="!age.isValid">Age should be greater than zero</p>
            <label for="" class="d-block mb-3">Husband's name</label>
            <input type="text" class="mb-3 form-control" 
            :class="{invalid: !husbandName.isValid}" 
            v-model.trim="husbandName.value"
             @blur="clearError('husbandName')" />
            <p v-if="!husbandName.isValid">Husband name shouldn't be empty</p>
            
          </div>

          <div class="col-md-4 text-start">
            <label for="" class="d-block mb-3">Nationality</label>
            <input type="text" class="mb-3 form-control" 
            :class="{invalid: !nationality.isValid}" v-model.trim="nationality.value"  @blur="clearError('nationality')"/>
            <p v-if="!nationality.isValid">Nationality shouldn't be empty</p>
            <label for="" class="d-block mb-3">Residence</label>
            <input type="text" class="mb-3 form-control" 
            :class="{invalid: !residence.isValid}" v-model.trim="residence.value"  @blur="clearError('residence')"/>
            <p v-if="!residence.isValid">Residence shouldn't be empty</p>
            <label for="" class="d-block mb-3">Phone number </label>
            <input type="tel" class="mb-3 form-control" 
            :class="{invalid: !phoneNumber.isValid}" v-model.trim="phoneNumber.value"  @blur="clearError('phoneNumber')"/>
            <p v-if="!phoneNumber.isValid">Please enter valid phone number</p>
            
          </div>
          <div class="col-md-4 text-start">
            <label for="" class="d-block mb-3"
              >National ID | Passport No.</label
            >
            <input type="text" class="mb-3 form-control" 
            :class="{invalid: !nationalID.isValid}" v-model.trim="nationalID.value"  @blur="clearError('nationalID')">
            <p v-if="!nationalID.isValid">Please enter valid ID number</p>
            <label for="" class="d-block mb-3">Blood group & RH </label>
            <input type="text" class="mb-3 form-control" 
            :class="{invalid: !bloodGroup.isValid}" v-model.trim="bloodGroup.value"  @blur="clearError('bloodGroup')">
            <p v-if="!bloodGroup.isValid">Blood group should not be empty</p>
            <label for="" class="d-block mb-3"> Occupation</label>
            <input type="text" class="form-control"  v-model.trim="occupation.value">
            
          </div>
          <div class="col-md-6 text-start">
              <label for="" class="d-block mb-3">Booking status </label>
                <select class="form-select mb-3 full-width" 
                :class="{invalid: !bookingStatus.isValid}" v-model="bookingStatus.value"  @blur="clearError('bookingStatus')">
                  <option value="PW">PW</option>
                  <option value="1st class">1st class</option>
                  <option value="GW">GW</option>
                </select>
                <p v-if="!bookingStatus.isValid">Please select the booking status</p>
               
          </div>
          <div class="col-md-6 "> 
            <label for="" class="d-block mb-3">Unit</label>
                <input type="number" class="form-control full-width" 
                :class="{invalid: !unit.isValid}" v-model="unit.value"  @blur="clearError('unit')">
                <p v-if="!unit.isValid">Unit shouldn't be empty</p>
            </div>
            <div class="col-11">
            <label for="" class="d-block mb-3">Allergies </label>
            <textarea class="mb-3 form-control w-100" 
            :class="{invalid: !allergies.isValid}" v-model.trim="allergies.value"  @blur="clearError('allergies')"></textarea>
            <p v-if="!allergies.isValid">Allergies should not be empty</p>
          </div>
          <base-button width="expand" class="mx-2 mt-4">Save</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      patientName:{value: '', isValid: true},
      nationality:{value: '', isValid: true},
      nationalID:{value: '', isValid: true},
      age:{ value:null, isValid:true} ,
      residence:{value: '', isValid: true},
      bloodGroup:{value: '', isValid: true},
      husbandName:{value: '', isValid: true},
      phoneNumber:{value: '', isValid: true},
      occupation:{value: '', isValid: true},
      unit:{value:null, isValid: true},
      bookingStatus:{value: '', isValid: true},
      allergies:{value:'', isValid:true},
      formIsValid:true,
    }
  },
  methods: {
    clearError(input){
                this[input].isValid=true;
            },
    validateData() {
      this.formIsValid=true;
      if(this.patientName.value===""){
        this.patientName.isValid=false;
        this.formIsValid=false;
      }
      if(this.nationality.value===""){
        this.nationality.isValid=false;
        this.formIsValid=false;
      }
       var id = /^[0-9]{8,}$/;
      if(!this.nationalID.value.match(id)){
        this.nationalID.isValid=false;
        this.formIsValid=false;
      }
      if(!this.age.value || this.age.value<=0){
        this.age.isValid=false;
        this.formIsValid=false;
      }
      if(this.residence.value===""){
        this.residence.isValid=false;
        this.formIsValid=false;
      }
      if(this.bloodGroup.value===""){
        this.bloodGroup.isValid=false;
        this.formIsValid=false;
      }
      if(this.husbandName.value===""){
        this.husbandName.isValid=false;
        this.formIsValid=false;
      }
      if(this.occupation.value===""){
        this.occupation.isValid=false;
        this.formIsValid=false;
      }
      if(this.allergies.value===""){
        this.allergies.isValid=false;
        this.formIsValid=false;     
      }
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(!this.phoneNumber.value.match(phoneno)){
        this.phoneNumber.isValid=false;
        this.formIsValid=false;
      }
      if(this.bookingStatus.value===""){
        this.bookingStatus.isValid=false;
        this.formIsValid=false;
      }
      if(!this.unit.value || this.unit.value<=0){
        this.unit.isValid=false;
        this.formIsValid=false;
      }
      this.submitForm();
      
    },
    async submitForm(){
      if(!this.formIsValid){
        return;
      }
      else{
        this.patientName.value=this.capitalize(this.patientName.value);
        this.husbandName.value=this.capitalize(this.husbandName.value);
        this.occupation.value=this.capitalize(this.occupation.value);
       this.nationality.value=this.capitalize(this.nationality.value);
       this.bloodGroup.value=this.bloodGroup.value.toUpperCase();
        //console.log(this.lastName.value);
       const patient={
        patient_id:this.nationalID.value,
        user_id:localStorage.getItem("userId"),
        unit: this.unit.value,
        booking_status: this.bookingStatus.value,
        name:this.patientName.value,
        phone_number: this.phoneNumber.value,
        age: this.age.value,
        residence: this.residence.value,
        husband_name: this.husbandName.value,
        occupation: this.occupation.value,
        blood_group_and_rh:this.bloodGroup.value,
        allergies: this.allergies.value,
        nationality:this.nationality.value, 
       }
        console.log(patient);
        try{
        await this.$store.dispatch('Statistician/addPatient',patient);
        this.$router.replace(`/statistic/${this.nationalID.value}/healthInformation`);
        }catch(error){
          this.error=error.message;
        }
      }
    },
    capitalize(word){
      return word[0].toUpperCase()+word.slice(1).toLowerCase();
    }
  },
};
</script>
<style scoped>
.form-control,
.form-select {
  height: 3rem;
  width: 80%;
  border-radius: 10px;
}
label {
  font-weight: 600;
  font-size: 1.15rem;
}
.full-width {
  width: 86%;
}


 p  {
  color:red;
}
.invalid 
 {
  border: 1px solid red;
}
</style>