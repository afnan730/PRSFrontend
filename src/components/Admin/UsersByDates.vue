<template>
    
   
<div class="v mt-5">
    <div v-if="isLoading">
          <base-spinner></base-spinner>
    </div>
    <table v-else class="table">
  <thead class="text-center">
    <tr >
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">DESIGNATION</th>
       <th scope="col">MOBILE</th>
       <th scope="col">National ID</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  
  <tbody class="text-center">
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{user.row}}</th>
      <td>{{user.first_name}} {{user.last_name}} </td>
      <td>{{user.designation}}</td>
      <td>{{user.phone_number}}</td>
      <td>{{user.national_id}}</td>
      <td>
          

          <button class="view btn btn-outline-info mx-1" @click="selectUser(user)" data-bs-toggle="modal" data-bs-target="#detailsModal"><i class="material-icons" data-v-8b298b5e="">preview</i></button> 
          <!-- view details Modal -->
          <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg  ">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="exampleModalLabel">Account Information</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modalBody">
                  <div class="">
                    <div class="mt-2">
                      <h5>Name</h5>
                    </div>
                    <div class="info">
                      {{selectedUser.first_name}} {{selectedUser.last_name}}
                    </div>
                    <div class="mt-3">
                      <h5>Gender</h5>
                    </div>
                    <div class="info">
                      {{selectedUser.gender}}
                    </div>
                    <div class="mt-3">
                      <h5>Nationality</h5>
                    </div>
                    <div class="info">
                      {{selectedUser.nationality}}
                    </div>
                    <div class="mt-3">
                      <h5>National ID</h5>
                    </div>
                    <div class="info">
                      {{selectedUser.national_id}}
                    </div>
                    <div class="mt-3">
                      <h5>Phone number</h5>
                    </div>
                    <div class="info">
                      {{selectedUser.phone_number}}
                    </div>
                    <div class="mt-3">
                      <h5>Designation</h5>
                    </div>
                    <div class="info">
                      {{selectedUser.designation}}
                    </div>
                    <div class="mt-3">
                      <h5>Status</h5>
                    </div>
                    <div class="info">
                      {{selectedUser.status}}
                    </div>
                    <div class="mt-3">
                      <h5>Registered by</h5>
                    </div>
                    <div class="info">
                      {{selectedUser.user_id}}
                    </div>
                    <div class="mt-3">
                      <h5>Registered at</h5>
                    </div>
                    <div class="info mb-3">
                      {{selectedUser.date}}
                    </div>
                  </div>
                </div>
                <div class="modal-footer" v-if="selectedUser.designation!='Admin'" >
                  <button  @click="deleteUser(selectedUser)" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-danger" data-bs-dismiss="modal" >delete</button>
                  <button  type="button" class="btn btn-dark" data-bs-dismiss="modal" >Close</button>
                </div>
              </div>
            </div>
          </div>

          
          <button v-if="user.designation!='Admin'" class="btn btn-outline-dark mx-1"  @click="selectUser(user)" data-bs-toggle="modal" data-bs-target="#editleModal"><i class="material-icons" data-v-8b298b5e="">edit</i></button>
          <!-- Edit information Modal -->
          <div  class="modal " id="editleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Update {{selectedUser.first_name}} {{selectedUser.last_name}} Account information</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form action="#" @submit.prevent="validateData">
                      <div class="row ps-3 pt-2">
                        <div class="col-md-4">
                          <label for="" class="mb-3">First name</label>
                          <input
                            type="text"
                            class="mb-4 form-control"
                            :placeholder="selectedUser.first_name"
                            :class="{ invalid: !firstName.isValid }"
                            v-model.trim="selectedUser.first_name"
                            @change="clearError('firstName')"
                          />
                          <p v-if="!firstName.isValid">First name should be valid name</p>
                          <label for="" class="mb-3">National ID\Passport No</label>
                          <input
                            type="text"
                            class="mb-4 form-control"
                            :placeholder="selectedUser.national_id"
                            :class="{ invalid: !nationalID.isValid }"
                            v-model.trim="selectedUser.national_id"
                            @change="clearError('nationalID')"
                          />
                          <p v-if="!nationalID.isValid">Please enter valid ID number</p>

                          <label for="" class="mb-3">Designation</label>
                          <select
                            class="form-select mb-4"
                            :placeholder="selectedUser.designation"
                            :class="{ invalid: !designation.isValid }"
                            v-model="selectedUser.designation"
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
                          <label for="" class="mb-3">Last name</label>
                          <input
                            type="text"
                            class="mb-4 form-control"
                            :placeholder="selectedUser.last_name"
                            :class="{ invalid: !lastName.isValid }"
                            v-model.trim="selectedUser.last_name"
                            @change="clearError('lastName')"
                          />
                          <p v-if="!lastName.isValid">Last name should be valid name</p>

                          <label for="" class="mb-3">Phone number</label>
                          <input
                            type="text"
                            class="mb-4 form-control"
                            :placeholder="selectedUser.phone_number"
                            :class="{ invalid: !phoneNumber.isValid }"
                            v-model.trim="selectedUser.phone_number"
                            @change="clearError('phoneNumber')"
                          />
                          <p v-if="!phoneNumber.isValid">Please enter valid phone number</p>

                          <label for="" class="mb-3">Status</label>
                          <select
                            class="form-select mb-4"
                            :placeholder="selectedUser.status"
                            :class="{ invalid: !status.isValid }"
                            v-model="selectedUser.status"
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
                        </div>
                        <div class="col-md-4">
                          <label for="" class="mb-3">Nationality</label>
                          <input
                            type="text"
                            class="mb-4 form-control"
                            :placeholder="selectedUser.nationality"
                            :class="{ invalid: !nationality.isValid }"
                            v-model.trim="selectedUser.nationality"
                            @change="clearError('nationality')"
                          />
                          <p v-if="!nationality.isValid">Please enter a valid nationality</p>

                          <label for="" class="mb-3">Gender</label>
                          <select
                            class="form-select mb-4"
                            
                            :class="{ invalid: !gender.isValid }"
                            v-model="selectedUser.gender"
                            @change="clearError('gender')"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <p v-if="!gender.isValid">Please select gender</p>

                          <label for="" class="mb-3">Password</label>
                          <input
                            type="text"
                            class="mb-4 form-control"
                            
                            :class="{ invalid: !password.isValid }"
                            v-model.trim="password.value"
                            @change="clearError('password')"
                          />
                          <p v-if="!password.isValid">Password should be Minimum eight characters, at least one letter and one number</p>
                        </div>
                      </div>
                    </form>
                </div>
                <div class="modal-footer" >
                  <p v-if="error">{{error}}</p>
                  <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                  <button @click="validateData(selectedUser.id)" type="submit" class="btn btn-dark" >Save</button>
                </div>
              </div>
            </div>
          </div>



          
           <button v-if="user.designation!='Admin'" class="btn btn-outline-danger mx-1"  @click="deleteUser(user)" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="material-icons" data-v-8b298b5e="">delete</i></button> 
          <!-- Delete Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{modalHead}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  {{modalBody}}
                </div>
                <div class="modal-footer" v-if="!isAdmin">
                  <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button @click="confirmDelete" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteFeedback" >delete</button>
                </div>
              </div>
            </div>
          </div>
<!-- feedback about delete action -->
           <div class="modal fade" id="deleteFeedback" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Delete user feedback</h5>
                  <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body">
                  {{deleteFeedback}}
                </div>
                
                <div class="modal-footer" >
                  <button  type="button" @click="fetchUsers" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
           
         
      </td>
    </tr>
  </tbody>

</table>
</div>
</template>
<script>



  export default{
 
    data(){
      return{
        
        isLoading:false,
        errors:null,
        modalHead:'',
        modalBody:'',
        admin:false,
        userId:null,
        selectedUser:{ },
//update user
        error:'',
        firstName: { value: "", isValid: true },
        lastName: { value: "", isValid: true },
        nationality: { value: "", isValid: true },
        nationalID: { value: "", isValid: true },
        phoneNumber: { value: "", isValid: true },
        gender: { value: "", isValid: true },
        designation: { value: "", isValid: true },
        status: { value: "", isValid: true },
        password: { value: "", isValid: true },
        formIsValid:false,

        //delete user
        deleteFeedback:"processing ..."
      
      }
    },
    computed:{
      users(){
        return this.$store.getters["Statistician/getDatesResult"];
      },
    
    isAdmin(){
      return this.admin;
    },
    confirmDeleteModalBody(){
      return this.deleteFeedback;
    }
    
    },
    
  mounted(){
    this.fetchUsers();

  },
  
    methods:{
        async fetchUsers() {
            this.deleteFeedback='processing ...';
      this.isLoading = true;
    //   const start=this.$route.params.startDate;
    //   const end=this.$route.params.endDate;
      const dates={
          start:this.$route.params.startDate,
          end:this.$route.params.endDate,
      }
      const payload={
          value:dates,
          path:'http://localhost:8000/api/user_start_end_date/'
      }
      try {
        await this.$store.dispatch("Statistician/fetchDataByDate",payload);
      } catch (error) {
        this.errors = error.message || " Something went wrong!";
      }
      this.isLoading = false;
       console.log(this.$store.getters['Statistician/getDatesResult']);
    },
   
    
      deleteUser(user){
        
        console.log(user);
        if(user.designation==='admin' || user.designation==="Admin"){
          this.admin=true;
          this.modalHead="Error";
          this.modalBody="Can not delete the admin"
        }
        else{
          this.admin=false;
          this.modalHead="Confirm";
          this.modalBody="Are you sure you want to delete "+user.first_name+ " ?";
          this.userId=user.id;
          console.log(this.userId)
        }
       
        
      },
      async confirmDelete(){
        try{
          await this.$store.dispatch('admin/delete',this.userId);
          this.deleteFeedback="Successfully deleted";
        }catch(e){
          this.deleteFeedback=e.message;
          
        }
        
        
      },
      selectUser(user){
        this.selectedUser=user;
        console.log(this.selectedUser);
      },
      // view(id){ 
      //   const path=this.$route.path+"/"+id;
      //   this.$router.push(path);
      // },
      // edit(id){
      //   const path=this.$route.path+"/"+id;
      //   this.$router.push(path);
      // },


      clearError(input) {
      this[input].isValid = true;
    },
    validateData(ID) {
      this.formIsValid = true;
      this.error='';
      var name=/^[a-z ,.'-]+$/i;
      if (this.selectedUser.first_name === "" ||!this.selectedUser.first_name.match(name)) {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
     
      if (this.selectedUser.last_name === "" ||!this.selectedUser.last_name.match(name)) {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      var country=/^[a-zA-Z]{5,}$/;
      if (this.selectedUser.nationality=== "" ||!this.selectedUser.nationality.match(country)) {
        this.nationality.isValid = false;
        this.formIsValid = false;
      }
      var id = /^[0-9]{8,}$/;
      if (!this.selectedUser.national_id.match(id)) {
        this.nationalID.isValid = false;
        this.formIsValid = false;
      }
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!this.selectedUser.phone_number.match(phoneno)) {
        this.phoneNumber.isValid = false;
        this.formIsValid = false;
      }

      if (this.selectedUser.gender.value === "") {
        this.gender.isValid = false;
        this.formIsValid = false;
      }

      if (this.selectedUser.designation === "") {
        this.designation.isValid = false;
        this.formIsValid = false;
      }
      if (this.selectedUser.status=== "") {
        this.status.isValid = false;
        this.formIsValid = false;
      }
      const pass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (this.password.value === "" ||!this.password.value.match(pass)) {
        this.password.isValid = false;
        this.formIsValid = false;
      }
       console.log(this.selectedUser);
       console.log(ID);
      this.submitForm(ID);
    },
    async submitForm(ID) {
      if (!this.formIsValid) {
        return;
      } else {
        
        this.selectedUser.first_name=this.capitalize(this.selectedUser.first_name);
        this.selectedUser.last_name=this.capitalize(this.selectedUser.last_name);
       this.selectedUser.nationality=this.capitalize(this.selectedUser.nationality);
        //console.log(this.lastName.value);
       const user={
        id:ID,
        first_name:this.selectedUser.first_name,
        last_name: this.selectedUser.last_name,
        nationality:this.selectedUser.nationality,
        national_id:this.selectedUser.national_id,
        phone_number:this.selectedUser.phone_number,
        gender:this.selectedUser.gender,
        designation:this.selectedUser.designation,
        status:this.selectedUser.status,
        password:this.password.value,
        user_id:localStorage.getItem("userId"),
       }
        console.log(user);
        try{
        await this.$store.dispatch('admin/updateUser',user);
        this.$router.go();
        // setTimeout(() => this.$router.go(), 1000);
        
        }catch(error){
          this.error=error.message;
        }
        // 
        
      }
    },
    capitalize(word){
      return word[0].toUpperCase()+word.slice(1).toLowerCase();
    }
    }
  }
</script>

<style  scoped>
    thead{
        background-color: #54415b;
        color:white;
    }
    .form-control{
        height: 3rem;
    }
    .modalBody{
      margin-left: 0;
    }
    .info{
      font-size: 1.3rem;
    }
   p {
  color: red;
}
.invalid {
  border: 1px solid red;
}
</style>