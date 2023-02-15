<template>

  <button v-if="!link" :class="[mode, width]">
    <slot></slot>
  </button>
  
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>



<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    width: {
      type: String,
      required: false,
      default: null,
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
 
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.7rem 1.5rem;
  border-color: #593a51;
  font: inherit;
  color: white;
  cursor: pointer;
  margin-right: 0.5rem;
  /* display: inline-block; */
  background-color: #593a51;
border:none;
  border-radius: 25px 0 25px 0;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #382433;
  border-color: #382433;
}
.expand {
  width: 98%;
}

.dark {
  background-color: #261a24;
}

.dark:hover,
.dark:active {
  background-color: #412a3b;
  color: #ffe2fa;
  border-color: #412a3b;
}
.view {
  background-color: #279ca0;
 
}
.edit{
  background-color: #896981;
}

.view:hover,
.view:active {
  background-color: #0f5e61;
}
.add{
  background-color: rgb(80, 125, 177);
}
.add:hover{
  background-color: rgb(40, 59, 80);
}

.delete {
  background-color: #C60020;
}
.delete:hover,
.delete:active {
  background-color: rgb(124, 11, 11);
}

.outline {
  background-color: transparent;
  border-color: #593a51;
  color: #593a51;
}


.outline:hover,
.outline:active {
  background-color: #f8c4eb;
}
</style>
