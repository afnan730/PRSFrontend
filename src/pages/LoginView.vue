<template>
  <div class="view">
    <a href="/" class="about" >Home</a>
    <div class="row text-center align-items-center">
      <div class="col">
        
        <img class="img-fluid" src="../assets/logo.png" alt="" />
        <form @submit.prevent="submitForm">
          <input
            class="form-control"
            type="text"
            placeholder="User ID"
            v-model="userId"
          />
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <p >{{error}}</p>
          <base-button width="expand" mode="dark"
            >Sign in
          </base-button>
        </form>
         <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  data(){
    return{
      error:"",
      formIsValid:true,
      userId:'',
      password:'',
      isLoading:false,
    }
  },
  methods: {
    submitForm(){
      this.error="";
      this.formIsValid=true;
      if(this.userId==='' || this.password===''){
        this.error='User ID and password are required';
        this.formIsValid=false;
      }
      this.SiginIn();
    },
    async SiginIn() {
      if(this.formIsValid){
        this.isLoading=true;
        try{
          await this.$store.dispatch('auth/login',{
          userId:this.userId,
          password:this.password
        });
        const actor=this.$store.getters['auth/actor'];
        console.log(actor);
        if(actor==='admin'|| actor==='Admin'){
         
            this.$router.replace({ path: "/admin/dashboard" });
        }else{
          this.$router.replace({ path: "/patientsearch" });
        }
        
        }
        catch(e){
          this.error=e.message;
        }
        this.isLoading=false;
      }
      else{
        return;
      }
      
    },
  },
};
</script>

<style scoped>
.view {
  background: linear-gradient(156deg, black, rgb(11, 11, 11) 0%, #64415b 100%),
    #64415b;
  min-height: 100vh;
  overflow-x:hidden;
}
.about{
  color: white;
  font-weight: 700;
  text-decoration: none;
  position:fixed;
  top: 1rem;
 right:2rem;
}
.row{
  padding-top:7rem;
}
form {
  width: 20%;
  margin:1rem auto;
}
img {
  max-width: 400px;
}
.form-control {
  height: 4rem;
  margin-bottom: 2rem;
  padding: 0.8rem;
}
p{
  color:aliceblue;
}
</style>