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
          label: "Doctor",
          icon: "edit",
          children: [
            {
              label: "Add Labour Record",
               path: "addInLabourRecord",
                  link: true,
            },
             {
              label: "Add Discharge Drugs",
              path: "addDischargeDrug",
              link: true,              
            },
            {
              label: "Antenatal Follow Up",
              path: "AddAntenatalFollowUp",
              link: true,
            },
            {
              label: "Antenatal Admission Sheet",
              path: "AntenatalAdmissionForm",
              link: true,
            },

            {
              label: "Antenatal Admission Follow-up",
              path: "addAntentalAdmissionFollowup",
              link: true,
              
            },
            {
              label: "Anticoagulation Chart ",
              path: "anticoagulationform",
              link: true,
            },
            {
              label: "Blood Products & IV Fluids",
              path: "addBloodproductsIVfluids",
              link: true,              
            },
            {
              label: "Clinical Discharge Summary",
               path: "clinicalDischargeForm",
               link: true,              
            },
            {
              label: "Delivery and Postnatal",
              path: "deliveryAndPostnatalForm",
              link: true,
            },
           
            {
              label: "Doctor Progress Note",
              path: "addnewProgressNote",
              link: true,
            },
            {
              label: "Hematology Result",
              path: "haematologyResultsForm",
              link: true,
              
            },
            {
              label: "Investigation Request Form",
              path: "investigationRequest",
              link: true,
            },
            
            {
              label: "Labour Ward Admission",
              path: "LabourWardAdmissionForm",
                  link: true,
            },

            {
              label: "Labour Ward Instruction",
               path: "addLabourWardInstruction",
                  link: true,
              
            },
            {
              label: "Obsterical History",
               path: "addObstericalHistory",
                  link: true,
              
            },
            {
              label: "Operation Notes",
              path: "operationNotesForm",
                  link: true,
            },

            {
              label: "Regular Rrugs",
              path: "addDrug",
                  link: true,              
            },

            {
              label: "Treatment Order Sheet",
              path: "addTreatmentOrder",
                  link: true,
             
            },
          ],
        },
        {
          label: "Patient Record",
          icon: "edit_off",
          children: [
            {
              label: "Vice Doctor",
              children: [
                {
                  label: "Antenatal Follow Up",
                  path: "AntenatalFollowUp",
                  link: true,
                },
                {
                  label: "Antenatal Admission Sheet",
                  path: "AntenatalAdmissionSheet",
                  link: true,
                },
                {
                  label:"Antenatal Admission Follow-up",
                  path: "AntentalAdmissionFollowup",
                  link: true,
                },
                {
                  label: "Anticoagulation Chart",
                  path: "viewanticoagulation",
                  link: true,
                },
                {
                  label: "Blood Products & IV Fluids",
                  path: "BloodproductsAndIVfluids",
                  link: true,
                },
                {
                  label:"Clinical Discharge Summary",
                  path: "clinicalDischargeSummary",
                  link: true,
                },
                {
                  label: "Delivery and Postnatal",
                  path: "deliveryAndPostnatal",
                  link: true,
                },
                {
                  label:"Discharge Drugs",
                  path: "viewDischargeDrugs",
                  link: true,
                },
                {
                  label: "Doctor Progress Notes",
                  path:  "doctorProgressNotes",
                  link: true,
                },
                {
                  label:"Hematology Results",
                  path:"haematologyResults",
                  link: true,
                },
                 {
                  label:"Investigation Request Form",
                  path:"investigationRequestSheet",
                  link: true,
                },
                {
                  label:"Labour Record",
                  path: "LabourRecords",
                  link: true,
                },
                {
                  label: "Labour Ward Admission",
                  path:  "LabourWardAdmission",
                  link: true,
                },
                {
                  label:"Labour Ward Instructions",
                  path:"labourWardInstructions",
                  link: true,
                },
                 {
                  label:"Obsterical History",
                  path:"obstericalHistory",
                  link: true,
                },
                {
                  label:"Operation Notes",
                  path:"operationNotes",
                  link: true,
                },
                {
                  label: "Regular Drugs",
                  path:  "regularDrugs",
                  link: true,
                },
                {
                  label:"Treatment Order Sheet",
                  path:"treatmentOrderSheet",
                  link: true,
                }
              ],
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
                  label: "Statistic Supplement",
                  path: "ShowStatisticSupplement",
                  link: true,
                },
                {
                  label: "Birth Report",
                  path: "ShowBirthReport",
                  link: true,
                },
                {
                  label: "Statistic Form",
                  path: "ShowStatisicForm",
                  link: true,
                },
              ],
            },
            {
              label: "Nurse",

              children: [
                {
                  label: "Nurse Progress Notes",
                  path: "viewprogress",
                  link: true,
                },
                {
                  label: "Nurse Observation Form",
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
              label: "General doctor",
              children: [
                {
                  label: "House Officer Patient Follow Up",
                  path: "houseOfficerFollowup",
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
  methods: {
    isAntenatalAdmissionSheetExist() {
      const exist = false;
      if (exist) {
        return "AntenatalAdmissionSheet";
      }
      return "AntenatalAdmissionForm";
    },
    // isLabourWardAdmissionExist() {
    //   const exist = false;
    //   if (exist) {
    //     return "LabourWardAdmission";
    //   }
    //   return "LabourWardAdmissionForm";
    // },
      // isClinicalDischargeSummaryExist() {
      //   const exist = false;
      //   if (exist) {
      //     return "clinicalDischargeSummary";
      //   }
      //   return "clinicalDischargeForm";
      // },
    // isOperationNotesExist() {
    //   const exist = false;
    //   if (exist) {
    //     return "operationNotes";
    //   }
    //   return "operationNotesForm";
    // },
    // isObstericalHistoryExist() {
    //   const exist = false;
    //   if (exist) {
    //     return "obstericalHistory";
    //   }
    //   return "addObstericalHistory";
    // },
    isDeliveryAndPostnatalExist() {
      const exist = false;
      if (exist) {
        return "deliveryAndPostnatal";
      }
      return "deliveryAndPostnatalForm";
    },
    
  },
};
</script>
  
  <style  scoped>
.menu {
  position: fixed;
  margin: 0px;
  max-width: 360px;
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
  
  
  