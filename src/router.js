import { createRouter, createWebHistory } from "vue-router";
import store from "./stores/index.js";
import StatisticianMain from "./pages/Statistician/StatisticianMain.vue";
import NurseMain from "./pages/Nurse/NurseMain.vue";
import DoctorMain from "./pages/Doctor/DoctorMain.vue";
import GeneralDoctorMain from "./pages/GeneralDoctor/GeneralDoctorMain.vue";
//admin
import AdminMain from "./pages/Admin/AdminMain.vue";
import AddUser from "./components/Admin/AddNewUser.vue";
import DashboardStatistics from "./components/Admin/DashboardStatistics.vue";
import ViewUsers from "./components/Admin/ViewUsers.vue";
import usersByDate from "./components/Admin/UsersByDates.vue";
//GeneralDoctor
import HouseofficerForm from "./components/GeneralDoctor/HouseOfficerFollowupForm.vue";
import HouseofficerFollowup from "./components/GeneralDoctor/HouseOfficerFollowup.vue";
//Statistic

import StatisticSupplement from "./components/Statistician/StatisticSupplement.vue";
import BirthReport from "./components/Statistician/BirthReport.vue";
import StatistcForm from "./components/Statistician/StatistcForm.vue";
import ShowBirthReport from "./components/Statistician/ShowInformationBirthReport.vue";
import ShowStatisicForm from "./components/Statistician/ShowInformationStatisicForm.vue";
import ShowInformationAdded from "./components/Statistician/ShowInformationAdded.vue";
import ShowStatisticSupplement from "./components/Statistician/ShowStatisticSupplement.vue";
//nurse
import AddNewProgress from "./components/Nurse/AddNewProgress.vue";
import ViewNotesProgress from "./components/Nurse/ViewNotesProgress.vue";
import AddNewObservation from "./components/Nurse/AddNewObservation.vue";
import ViewNotesObservation from "./components/Nurse/ViewNotesObservation.vue";
import AddNewInvestigations from "./components/Nurse/AddNewInvestigations.vue";
import ViewNotesInvestigations from "./components/Nurse/ViewNotesInvestigations.vue";
import AddNewIVFLUIDS from "./components/Nurse/AddNewIVFLUIDS.vue";
import ViewNotesIVFLUIDS from "./components/Nurse/ViewNotesIVFLUIDS.vue";
import AddNewAnticoagulation from "./components/Nurse/AddNewAnticoagulation.vue";
import AnticoagulationChart from "./components/Nurse/ViewAnticoagulationChart.vue";

//doctor
import AntenatalFollowUpForm from "./components/Doctor/AntenatalFollowUpForm.vue";
import AntenatalFollowUp from "./components/Doctor/AntenatalFollowUp.vue";
import AntenatalAdmissionSheet from "./components/Doctor/AntenatalAdmissionSheet.vue";
import AntenatalAdmissionForm from "./components/Doctor/AntenatalAdmissionForm.vue";
import AntentalAdmissionFollowup from "./components/Doctor/AntentalAdmissionFollowup.vue";
import AntentalAdmissionFollowupForm from "./components/Doctor/AntentalAdmissionFollowupForm.vue";
import LabourWardAdmissionForm from "./components/Doctor/LabourWardAdmissionForm.vue";
import LabourWardAdmission from "./components/Doctor/LabourWardAdmission.vue";
import LabourRecordForm from "./components/Doctor/LabourRecordForm.vue";
import LabourRecords from "./components/Doctor/LabourRecords.vue";
import LabourWardInstructions from "./components/Doctor/LabourWardInstructions.vue";
import LabourWardInstructionForm from "./components/Doctor/LabourWardInstructionForm.vue";
import DoctorProgressNoteForm from "./components/Doctor/DoctorProgressNoteForm.vue";
import DoctorProgressNotes from "./components/Doctor/DoctorProgressNotes.vue";
import TreatmentOrderSheet from "./components/Doctor/TreatmentOrderSheet.vue";
import TreatmentOrderForm from "./components/Doctor/TreatmentOrderForm.vue";
import RegularDrugs from "./components/Doctor/RegularDrugs.vue";
import AddDrugForm from "./components/Doctor/AddDrugForm.vue";
import HaematologyResults from "./components/Doctor/HaematologyResults.vue";
import HaematologyResultsForm from "./components/Doctor/HaematologyResultsForm.vue";
import BloodProductsAndIVfluids from "./components/Doctor/BloodProductsAndIVfluids.vue";
import BloodProductsAndIVfluidsForm from "./components/Doctor/BloodProductsAndIVfluidsForm.vue";
import ObstericalHistoryForm from "./components/Doctor/ObstericalHistoryForm.vue";
import ObstericalHistory from "./components/Doctor/ObstericalHistory.vue";
import ClinicalDischargeSummary from "./components/Doctor/ClinicalDischargeSummary.vue";
import ClinicalDischargeForm from "./components/Doctor/ClinicalDischargeForm.vue";
import OperationNotesForm from "./components/Doctor/OperationNotesForm.vue";
import OperationNotes from "./components/Doctor/OperationNotes.vue";
import DeliveryAndPostnatalForm from "./components/Doctor/DeliveryAndPostnatalForm.vue";
import DeliveryAndPostnatal from "./components/Doctor/DeliveryAndPostnatal.vue";
import DischargeDrugs from "./components/Doctor/DischargeDrugs.vue";
import AddDischargeDrug from "./components/Doctor/AddDischargeDrug.vue";
import InvestigationRequestSheet from "./components/Doctor/InvestigationRequestSheet.vue";
import InvestigationRequestForm from "./components/Doctor/InvestigationRequestForm.vue";

import LoginView from "./pages/LoginView.vue";
import PermissionError from "./pages/PermissionError";
import SearchView from "./pages/SearchView.vue";
import PatientsStatistics from "./pages/PatientsStatistics.vue";
import DeathStates from "./pages/DeathStates.vue";
import PatientView from "./pages/PatientsView.vue";
import HomeIndex from "./pages/HomeIndex.vue";
import UserSearch from "./pages/UserSearch.vue";
//view record pages
const houseOfficerFollowup = {
  path: "houseOfficerFollowup",
  component: HouseofficerFollowup,
};
const showBirthReport = { path: "ShowBirthReport", component: ShowBirthReport };
const showStatisicForm = {
  path: "ShowStatisicForm",
  component: ShowStatisicForm,
};
const healthInformation = {
  path: "healthInformation",
  component: ShowInformationAdded,
};
const showStatisticSupplement = {
  path: "ShowStatisticSupplement",
  component: ShowStatisticSupplement,
};
const viewNurseProgressNotes = {
  path: "viewprogress",
  component: ViewNotesProgress,
};

const viewobservations = {
  path: "viewobservations",
  component: ViewNotesObservation,
};

const viewinvestigations = {
  path: "viewinvestigations",
  component: ViewNotesInvestigations,
};

const viewivfluids = { path: "viewivfluids", component: ViewNotesIVFLUIDS };

const viewanticoagulation = {
  path: "viewanticoagulation",
  component: AnticoagulationChart,
};
const healthInformationAndResearch = {
  path: "healthInformationAndResearch",
  component: ShowInformationAdded,
};

const iVFLUIDS = { path: "I.V.FLUIDS", component: ViewNotesIVFLUIDS };
const anticoagulationChart = {
  path: "AnticoagulationChart",
  component: AnticoagulationChart,
};
const antenatalFollowUp = {
  path: "AntenatalFollowUp",
  component: AntenatalFollowUp,
};
const antenatalAdmissionSheet = {
  path: "AntenatalAdmissionSheet",
  component: AntenatalAdmissionSheet,
};

const antentalAdmissionFollowup = {
  path: "AntentalAdmissionFollowup",
  component: AntentalAdmissionFollowup,
};

const labourWardAdmission = {
  path: "LabourWardAdmission",
  component: LabourWardAdmission,
};
const labourRecords = { path: "LabourRecords", component: LabourRecords };
const labourWardInstructions = {
  path: "labourWardInstructions",
  component: LabourWardInstructions,
};
const doctorProgressNotes = {
  path: "doctorProgressNotes",
  component: DoctorProgressNotes,
};
const treatmentOrderSheet = {
  path: "treatmentOrderSheet",
  component: TreatmentOrderSheet,
};

const regularDrugs = {
  path: "regularDrugs",
  component: RegularDrugs,
};

const haematologyResults = {
  path: "haematologyResults",
  component: HaematologyResults,
};

const bloodproductsAndIVfluids = {
  path: "BloodproductsAndIVfluids",
  component: BloodProductsAndIVfluids,
};

const obstericalHistory = {
  path: "obstericalHistory",
  component: ObstericalHistory,
};
const clinicalDischargeSummary = {
  path: "clinicalDischargeSummary",
  component: ClinicalDischargeSummary,
};

const operationNotes = {
  path: "operationNotes",
  component: OperationNotes,
};

const deliveryAndPostnatal = {
  path: "deliveryAndPostnatal",
  component: DeliveryAndPostnatal,
};
const viewDischargeDrugs = {
  path: "viewDischargeDrugs",
  component: DischargeDrugs,
};
const investigationRequestSheet = {
  path: "investigationRequestSheet",
  component: InvestigationRequestSheet,
};

//creating the router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeIndex },
    { path: "/permissionError", component: PermissionError },
    { path: "/login", component: LoginView },
    {
      path: "/patientsearch",
      component: SearchView,
      meta: { requireAuth: true },
    },
    {
      path: "/statistics",
      component: PatientsStatistics,
      meta: { requireAuth: true },
    },
    {
      path: "/usersearch",
      component: UserSearch,
      meta: { requireAuth: true },
    },
    {
      path: "/patients/:startDate/:endDate",
      component: PatientView,
      meta: { requireAuth: true },
    },
    {
      path: "/deathStates/:startDate/:endDate",
      component: DeathStates,
      meta: { requireAuth: true },
    },
    {
      path: "/admin",
      component: AdminMain,
      meta: { requireAuth: true, isAdmin: true },
      children: [
        { path: "viewusers", component: ViewUsers },
        { path: "addusers", component: AddUser },
        { path: "dashboard", component: DashboardStatistics },
        { path: "users/:startDate/:endDate", component: usersByDate },
      ],
    },
    {
      path: "/generalDoctor/:patientId",
      meta: { requireAuth: true, isGeneralDoctor: true },
      component: GeneralDoctorMain,

      children: [
        { path: "addnewFollowup", component: HouseofficerForm },

        showBirthReport,
        showStatisicForm,
        healthInformation,
        showStatisticSupplement,
        viewNurseProgressNotes,
        viewobservations,
        viewinvestigations,
        viewivfluids,
        viewanticoagulation,
        healthInformationAndResearch,
        iVFLUIDS,
        anticoagulationChart,
        antenatalFollowUp,
        antenatalAdmissionSheet,
        antentalAdmissionFollowup,
        labourWardAdmission,
        labourRecords,
        labourWardInstructions,
        doctorProgressNotes,
        treatmentOrderSheet,
        regularDrugs,
        haematologyResults,
        bloodproductsAndIVfluids,
        obstericalHistory,
        clinicalDischargeSummary,
        operationNotes,
        deliveryAndPostnatal,
        viewDischargeDrugs,
        investigationRequestSheet,
        houseOfficerFollowup,
      ],
    },
    {
      path: "/statistic/:patientId",
      meta: { requireAuth: true, isStatistician: true },
      component: StatisticianMain,
      children: [
        { path: "statisticsupplemen", component: StatisticSupplement },
        { path: "birthreport", component: BirthReport },
        { path: "statisticform", component: StatistcForm },

        showBirthReport,
        showStatisicForm,
        healthInformation,
        showStatisticSupplement,
        viewNurseProgressNotes,
        viewobservations,
        viewinvestigations,
        viewivfluids,
        viewanticoagulation,
        healthInformationAndResearch,
        iVFLUIDS,
        anticoagulationChart,
        antenatalFollowUp,
        antenatalAdmissionSheet,
        antentalAdmissionFollowup,
        labourWardAdmission,
        labourRecords,
        labourWardInstructions,
        doctorProgressNotes,
        treatmentOrderSheet,
        regularDrugs,
        haematologyResults,
        bloodproductsAndIVfluids,
        obstericalHistory,
        clinicalDischargeSummary,
        operationNotes,
        deliveryAndPostnatal,
        viewDischargeDrugs,
        investigationRequestSheet,
        houseOfficerFollowup,
      ],
    },
    {
      path: "/nurse/:patientId",
      component: NurseMain,
      meta: { requireAuth: true, isNurse: true },
      children: [
        { path: "progressform", component: AddNewProgress },
        { path: "observationform", component: AddNewObservation },
        { path: "investigationsform", component: AddNewInvestigations },
        { path: "ivfluidsform", component: AddNewIVFLUIDS },

        showBirthReport,
        showStatisicForm,
        healthInformation,
        showStatisticSupplement,
        viewNurseProgressNotes,
        viewobservations,
        viewinvestigations,
        viewivfluids,
        viewanticoagulation,
        healthInformationAndResearch,
        iVFLUIDS,
        anticoagulationChart,
        antenatalFollowUp,
        antenatalAdmissionSheet,
        antentalAdmissionFollowup,
        labourWardAdmission,
        labourRecords,
        labourWardInstructions,
        doctorProgressNotes,
        treatmentOrderSheet,
        regularDrugs,
        haematologyResults,
        bloodproductsAndIVfluids,
        obstericalHistory,
        clinicalDischargeSummary,
        operationNotes,
        deliveryAndPostnatal,
        viewDischargeDrugs,
        investigationRequestSheet,
        houseOfficerFollowup,
      ],
    },

    {
      path: "/doctor/:patientId",
      component: DoctorMain,
      meta: { requireAuth: true, isDoctor: true },
      children: [
        showBirthReport,
        showStatisicForm,
        healthInformation,
        showStatisticSupplement,
        viewNurseProgressNotes,
        viewobservations,
        viewinvestigations,
        viewivfluids,
        viewanticoagulation,
        healthInformationAndResearch,
        iVFLUIDS,
        anticoagulationChart,
        antenatalFollowUp,
        antenatalAdmissionSheet,
        antentalAdmissionFollowup,
        labourWardAdmission,
        labourRecords,
        labourWardInstructions,
        doctorProgressNotes,
        treatmentOrderSheet,
        regularDrugs,
        haematologyResults,
        bloodproductsAndIVfluids,
        obstericalHistory,
        clinicalDischargeSummary,
        operationNotes,
        deliveryAndPostnatal,
        viewDischargeDrugs,
        investigationRequestSheet,
        houseOfficerFollowup,

        { path: "AddAntenatalFollowUp", component: AntenatalFollowUpForm },
        {
          path: "addAntentalAdmissionFollowup",
          component: AntentalAdmissionFollowupForm,
        },
        { path: "anticoagulationform", component: AddNewAnticoagulation },

        { path: "LabourWardAdmissionForm", component: LabourWardAdmissionForm },
        { path: "addInLabourRecord", component: LabourRecordForm },
        {
          path: "addTreatmentOrder",
          component: TreatmentOrderForm,
        },
        {
          path: "addnewProgressNote",
          component: DoctorProgressNoteForm,
        },
        {
          path: "addLabourWardInstruction",
          component: LabourWardInstructionForm,
        },
        {
          path: "addBloodproductsIVfluids",
          component: BloodProductsAndIVfluidsForm,
        },
        {
          path: "addDrug",
          component: AddDrugForm,
        },
        {
          path: "haematologyResultsForm",
          component: HaematologyResultsForm,
        },
        {
          path: "addObstericalHistory",
          component: ObstericalHistoryForm,
        },
        {
          path: "clinicalDischargeForm",
          component: ClinicalDischargeForm,
        },
        {
          path: "operationNotesForm",
          component: OperationNotesForm,
        },
        {
          path: "deliveryAndPostnatalForm",
          component: DeliveryAndPostnatalForm,
        },
        {
          path: "addDischargeDrug",
          component: AddDischargeDrug,
        },

        {
          path: "investigationRequest",
          component: InvestigationRequestForm,
        },
        { path: "AntenatalAdmissionForm", component: AntenatalAdmissionForm },
      ],
    },
  ],
});
router.beforeEach(function (to, from, next) {
  if (to.meta.requireAuth && !store.getters["auth/isAuthenticated"]) {
    next("/");
  } else if (to.meta.isDoctor && store.getters["auth/actor"] != "Vice Doctor") {
    console.log("dosen't have vice dctor permission");
    next("/permissionError");
  } else if (to.meta.isNurse && store.getters["auth/actor"] != "Nurse") {
    console.log("dosen't have nurse permission");
    next("/permissionError");
  } else if (
    to.meta.isStatistician &&
    store.getters["auth/actor"] != "Statistician"
  ) {
    next("/permissionError");
  } else if (
    to.meta.isGeneralDoctor &&
    store.getters["auth/actor"] != "General Doctor"
  ) {
    next("/permissionError");
  } else if (
    to.meta.isAdmin &&
    store.getters["auth/actor"] != "Admin" &&
    store.getters["auth/actor"] != "admin"
  ) {
    next("/permissionError");
  } else {
    // console.log(from);
    // console.log(to);
    next();
  }
});

export default router;
