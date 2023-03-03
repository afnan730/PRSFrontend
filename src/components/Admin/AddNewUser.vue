<template>
  <div class="row pt-5 mt-5 mb-3">
    <h4 class="mt-5">Add usesr</h4>
  </div>
   
  <base-card>
    <form action="#" @submit.prevent="validateData">
      <div class="row ps-3 pt-2">
        <div class="col-md-4">
          <label for="" class="mb-3">Full Name</label>
          <input
            type="text"
            class="mb-4 form-control"
            :class="{ invalid: !fullName.isValid }"
            v-model.trim="fullName.value"
            @change="clearError('fullName')"
          />
          <p v-if="!fullName.isValid">Full name should contain at least 4 words</p>
          <!-- <label for="" class="mb-3">Fourth name</label>
          <input
            type="text"
            class="mb-4 form-control"
            :class="{ invalid: !fourthName.isValid }"
            v-model.trim="fourthName.value"
            @change="clearError('fourthName')"
          />
          <p v-if="!fourthName.isValid">Fourth name should be a valid name</p> -->
          <label for="" class="mb-3">National ID\Passport No</label>
          <input
            type="text"
            class="mb-4 form-control"
            :class="{ invalid: !nationalID.isValid }"
            v-model.trim="nationalID.value"
            @change="clearError('nationalID')"
          />
          <p v-if="!nationalID.isValid">Please enter valid ID number</p>

          <label for="" class="mb-3">Designation</label>
          <select
            class="form-select mb-4"
            :class="{ invalid: !designation.isValid }"
            v-model="designation.value"
            @change="clearError('designation')"
          >
            <option value="Statistician">Statistician</option>
            <option value="Nurse">Nurse</option>
            <option value="Vice Doctor">Vice Doctor</option>
            <option value="General Doctor">General Doctor</option>
          </select>
          <p v-if="!designation.isValid">Please select the designation</p>
        </div>
        <div class="col-md-4">
          <!-- <label for="" class="mb-3">Second name</label>
          <input
            type="text"
            class="mb-4 form-control"
            :class="{ invalid: !secondName.isValid }"
            v-model.trim="secondName.value"
            @change="clearError('secondName')"
          />
          <p v-if="!secondName.isValid">Second name should be a valid name</p> -->

          <label for="" class="mb-3">Phone number</label>
          <input
            type="text"
            class="mb-4 form-control"
            :class="{ invalid: !phoneNumber.isValid }"
            v-model.trim="phoneNumber.value"
            @change="clearError('phoneNumber')"
          />
          <p v-if="!phoneNumber.isValid">Please enter a valid phone number</p>

          <label for="" class="mb-3">Status</label>
          <select
            class="form-select mb-4"
            :class="{ invalid: !status.isValid }"
            v-model="status.value"
            @change="clearError('status')"
          >
            <option value="Advisor">Advisor</option>
            <option value="Specialist">Specialist</option>
            <option value="Vice">Vice</option>
            <option value="General">General</option>
            <option value="Excellence">Excellence</option>
            <option value="National Service">National Service</option>
            <option value="Collaborator">Collaborator</option>
          </select>
          <p v-if="!status.isValid">Please select the status</p>
          

          <label for="" class="mb-3">Password</label>
          <input
            type="text"
            class="mb-4 form-control"
            :class="{ invalid: !password.isValid }"
            v-model.trim="password.value"
            @change="clearError('password')"
          />
          <p v-if="!password.isValid">Password should be minimum eight characters, at least one letter and one number</p>
        </div>
        <div class="col-md-4">
          <!-- <label for="" class="mb-3">Third name</label>
          <input
            type="text"
            class="mb-4 form-control"
            :class="{ invalid: !thirdName.isValid }"
            v-model.trim="thirdName.value"
            @change="clearError('thirdName')"
          />
          <p v-if="!thirdName.isValid">Third name should be a valid name</p> -->
          <label for="" class="mb-3">Nationality</label>
          <input
            type="text"
            class="mb-4 form-control"
            :class="{ invalid: !nationality.isValid }"
            v-model.trim="nationality.value"
            @change="clearError('nationality')"
          />
          <p v-if="!nationality.isValid">Please enter a valid nationality</p>

          <label for="" class="mb-3">Gender</label>
          <select
            class="form-select mb-4"
            :class="{ invalid: !gender.isValid }"
            v-model="gender.value"
            @change="clearError('gender')"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
         
        </div>
      </div>
      <div class="ps-3">
        <base-button data-bs-toggle="modal" style="background-color:#3f4f5f" data-bs-target="#exampleModal" width="expand" class="mt-4">Save</base-button>
      </div>
       
    </form>
  </base-card>
   <error-modal :check="checkError" :message="error"></error-modal>
</template>
<script>
export default {
  //list of variables required to store a new user data 
  //include:
  // fullName,
  // lastName,
  // nationality,
  //  phoneNumber, 
  //gender,
  // designation "stores the job",
  //password
  data() {
    return {
      error:null,
      fullName: { value: "", isValid: true },
      // secondName: { value: "", isValid: true },
      // thirdName: { value: "", isValid: true },
      // fourthName: { value: "", isValid: true },
      nationality: { value: "", isValid: true },
      nationalID: { value: "", isValid: true },
      phoneNumber: { value: "", isValid: true },
      gender: { value: "", isValid: true },
      designation: { value: "", isValid: true },
      status: { value: "", isValid: true },
      password: { value: "", isValid: true },
    };
  },
 computed:{
   //check if the form has any error 
    checkError(){
      return this.error;
    }
  },
  methods: {
    clearError(input) {
      this[input].isValid = true;
    },
    //validate the form data when adding new user
    validateData() {
      this.formIsValid = true;
      this.error=null;
      console.log(this.fullName);
      var name=/^\w+(?: \w+){3,}$/i;
      if (this.fullName.value === "" ||!this.fullName.value.match(name) ) {
        this.fullName.isValid = false;
        this.formIsValid = false;
      }
     
      // if (this.secondName.value === "" ||!this.secondName.value.match(name)) {
      //   this.secondName.isValid = false;
      //   this.formIsValid = false;
      // }
      //  if (this.thirdName.value === "" ||!this.thirdName.value.match(name)) {
      //   this.thirdName.isValid = false;
      //   this.formIsValid = false;
      // }
      //  if (this.fourthName.value === "" ||!this.fourthName.value.match(name)) {
      //   this.fourthName.isValid = false;
      //   this.formIsValid = false;
      // }
      var country=/^[a-zA-Z]{5,}$/;
      if (this.nationality.value === "" ||!this.nationality.value.match(country)) {
        this.nationality.isValid = false;
        this.formIsValid = false;
      }
      var id = /^[0-9]{8,}$/; //regular expression for id
      if (!this.nationalID.value.match(id)) {
        this.nationalID.isValid = false;
        this.formIsValid = false;
      }
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //regular expression for phone number
      if (!this.phoneNumber.value.match(phoneno)) {
        this.phoneNumber.isValid = false;
        this.formIsValid = false;
      }

      if (this.gender.value === "") {
        this.gender.isValid = false;
        this.formIsValid = false;
      }

      if (this.designation.value === "") {
        this.designation.isValid = false;
        this.formIsValid = false;
      }
      if (this.status.value === "") {
        this.status.isValid = false;
        this.formIsValid = false;
      }
      const pass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (this.password.value === "" ||!this.password.value.match(pass)) {
        this.password.isValid = false;
        this.formIsValid = false;
      }
      this.submitForm();
    },
    async submitForm() {
      //if there is any missing data 
      if (!this.formIsValid) {
        return;
      } else {
        // in case the enterd data is full
        this.fullName.value=this.capitalize(this.fullName.value);
        // this.lastName.value=this.capitalize(this.lastName.value);
       this.nationality.value=this.capitalize(this.nationality.value);
        // user object stores the data from the form
       const user={
        full_name:this.fullName.value,
        // last_name:this.lastName.value,
        nationality:this.nationality.value,
  
        national_id:this.nationalID.value,
        phone_number:this.phoneNumber.value,
        gender:this.gender.value,
        designation:this.designation.value,
        status:this.status.value,
        password:this.password.value,
        user_id:localStorage.getItem("userId"),
       }
        console.log(user);
        //send the user data to admin module which in return manipulate database
        try{
        await this.$store.dispatch('admin/addUser',user);
        this.$router.replace("viewusers");
        }catch(error){
          this.error=error.message;
        }
        
      }
    },
    //function to make the first letter of a word capital
    capitalize(word){
      return word[0].toUpperCase()+word.slice(1).toLowerCase();
    }
  },
};
</script>
<style scoped>
.form-control,
.form-select {
  width: 90%;
  height: 3rem;
}
p {
  color: red;
}
.invalid {
  border: 1px solid red;
}
</style>