<template>
     <nav class="navbar navbar-light  fixed-top bg-light">
          <div class="container-fluid">
            <div class="d-md-none d-block">
              <!-- <button class="btn px-1 py-0 open-btn" onclick="viewSidebar()">
                <i class="fas fa-stream"></i>
              </button> -->
            </div>
            <div>
              <a href="/patientsearch" class="navbar-brand" v-if="!isAdmin">Home</a>
              <a href="/statistics" class="navbar-brand " style="margin-left:1rem" v-if="!isAdmin">Statistics</a>
            </div>
            

            <button @click="logout" class="btn btn-outline-dark mx-3" >
              Log out
            </button>
          </div>
        </nav>
</template>
<script>
export default{
  computed:{
     isAdmin(){
        // console.log(this.$store.getters['auth/actor']);
        return this.$store.getters['auth/actor']==="Admin" || this.$store.getters['auth/actor']==="admin";
      }
  },
   methods:{
  logout(){
      this.$store.dispatch('auth/logout'); 
      this.$router.go();
      this.$router.replace({ path: "/" });
      
         
      }
  }
}
</script>


<style scoped>
.navbar{
  z-index: 90;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
}
.less{
  margin-left:1rem;
}


@media only screen and (min-width: 768px) {
  /* For desktop: */
  .navbar-brand{

  margin-left: 23rem;
}
}
</style>
