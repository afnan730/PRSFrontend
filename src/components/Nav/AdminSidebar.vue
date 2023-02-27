<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <img class="sidebar-logo" src="@/assets/logo.png" alt="logo" />
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
      :path="item.path"
      :link="item.link"
    />
    <i @click="smallMenu = !smallMenu" class="material-icons">menu</i>
  </div>
</template>
<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "recursive-menu",
  data () {
    return{
    smallMenu: false,
    menuTree: [
      {
        label: "Dashboard",
        icon: "dashboard",
        link:true,
        path:"/admin/dashboard"
      },
      {
        label: "Manage Users",
        icon: "manage_accounts",
        link:true,
        path:"/admin/viewusers"
      },
      {
        label: "Add New User",
        icon: "person_add",
        link:true,
         
        path:"/admin/addusers"
      },
    ],
  }},
  components: {
    MenuItem,
  },
  
};
</script>
<style  scoped>
.mainContainer {
  background-color: #f5f1f4;
  min-height: 100vh;
 
  margin: 0;
}
.menu {
  position: fixed;
  margin: 0px;
  max-width: 350px;
  height: 100vh;
  /* background: linear-gradient(156deg,#2b2028, rgb(46, 40, 45) 0%, #64415b 100%),
    #64415b; */
    background: #3f535f;
    /* background: #254b72; */
    /* background:linear-gradient(156deg,#263238, rgb(35, 50, 59) 0%, #456f8b 100%),
    #456f8b; */
  border-right: 1px solid #ececec;
  transition: all 0.3s ease;
  overflow: auto;
  padding-bottom: 1rem;
  margin-left: -0.8rem;
  z-index: 100;
}

.menu i {
  position: absolute;
  right: 2%;
  font-size: 20px;
  top: 15px;
  color: white;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.menu.small-menu {
  overflow: inherit;
  width: 75px;
  padding-top: 50px;
}
.menu.small-menu i {
  left: 20px;
  color: white;
}
.sidebar-logo {
  margin-left: 1.25rem;
  width: 80%;
}



.dropdown-menu.show {
    display: block;
    width: 50%;
}

</style>


