<template>
        <div class="card">
          <div class="row">
            <div class="left rounded-circle col-2" :style="circleStyle">
                <font-awesome-icon :icon="icon"  />
            </div>
            <div class="col">
              <slot></slot>
            </div>
          </div>
        </div>
</template>
<script>
    export default{
        props:{
            // number:{
            //     type: Number,
            //     required:true,
            // },
            // label:{
            //     type: String,
            //     required:true,
            // },
            icon:{
                type: String,
                required:true,
            },
            circleStyle:{
                type:String,
                required:false,
            }

            
        }
    }
</script>
<style scoped>
.card {
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border:none;
  margin: 1rem;
  max-width: 100%;
  padding: 0.8rem;
  z-index: 0;
}
.left{
  font-size: 24px;
  margin-left:1rem;
  margin-top: 0.5rem;
  margin-right: 2rem;
  max-block-size:3.5rem;
  background-color:rgba(255, 30, 105,0.8);
  padding: 0.5rem 1.1rem ; 
  color:white;
}
</style>