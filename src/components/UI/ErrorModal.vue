<template>
    <div v-if="check" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Error</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  {{message}}
                </div>
                <div class="modal-footer" >
                  <button type="button" @click="clearError" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default{
    props:{
    check:{
           
            required:true,
            default:null,
        },
        message:{            
            required:true,           
        }
},
methods:{
  clearError(){
    this.$emit('clear-error');
  }
}
}

</script>
