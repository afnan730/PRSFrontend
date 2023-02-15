<template>
    <button  class="view btn btn-dark " @click="print()">
        <i class="material-icons" data-v-8b298b5e="">print</i>
        
    <slot></slot>
    
    
  </button>
</template>
<script>
export default{
     methods:{
     print(){
      var divToPrint=this.$parent.$refs.printView;
      console.log(this.$refs);
      var newWin=window.open();
      newWin.document.write(divToPrint.outerHTML);
      newWin.print();
      newWin.close();
      // Printjs({
      //    printable: "print-view", //Id to print content 
      //    type: "HTML",
      //    showModal:true,
      //    modalMessage:"retrieving document000"
      // });
    }
  }
}
</script>
<style scoped>
button,
a {
 
 margin-left: 2rem;
 margin-bottom: 2rem;
 font-weight:500;
 padding: 10px 60px;
 font-size:18px;
 background-color: cadetblue;
 border:none

}
i{
  margin-left: 1rem;
      font-size: 17px;
}



</style>