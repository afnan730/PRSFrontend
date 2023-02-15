<template>
<router-link v-if="link" :to="path">
  <div class="menu-item" :class="{ opened: expanded }">
    <div
      class="label"
      @click="toggleMenu()"
      :style="{ paddingLeft: depth * 20 + 20 + 'px' }"
    >
      <div class="left">
        <i v-if="icon" class="material-icons-outlined">{{ icon }}</i>
        <span v-if="showLabel">{{ label }}</span>
      </div>
      <div v-if="data" class="right">
        <i class="expand material-icons" :class="{ opened: expanded }">expand_more</i>
      </div>
    </div>
    <div
      v-show="showChildren"
      :class="{ 'small-menu': smallMenu }"
      class="items-container"
      :style="{ height: containerHeight }"
      ref="container"
    >
      <menu-item
        :class="{ opened: showChildren }"
        v-for="(item, index) in data"
        :key="index"
        :data="item.children"
        :label="item.label"
        :icon="item.icon"
        :depth="depth + 1"
        :smallMenu="smallMenu"
        :path="item.path"
        :link="item.link"
      />
    </div>
  </div>
</router-link>
<div v-else class="menu-item" :class="{ opened: expanded }">
    <div
      class="label"
      @click="toggleMenu()"
      :style="{ paddingLeft: depth * 20 + 20 + 'px' }"
    >
      <div class="left">
        <i v-if="icon" class="material-icons-outlined">{{ icon }}</i>
        <span v-if="showLabel">{{ label }}</span>
      </div>
      <div v-if="data" class="right">
        <i class="expand material-icons" :class="{ opened: expanded }">expand_more</i>
      </div>
    </div>
    <div
      v-show="showChildren"
      :class="{ 'small-menu': smallMenu }"
      class="items-container"
      :style="{ height: containerHeight }"
      ref="container"
    >
      <menu-item
        :class="{ opened: showChildren }"
        v-for="(item, index) in data"
        :key="index"
        :data="item.children"
        :label="item.label"
        :icon="item.icon"
        :depth="depth + 1"
        :smallMenu="smallMenu"
        :path="item.path"
        :link="item.link"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-item",
  data: () => ({
    showChildren: false,
    expanded: false,
    containerHeight: 0,
  }),
  props: {
    data: {
      type: Array,
    },
     link:{
            type:Boolean,
            required:false,
            default:false,
        },
        path:{
            type:String,
            required:false,
            default:"/"
        },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    depth: {
      type: Number,
    },
    smallMenu: {
      type: Boolean,
    },
  },
  computed: {
    showLabel() {
      return this.smallMenu ? this.depth > 0 : true;
    }
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
      if (!this.showChildren) {
        this.showChildren = true;
        this.$nextTick(() => {
          this.containerHeight = this.$refs["container"].scrollHeight + "px";
          setTimeout(() => {
            this.containerHeight = "fit-content";
            if(navigator.userAgent.indexOf("Firefox") != -1) 
              this.containerHeight = "-moz-max-content"
            this.$refs["container"].style.overflow = "visible";
          }, 300);
        });
      } else {
        this.containerHeight = this.$refs["container"].scrollHeight + "px";
        this.$refs["container"].style.overflow = "hidden";
        setTimeout(() => {
          this.containerHeight = 0 + "px";
        }, 10);
        setTimeout(() => {
          this.showChildren = false;
        }, 300);
      }
    },
  },
};
</script>

<style scoped>
.menu-item {
  position: relative;
  width: 100%;
}
.menu-item .label {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;
  user-select: none;
  height: 50px;
  padding-right: 1rem;
  box-sizing: border-box;
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.3s ease;
}
.menu-item .label > div {
  display: flex;
  align-items: center;
  gap: 15%;
}
.menu-item .label i {
  font-size: 100%;
  color: #ffffff;
  transition: all 0.3s ease;
}
.menu-item .label i.expand {
  font-size: 1.5rem;
  color: #cacaca;
}
.menu-item .label i.expand.opened {
  transform: rotate(180deg);
}
.menu-item .label.small-item {
  width: 300%;
}
.menu-item .label:hover {
  background: #1b1119;
  cursor: pointer;
}
.menu-item .items-container {
  width: 100%;
  left: calc(100% + 6px);
  transition: height 0.3s ease;
  overflow: hidden;
}
.menu-item .items-container.small-menu {
  width: 330px;
  position: absolute;
  background: #64415b;
  box-shadow: 0 0 10px #ebebeb;
  top: 0;
}
.menu-item .items-container.small-menu .label {
  width: 100% !important;
  padding-left: 20px !important;
  padding-top: 10px;
}
.router-link-exact-active span{
  color:#279ca0;
  font-weight: 800;
}
a{
  text-decoration: none;
}
</style>
