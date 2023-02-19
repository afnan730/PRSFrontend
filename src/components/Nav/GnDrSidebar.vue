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
  data() {
    return {
      smallMenu: false,
      menuTree: [
        {
          label: "General doctor",
          icon: "edit",
          children: [
            {
              label: "House Officer patient follow up",
              path: "addnewFollowup",
              link: true,
            },
          ],
        },
        {
          label: "Patient record",
          icon: "edit_off",
          children: [
            {
              label:"General Doctor",
              children:[
                {
                  label: "House Officer follow up sheet",
                  path: "houseOfficerFollowup",
                  link: true,
                }

              ]
            },
            {
              label: "Statistic",

              children: [
                {
                  label: "Health Information & Research",
                  path: "healthInformationAndResearch",
                  link: true,
                },
                {
                  label: "Statistic supplement",
                  path: "ShowStatisticSupplement",
                  link: true,
                },
                {
                  label: "Birth report",
                  path: "ShowBirthReport",
                  link: true,
                },
                {
                  label: "Statistic form",
                  path: "ShowStatisicForm",
                  link: true,
                },
              ],
            },
            {
              label: "Nurse",

              children: [
                {
                  label: "Nurse progress notes",
                  path: "viewprogress",
                  link: true,
                },
                {
                  label: "Nurse observation form",
                  path: "viewobservations",
                  link: true,
                },

                {
                  label: "Investigations ",
                  path: "viewinvestigations",
                  link: true,
                },
                {
                  label: "I.V.FLUIDS",
                  path: "viewivfluids",
                  link: true,
                },
              ],
            },
            {
              label: "Doctor",

              children: [
                {
                  label: "Antenatal follow up",
                  path: "AntenatalFollowUp",
                  link: true,
                },
                {
                  label: "Antenatal admission sheet",
                  path: "AntenatalAdmissionSheet",
                  link: true,
                },
                {
                  label: "Antenatal admission follow-up",
                  path: "AntentalAdmissionFollowup",
                  link: true,
                },
                {
                  label: "Anticoagulation chart",
                  path: "viewanticoagulation",
                  link: true,
                },
                {
                  label: "Blood products & IV fluids",
                  path: "BloodproductsAndIVfluids",
                  link: true,
                },
                {
                  label: "Clinical discharge summary",
                  path: "clinicalDischargeSummary",
                  link: true,
                },
                {
                  label: "Delivery and postnatal",
                  path: "deliveryAndPostnatal",
                  link: true,
                },
                {
                  label: "Discharge drugs",
                  path: "viewDischargeDrugs",
                  link: true,
                },
                {
                  label: "Doctor progress notes",
                  path: "doctorProgressNotes",
                  link: true,
                },
                {
                  label: "Hematology results",
                  path: "haematologyResults",
                  link: true,
                },
                {
                  label: "Investigation request form",
                  path: "investigationRequestSheet",
                  link: true,
                },
                {
                  label: "Labour record",
                  path: "LabourRecords",
                  link: true,
                },
                {
                  label: "Labour ward admission",
                  path: "LabourWardAdmission",
                  link: true,
                },

                {
                  label: "Labour ward instructions",
                  path: "labourWardInstructions",
                  link: true,
                },
                {
                  label: "Obsterical history",
                  path: "obstericalHistory",
                  link: true,
                },
                {
                  label: "Operation notes",
                  path: "operationNotes",
                  link: true,
                },

                {
                  label: "Regular drugs",
                  path: "regularDrugs",
                  link: true,
                },

                {
                  label: "Treatment order sheet",
                  path: "treatmentOrderSheet",
                  link: true,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    MenuItem,
  },
  methods: {},
};
</script>
  
  <style  scoped>
.menu {
  position: fixed;
  margin: 0px;
  max-width: 350px;
  height: 100vh;
  background: linear-gradient(156deg,#2b2028, rgb(46, 40, 45) 0%, #64415b 100%),
    #64415b;
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
  width: 70%;
}

.dropdown-menu.show {
  display: block;
  width: 50%;
}
</style>
  
  
  