import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      AntenatalFollowUp: [],
      AntenatalAdmissionSheet: [],
      AntenatalAdmissionFollowUpSheet: [],
      BloodProductsAndIVFluids: [],
      ClinincalDischargeSummary: [],
      DeliveryAndPostnatal: [],
      DischargeDrugs: [],
      DoctorProgressNotes: [],
      HaematologyResults: [],
      InvestigationRequest: [],
      VaginalExaminationFindings: [],
      LabourWardAdmission: [],
      LabourWardInstructions: [],
      ObstericalHistory: [],
      OperationNotes: [],
      TreatmentOrderSheet: [],
      AnticogulationChart: [],
      RegularDrugs: [],
    };
  },
  mutations: {
    //
    setAntenatalFollowUp(state, payload) {
      state.AntenatalFollowUp = payload;
    },
    pushAntenatalFollowUp(state, payload) {
      state.AntenatalFollowUp.push(payload);
    },
    setLabourRecords(state, payload) {
      state.LabourRecords = payload;
    },
    //
    setAntenatalAdmissionSheet(state, payload) {
      state.AntenatalAdmissionSheet = payload;
    },
    //
    setAntenatalAdmissionFollowUpSheet(state, payload) {
      state.AntenatalAdmissionFollowUpSheet = payload;
    },
    pushAntenatalAdmissionFollowUp(state, payload) {
      state.AntenatalAdmissionFollowUpSheet.push(payload);
    },
    //
    setAnticogulationChart(state, payload) {
      state.AnticogulationChart = payload;
    },

    pushAnticogulationNote(state, payload) {
      state.AnticogulationChart.push(payload);
    },
    //
    setBloodProductsAndIVFluids(state, payload) {
      state.BloodProductsAndIVFluids = payload;
    },
    pushBloodproductsAndIVfluids(state, payload) {
      state.BloodProductsAndIVFluids.push(payload);
    },
    //
    setClinincalDischargeSummary(state, payload) {
      state.ClinincalDischargeSummary = payload;
    },
    //
    setDeliveryAndPostnatal(state, payload) {
      state.DeliveryAndPostnatal = payload;
    },
    //
    setDischargeDrugs(state, payload) {
      state.DischargeDrugs = payload;
    },
    pushDischargeDrugs(state, payload) {
      state.DischargeDrugs.push(payload);
    },
    //
    pushDoctorProgressNotes(state, payload) {
      state.DoctorProgressNotes.push(payload);
    },
    setDoctorProgressNotes(state, payload) {
      state.DoctorProgressNotes = payload;
    },
    //
    setHaematologyResults(state, payload) {
      state.HaematologyResults = payload;
    },
    pushHaematologyResults(state, payload) {
      state.HaematologyResults.push(payload);
    },
    //
    setInvestigationRequest(state, payload) {
      state.InvestigationRequest = payload;
    },
    pushInvestigationRequest(state, payload) {
      state.InvestigationRequest.push(payload);
    },
    //
    setVaginalExaminationFindings(state, payload) {
      state.VaginalExaminationFindings = payload;
    },
    pushVaginalExaminationFindings(state, payload) {
      state.VaginalExaminationFindings.push(payload);
    },
    //
    setLabourWardAdmission(state, payload) {
      state.LabourWardAdmission = payload;
    },
    //
    setLabourWardInstructions(state, payload) {
      state.LabourWardInstructions = payload;
    },
    pushLabourWardInstruction(state, payload) {
      state.LabourWardInstructions.push(payload);
    },
    //
    setObstericalHistory(state, payload) {
      state.ObstericalHistory = payload;
    },
    //
    setOperationNotes(state, payload) {
      state.OperationNotes = payload;
    },
    //
    setRegularDrugs(state, payload) {
      state.RegularDrugs = payload;
    },
    pushRegulaDrug(state, payload) {
      state.RegularDrugs.push(payload);
    },
    //
    setTreatmentOrderSheet(state, payload) {
      state.TreatmentOrderSheet = payload;
    },
    pushTreatmentOrder(state, payload) {
      state.TreatmentOrderSheet.push(payload);
    },
  },
  getters: {
    //
    AntenatalFollowUp(state) {
      return state.AntenatalFollowUp;
    },
    hasAntenatalFollowUp(state) {
      return state.AntenatalFollowUp && state.AntenatalFollowUp.length > 0;
    },
    LabourRecords(state) {
      return state.LabourRecords;
    },
    hasLabourRecords(state) {
      return state.LabourRecords && state.LabourRecords.length > 0;
    },
    //
    AntenatalAdmissionSheet(state) {
      return state.AntenatalAdmissionSheet;
    },
    hasAntenatalAdmissionSheet(state) {
      return (
        state.AntenatalAdmissionSheet &&
        state.AntenatalAdmissionSheet.length > 0
      );
    },
    //
    AntenatalAdmissionFollowUpSheet(state) {
      return state.AntenatalAdmissionFollowUpSheet;
    },
    hasAntenatalAdmissionFollowUpSheet(state) {
      return (
        state.AntenatalAdmissionFollowUpSheet &&
        state.AntenatalAdmissionFollowUpSheet.length > 0
      );
    },
    //
    AnticogulationChart(state) {
      return state.AnticogulationChart;
    },
    hasAnticogulationChart(state) {
      return state.AnticogulationChart && state.AnticogulationChart.length > 0;
    },
    //
    BloodProductsAndIVFluids(state) {
      return state.BloodProductsAndIVFluids;
    },
    hasBloodProductsAndIVFluids(state) {
      return (
        state.BloodProductsAndIVFluids &&
        state.BloodProductsAndIVFluids.length > 0
      );
    },
    //
    ClinincalDischargeSummary(state) {
      return state.ClinincalDischargeSummary;
    },
    hasClinincalDischargeSummary(state) {
      return (
        state.ClinincalDischargeSummary &&
        state.ClinincalDischargeSummary.length > 0
      );
    },
    //
    DeliveryAndPostnatal(state) {
      return state.DeliveryAndPostnatal;
    },
    hasDeliveryAndPostnatal(state) {
      return (
        state.DeliveryAndPostnatal && state.DeliveryAndPostnatal.length > 0
      );
    },
    //
    DischargeDrugs(state) {
      return state.DischargeDrugs;
    },
    hasDischargeDrugs(state) {
      return state.DischargeDrugs && state.DischargeDrugs.length > 0;
    },
    //
    DoctorProgressNotes(state) {
      return state.DoctorProgressNotes;
    },
    hasDoctorProgressNotes(state) {
      return state.DoctorProgressNotes && state.DoctorProgressNotes.length > 0;
    },
    //
    HaematologyResults(state) {
      return state.HaematologyResults;
    },
    hasHaematologyResults(state) {
      return state.HaematologyResults && state.HaematologyResults.length > 0;
    },
    //
    InvestigationRequest(state) {
      return state.InvestigationRequest;
    },
    hasInvestigationRequest(state) {
      return (
        state.InvestigationRequest && state.InvestigationRequest.length > 0
      );
    },
    //
    VaginalExaminationFindings(state) {
      return state.VaginalExaminationFindings;
    },
    hasVaginalExaminationFindings(state) {
      return (
        state.VaginalExaminationFindings &&
        state.VaginalExaminationFindings.length > 0
      );
    },
    //
    LabourWardAdmission(state) {
      return state.LabourWardAdmission;
    },
    hasLabourWardAdmission(state) {
      return state.LabourWardAdmission && state.LabourWardAdmission.length > 0;
    },
    //
    LabourWardInstructions(state) {
      return state.LabourWardInstructions;
    },
    hasLabourWardInstructions(state) {
      return (
        state.LabourWardInstructions && state.LabourWardInstructions.length > 0
      );
    },
    //
    ObstericalHistory(state) {
      return state.ObstericalHistory;
    },
    hasObstericalHistory(state) {
      return state.ObstericalHistory && state.ObstericalHistory.length > 0;
    },
    //
    OperationNotes(state) {
      return state.OperationNotes;
    },
    hasOperationNotes(state) {
      return state.OperationNotes && state.OperationNotes.length > 0;
    },
    //
    RegularDrugs(state) {
      return state.RegularDrugs;
    },
    hasRegularDrugs(state) {
      return state.RegularDrugs && state.RegularDrugs.length > 0;
    },
    //
    TreatmentOrderSheet(state) {
      return state.TreatmentOrderSheet;
    },
    hasTreatmentOrderSheet(state) {
      return state.TreatmentOrderSheet && state.TreatmentOrderSheet.length > 0;
    },
  },
  actions: {
    //AntenatalFollowUp

    async fetchAntenatalFollowUp(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_antenatal_follow_up/${patientID}`
        );
        const fetchedAntenatalFollowUp = response.data;
        // console.log(fetchedUsers.length);
        const AntenatalFollowUp = [];

        for (const object of fetchedAntenatalFollowUp) {
          AntenatalFollowUp.push(object);
        }
        context.commit("setAntenatalFollowUp", AntenatalFollowUp);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //AntenatalAdmissionSheet

    async fetchAntenatalAdmissionSheet(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_antenatal_admission_sheet/${patientID}`
        );
        const fetchedAntenatalAdmissionSheet = response.data;
        // console.log(fetchedUsers.length);
        const AntenatalAdmissionSheet = [];

        for (const object of fetchedAntenatalAdmissionSheet) {
          AntenatalAdmissionSheet.push(object);
        }
        context.commit("setAntenatalAdmissionSheet", AntenatalAdmissionSheet);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //AntenatalAdmissionFollowUpSheet

    async fetchAntenatalAdmissionFollowUpSheet(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_antenatal_admission_follow_up_sheet/${patientID}`
        );
        const fetchedAntenatalAdmissionFollowUpSheet = response.data;
        // console.log(fetchedUsers.length);
        const AntenatalAdmissionFollowUpSheet = [];

        for (const object of fetchedAntenatalAdmissionFollowUpSheet) {
          AntenatalAdmissionFollowUpSheet.push(object);
        }
        context.commit(
          "setAntenatalAdmissionFollowUpSheet",
          AntenatalAdmissionFollowUpSheet
        );
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    async fetchLabourRecords(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_labour_record_form/${patientID}`
        );
        const fetchedLabourRecords = response.data;
        // console.log(fetchedUsers.length);
        const LabourRecords = [];

        for (const object of fetchedLabourRecords) {
          LabourRecords.push(object);
        }
        context.commit("setLabourRecords", LabourRecords);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //AnticogulationChart
    // async addAnticogulationNote(context, anticogulationNote) {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:8000/api/post_vice_doctor_anticoagulation_chart",
    //       anticogulationNote
    //     );
    //     console.log(response);
    //     context.commit("pushAnticogulationNote", anticogulationNote);
    //   } catch (e) {
    //     const error = new Error("something went wrong");
    //     console.log(e);
    //     throw error;
    //   }
    // },
    async fetchAnticogulationChart(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_anticoagulation_chart/${patientID}`
        );
        const fetchedAnticogulationChart = response.data;
        // console.log(fetchedUsers.length);
        const AnticogulationChart = [];

        for (const object of fetchedAnticogulationChart) {
          const dateTime = object.date.split(" ");
          const newObject = {
            ...object,
            editedDate: dateTime[0],
            editedTime: dateTime[1],
          };
          AnticogulationChart.push(newObject);
          console.log(newObject);
        }
        context.commit("setAnticogulationChart", AnticogulationChart);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //BloodProductsAndIVFluids
    async fetchBloodProductsAndIVFluids(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_blood_products_and_i_v_fluids/${patientID}`
        );
        const fetchedBloodProductsAndIVFluids = response.data;
        // console.log(fetchedUsers.length);
        const BloodProductsAndIVFluids = [];

        for (const object of fetchedBloodProductsAndIVFluids) {
          BloodProductsAndIVFluids.push(object);
        }
        context.commit("setBloodProductsAndIVFluids", BloodProductsAndIVFluids);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //ClinincalDischargeSummary
    async fetchClinincalDischargeSummary(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_clinical_discharge_summary/${patientID}`
        );
        const fetchedClinincalDischargeSummary = response.data;
        // console.log(fetchedUsers.length);
        const ClinincalDischargeSummary = [];

        for (const object of fetchedClinincalDischargeSummary) {
          ClinincalDischargeSummary.push(object);
        }
        context.commit(
          "setClinincalDischargeSummary",
          ClinincalDischargeSummary
        );
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //DeliveryAndPostnatal
    async fetchDeliveryAndPostnatal(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_delivery_and_postnatal/${patientID}`
        );
        const fetchedDeliveryAndPostnatal = response.data;
        // console.log(fetchedUsers.length);
        const DeliveryAndPostnatal = [];

        for (const object of fetchedDeliveryAndPostnatal) {
          DeliveryAndPostnatal.push(object);
        }
        context.commit("setDeliveryAndPostnatal", DeliveryAndPostnatal);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //
    async addDischargeDrugs(context, payload) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_vice_doctor_discharge_drugs",
          payload
        );
        console.log(response);
        context.commit("pushDischargeDrugs", payload);
      } catch (e) {
        const error = new Error(
          "something went wrong on server !! Try again later"
        );
        console.log(e);
        throw error;
      }
    },
    async fetchDischargeDrugs(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_discharge_drugs/${patientID}`
        );
        const fetchedDischargeDrugs = response.data;
        // console.log(fetchedUsers.length);
        const DischargeDrugs = [];

        for (const object of fetchedDischargeDrugs) {
          DischargeDrugs.push(object);
        }
        context.commit("setDischargeDrugs", DischargeDrugs);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //
    async fetchDoctorProgressNotes(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_dr_progress_notes/${patientID}`
        );
        const fetchedDoctorProgressNotes = response.data;
        // console.log(fetchedUsers.length);
        const DoctorProgressNotes = [];

        for (const object of fetchedDoctorProgressNotes) {
          DoctorProgressNotes.push(object);
        }
        context.commit("setDoctorProgressNotes", DoctorProgressNotes);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //
    async fetchHaematologyResults(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_haematology_results/${patientID}`
        );
        const fetchedHaematologyResults = response.data;
        // console.log(fetchedUsers.length);
        const HaematologyResults = [];

        for (const object of fetchedHaematologyResults) {
          HaematologyResults.push(object);
        }
        context.commit("setHaematologyResults", HaematologyResults);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //
    async fetchInvestigationRequest(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_investigation_request_form/${patientID}`
        );
        const fetchedInvestigationRequest = response.data;
        // console.log(fetchedUsers.length);
        const InvestigationRequest = [];

        for (const object of fetchedInvestigationRequest) {
          InvestigationRequest.push(object);
        }
        context.commit("setInvestigationRequest", InvestigationRequest);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },

    async fetchLabourWardAdmission(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_labour_ward_admission_form/${patientID}`
        );
        const fetchedLabourWardAdmission = response.data;
        // console.log(fetchedUsers.length);
        const LabourWardAdmission = [];

        for (const object of fetchedLabourWardAdmission) {
          LabourWardAdmission.push({
            ...object,
            edd: object.edd.split("T"),
          });
        }
        context.commit("setLabourWardAdmission", LabourWardAdmission);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //LabourWardInstructions
    async fetchLabourWardInstructions(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_labour_ward_instructions/${patientID}`
        );
        const fetchedLabourWardInstructions = response.data;
        // console.log(fetchedUsers.length);
        const LabourWardInstructions = [];

        for (const object of fetchedLabourWardInstructions) {
          LabourWardInstructions.push(object);
        }
        context.commit("setLabourWardInstructions", LabourWardInstructions);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //
    async fetchObstericalHistory(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_obstetrical_history/${patientID}`
        );
        const fetchedObstericalHistory = response.data;
        // console.log(fetchedUsers.length);
        const ObstericalHistory = [];

        for (const object of fetchedObstericalHistory) {
          ObstericalHistory.push({
            ...object,
            edd: object.edd.split("T"),
          });
        }
        context.commit("setObstericalHistory", ObstericalHistory);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //
    async fetchOperationNotes(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_operation_note/${patientID}`
        );
        const fetchedOperationNotes = response.data;
        // console.log(fetchedUsers.length);
        const OperationNotes = [];

        for (const object of fetchedOperationNotes) {
          OperationNotes.push(object);
        }
        context.commit("setOperationNotes", OperationNotes);
      } catch (e) {
        const error = new Error(
          "something went wrong on server !! Try again later "
        );
        console.log(error);
        throw error;
      }
    },
    //add data ...............
    async addData(context, payload) {
      try {
        const response = await axios.post(payload.path, payload.value);
        console.log(response);
        context.commit(payload.mutation, payload.value);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e.message);
        throw error;
      }
    },
    //RegularDrugs
    async fetchRegularDrugs(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_regular_drugs/${patientID}`
        );
        const fetchedRegularDrugs = response.data;
        // console.log(fetchedUsers.length);
        const RegularDrugs = [];

        for (const object of fetchedRegularDrugs) {
          RegularDrugs.push(object);
        }
        context.commit("setRegularDrugs", RegularDrugs);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //TreatmentOrder

    async fetchTreatmentOrderSheet(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_vice_doctor_treatment_order_sheet/${patientID}`
        );
        const fetchedTreatmentOrderSheet = response.data;
        // console.log(fetchedUsers.length);
        const TreatmentOrderSheet = [];

        for (const object of fetchedTreatmentOrderSheet) {
          TreatmentOrderSheet.push(object);
        }
        context.commit("setTreatmentOrderSheet", TreatmentOrderSheet);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
  },
};
