<template>
<nav-bar></nav-bar>
 <div class="space"></div>
 
<div class="container mt-5">
   
    <div class="search mb-5 mt-5 col-xl-12 col-md-9 col-8  ">
      
      <form class="d-flex " @submit.prevent="search">
        <input class="form-control me-2" type="search" v-model.trim="searchedPatient" placeholder="Enter patient ID or name " aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>  
    <base-button
        v-if="isStatistician"
        class="add_botton "
        mode="add"
        data-bs-toggle="modal" data-bs-target="#exampleModal"
      >+ Add new
      </base-button>

      <!-- Add patient modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add new patient</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <base-card>
                    <form action="#" @submit.prevent="validateData">
                        <div class="row mt-2">
                          <div class="col-md-4 text-start">
                            <label for="" class="d-block mb-3">Patient name</label>
                            <input type="text" class="mb-3 form-control" 
                            :class="{invalid: !patientName.isValid}" 
                            v-model.trim='patientName.value'
                           @change="clearError('patientName')">
                            <p v-if="!patientName.isValid">Patient name should contain at least four words</p>
                            <label for="" class="d-block mb-3">Age</label>
                            <input type="number" class="mb-3 form-control" 
                            :class="{invalid: !age.isValid}" 
                            v-model='age.value'
                           @change="clearError('age')">
                            <p v-if="!age.isValid">Age should be greater than zero</p>
                            <label for="" class="d-block mb-3">Husband's name</label>
                            <input type="text" class="mb-3 form-control" 
                            :class="{invalid: !husbandName.isValid}" 
                            v-model.trim="husbandName.value"
                           @change="clearError('husbandName')" />
                            <p v-if="!husbandName.isValid">Husband name should be a valid name</p>
                            
                          </div>

                          <div class="col-md-4 text-start">
                            <label for="" class="d-block mb-3">Nationality</label>
                            <input type="text" class="mb-3 form-control" 
                            :class="{invalid: !nationality.isValid}" v-model.trim="nationality.value" @change="clearError('nationality')"/>
                            <p v-if="!nationality.isValid">Please enter a valid nationality</p>
                            <label for="" class="d-block mb-3">Residence</label>
                            <input type="text" class="mb-3 form-control" 
                            :class="{invalid: !residence.isValid}" v-model.trim="residence.value" @change="clearError('residence')"/>
                            <p v-if="!residence.isValid">Residence shouldn't be empty</p>
                            <label for="" class="d-block mb-3">Phone number </label>
                            <input type="tel" class="mb-3 form-control" 
                            :class="{invalid: !phoneNumber.isValid}" v-model.trim="phoneNumber.value" @change="clearError('phoneNumber')"/>
                            <p v-if="!phoneNumber.isValid">Please enter valid phone number</p>
                            
                          </div>
                          <div class="col-md-4 text-start">
                            <label for="" class="d-block mb-3"
                              >National ID | Passport No.</label
                            >
                            <input type="text" class="mb-3 form-control" 
                            :class="{invalid: !nationalID.isValid}" v-model.trim="nationalID.value" @change="clearError('nationalID')">
                            <p v-if="!nationalID.isValid">Please enter valid ID number</p>
                            <label for="" class="d-block mb-3">Blood group & RH </label>
                            <input type="text" class="mb-3 form-control" 
                            :class="{invalid: !bloodGroup.isValid}" v-model.trim="bloodGroup.value" @change="clearError('bloodGroup')">
                            <p v-if="!bloodGroup.isValid">Blood group should not be empty</p>
                            <label for="" class="d-block mb-3"> Occupation</label>
                            <input type="text" class="form-control"  v-model.trim="occupation.value">
                            
                          </div>
                          <div class="col-md-6 text-start">
                              <label for="" class="d-block mb-3">Booking status </label>
                                <select class="form-select mb-3 " 
                                :class="{invalid: !bookingStatus.isValid}" v-model="bookingStatus.value" @change="clearError('bookingStatus')">
                                  <option value="PW">PW</option>
                                  <option value="1st class">1st class</option>
                                  <option value="GW">GW</option>
                                </select>
                                <p v-if="!bookingStatus.isValid">Please select the booking status</p>
                              
                          </div>
                          <div class="col-md-6 "> 
                            <label for="" class="d-block mb-3">Unit</label>
                                <input type="number" class="form-control " 
                                :class="{invalid: !unit.isValid}" v-model="unit.value" @change="clearError('unit')">
                                <p v-if="!unit.isValid">Unit shouldn't be empty</p>
                            </div>
                            <div class="col-11">
                            <label for="" class="d-block mb-3">Allergies </label>
                            <textarea class="mb-3 form-control w-100" 
                            :class="{invalid: !allergies.isValid}" v-model.trim="allergies.value" @change="clearError('allergies')"></textarea>
                            <p v-if="!allergies.isValid">Allergies should not be empty</p>
                          </div>
                          <base-button width="expand" class="mx-2 mt-4">Save</base-button>
                        </div>
                    </form>
                    <div v-if="errors" class="alert alert-danger h5 mt-5 text-center" role="alert" >
                      {{errors}}
                    </div> 
                  </base-card>
                </div>
                
              </div>
            </div>
          </div>
           
    
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <table v-else-if="hasPatients" class="table">
        <thead class="text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Patient name</th>
            <th scope="col">National ID</th>
            <th scope="col">Phone number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="patient in patients" :key="patient.id">
            <th scope="row">{{patient.row}}</th>
            <td>{{patient.name}}</td>
            <td>{{patient.patient_id}}</td>
            <td>{{patient.phone_number}}</td>
            <td><base-button mode="view" @click="view(patient.patient_id)">View</base-button></td>
          </tr>
        </tbody>
  </table>

  <div v-else-if="!hasPatients && !errors && searchTrigger" class=" mt-5 text-center"  >
        <img class="img-fluid" style="max-height:700px;" src="../assets/no.png" alt="" />
  </div> 

  <div v-else-if="errors" class="alert alert-danger h5 mt-5 text-center" role="alert" >
      {{errors}}
  </div> 
</div>

</template>
<script>
import NavBar from '@/components/Nav/NavBar.vue';
import BaseCard from '@/components/UI/BaseCard.vue';



  export default{
  components: { NavBar, BaseCard },
    data(){
      return{
        isLoading:false,
        error:'',
        searchedPatient:'',
        searchTrigger:false,

        //addPatient
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
    computed:{
        isStatistician(){
        console.log(this.$store.getters['auth/actor']);
        return this.$store.getters['auth/actor']==="Statistician" ;
      },
      patients(){
        return this.$store.getters['Statistician/patients'];
      },
      hasPatients() {
      return !this.isLoading && this.$store.getters['Statistician/hasPatients'];
    },
    errors(){
      return this.error;
    }
    },
    
    created(){
      this.fetchPatients();
      // this.fetchData(
      // {
      //   path:'http://localhost:8000/api/Newborn_status_count',
      //   mutation:'setNewBorn',
      //  store:'newBornstates'
      //   }
      // );
    },
    
    methods:{
   
       async fetchPatients(){
         this.isLoading = true;
        try{
          await this.$store.dispatch('Statistician/fetchPatients');
        }
        catch(error){
          this.error=error.message ||" Something went wrong!";
        }
       this.isLoading = false;
      console.log(this.$store.getters['Statistician/patients']);
      },

      async search(){   
          
        this.error='';
        this.searchTrigger=true;
        if(this.searchedPatient===""){
          this.searchTrigger=false;
         return;
        }else{
           this.isLoading = true;
        try{
         await this.$store.dispatch('Statistician/search',this.searchedPatient);
        }
        catch(error){
          this.error=error.message ||" Something went wrong!";
        }
       this.isLoading = false;
          
        }
      },

      view(id){
        // console.log(id);
        const actor=localStorage.getItem('actor');
        if(actor==="Statistician" ||actor==="statistician"){
         
          this.$router.replace(`/statistic/${id}/healthInformation`)
        } 
        else if(actor==="Nurse" ||actor==="nurse"){
          this.$router.replace(`/nurse/${id}/healthInformation`)
        }
        else if(actor==="Vice Doctor"){
          this.$router.replace(`/doctor/${id}/healthInformation`)
        }
        else if(actor==="General Doctor"){
          this.$router.replace(`/generalDoctor/${id}/healthInformation`)
        }
      },

      //add patient
       clearError(input){
                this[input].isValid=true;
            },
    validateData() {
      this.formIsValid=true;
      this.error='';
      var name=/^\w+(?: \w+){3,}$/i;
      if(this.patientName.value==="" || !this.patientName.value.match(name)){
        this.patientName.isValid=false;
        this.formIsValid=false;
      }
      var country=/^[a-zA-Z]{5,}$/;
      if(this.nationality.value==="" || !this.nationality.value.match(country)){
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
      if(this.husbandName.value==="" ||!this.patientName.value.match(name)){
        this.husbandName.isValid=false;
        this.formIsValid=false;
      }
      // if(this.occupation.value===""){
      //   this.occupation.isValid=false;
      //   this.formIsValid=false;
      // }
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
         this.$store.commit("Statistician/setRefresh",true) ; 
        console.log(this.$store.getters['Statistician/refresh']); 
      
        this.$router.replace(`/statistic/${this.nationalID.value}/healthInformation`);  

        }catch(error){
          this.error=error.message;
        }
      }
    },
    capitalize(word){
      return word[0].toUpperCase()+word.slice(1).toLowerCase();
    }
    // ,async fetchData(payload){
            
    //         try{
    //           await this.$store.dispatch('Statistician/getStatistics',payload);
    //         }
    //         catch(error){
    //           this.errors=error.message ||" Something went wrong!";
    //         }
            
    //         // console.log(self.all_user)
    //       //this.drawPieChart();  
    //   },
    },
    
  }
</script>

<style  scoped>
    thead{
        background-color: #64415b;
        color:white;
    }
    .form-control ,.form-select{
        height: 3rem;
    }
    .add_botton {
  position:fixed;
  top: 4.5rem;
 right: 1rem;
 
  
  padding: 1.2rem 2rem;
}
.space{
    height: 2rem;
}

/* //add patient modal */
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
@media only screen and (min-width: 1200px) {
  /* For desktop: */
  .search {
    width: 970px;
  }
}

@media only screen and (min-width: 1420px) {
  /* For desktop: */
  .search {
    width: 74rem;
  }
}
@media only screen and (min-width: 1465px) {
  /* For desktop: */
  .search {
    width: 76rem;
  }
}
</style>