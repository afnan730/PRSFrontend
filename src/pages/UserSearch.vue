<template>
<nav-bar></nav-bar>
<div class="space" style="height:3rem"></div>
<div class="container ">
    <div class="mb-5 mt-5">
      <form class="d-flex mt-5" @submit.prevent="search">
        <input class="form-control me-2" type="search" v-model.trim="searchUser" placeholder="Enter user ID" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
   

    <div v-if="isLoading && searchTrigger">
          <base-spinner></base-spinner>
    </div>
    <table v-else-if="searchTrigger && hasUsers" class="table">
  <thead class="text-center">
    <tr >
      <!-- <th scope="col">ID</th> -->
      <th scope="col">NAME</th>
      <th scope="col">DESIGNATION</th>
       <th scope="col">MOBILE</th>
       <!-- <th scope="col">National ID</th> -->
      
    </tr>
  </thead>
  
  <tbody class="text-center">
    <tr v-for="user in users" :key="user.id">
      <!-- <th scope="row">{{user.row}}</th> -->
      <td>{{user.full_name}} </td>
      <td>{{user.designation}}</td>
      <td>{{user.phone_number}}</td>
      <!-- <td>{{user.national_id}}</td> -->
     
    </tr>
  </tbody>

</table>
<div v-else-if="!hasUsers && !errors && searchTrigger" class=" mt-5 text-center"  >
        <img class="img-fluid" style="max-height:700px;" src="../assets/no.png" alt="" />
  </div> 

</div>
</template>
<script>



  export default{
  
    data(){
      return{
        searchUser:'',
        isLoading:true,
        errors:null,
       searchTrigger:false,
        admin:false,
        userId:null,
       
      
      }
    },
    computed:{
      users(){
        return this.$store.getters['admin/users'];
      },
      hasUsers() {
      return !this.isLoading && this.$store.getters['admin/hasUsers'];
    },
   
    
    },
    
 
  
    methods:{
       
    
      async search(){
        if(this.searchUser===""){
            this.searchTrigger=false;
         return;
        }else{
         await this.$store.dispatch('admin/searchById',this.searchUser);
         this.searchTrigger=true;
         this.isLoading=false;
        }
      },
   
    
    }
  }
</script>

<style  scoped>
    thead{
        background-color: #54415b;
        color:white;
    }
    .form-control , .form-select{
        height: 2.7rem;
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