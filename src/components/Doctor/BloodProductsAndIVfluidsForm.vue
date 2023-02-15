
<template>
  <div class="ms-5">
    <div class="row mt-3 ms-3 text-center">
      <h4 class="header2 mt-5">Blood product & IV fluid</h4>
    </div>
    <div class="row w-100 forms mt-2 p-3 ms-4 me-5">
      <base-card class="mt-2">
        <h3 class="header2 text-center mb-5">Add new</h3>

        <form action="#" @submit.prevent="validateData">
          <div class="row ps-5">
            <label for="" class="d-block mb-2 text-secondary"
              >Blood product & IV fluid</label
            >
            <textarea
              class="form-control mb-4 full-width ms-2"
              id="exampleFormControlTextarea1"
              rows="3"
              :class="{invalid : !bloodProduct.isValid}"
              @blur="clearError('bloodProduct')"
              v-model.trim="bloodProduct.value"
            ></textarea>
            <p class="error-hint" v-if="!formIsValid">Please write the required information</p>
          </div>

          <div class="row ps-5 pe-5">
            <base-button data-bs-toggle="modal" data-bs-target="#exampleModal">Save</base-button>
          </div>
        </form>
        
      </base-card>
      <error-modal :check="checkError" :message="error"></error-modal>
     
    </div>
  </div>
</template>
    
    <script>
export default {
  data(){
    return{
      bloodProduct:{ value:'', isValid:true},
      formIsValid:true,
      error:''
    }
  },
   computed:{
    checkError(){
      return this.error;
    }
  },
  methods: {
     clearError(input){
                this[input].isValid=true;
            },
    validateData() {
      this.formIsValid=true;
      if(this.bloodProduct.value===''){
        this. bloodProduct.isValid=false;
        this.formIsValid=false;
      }
     this.submitForm();
    },
    async submitForm(){
       if(!this.formIsValid){
        return;
      }
      else{
        const id=this.$route.params.patientId;
         const bloodproductsAndIVfluids={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          blood_product_and_iv_fluid:this.bloodProduct.value
       }

        console.log(bloodproductsAndIVfluids);
         try{
         await this.$store.dispatch('doctor/addData',{
          value:bloodproductsAndIVfluids,
          path:"http://localhost:8000/api/post_vice_doctor_blood_products_and_i_v_fluids",
          mutation:"pushBloodproductsAndIVfluids",
        });
        this.$router.replace(`/doctor/${id}/BloodproductsAndIVfluids`);
        }catch(error){
          this.error=error.message;
        } 
       
       
      }
    }
    
  },
};
</script>
      
      <style scoped>
.form-control,
.form-select {
  width: 85%;
  border-radius: 10px;
  background: white;
  height: 8rem;
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
.error-hint {
  color:red;
}
.invalid 
 {
  border: 1px solid red;
}
</style>