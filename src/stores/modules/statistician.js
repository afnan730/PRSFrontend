import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      patients: [],
      HealthInformation: [],
      StatisticSupplement: [],
      BirthReport: [],
      StatisticForm: [],
      refresh: false,
    };
  },
  mutations: {
    setPatients(state, payload) {
      state.patients = payload;
    },
    setRefresh(state, payload) {
      state.refresh = payload;
    },
    push(state, payload) {
      state.patients.push(payload);
    },
    //setHealthInformation
    setHealthInformation(state, payload) {
      state.HealthInformation = payload;
    },
    //setStatisticSupplement
    setStatisticSupplement(state, payload) {
      state.StatisticSupplement = payload;
    },
    //setBirthReport
    setBirthReport(state, payload) {
      state.BirthReport = payload;
    },
    //setStatisticForm
    setStatisticForm(state, payload) {
      state.StatisticForm = payload;
    },
  },
  getters: {
    patients(state) {
      return state.patients;
    },
    refresh(state) {
      return state.refresh;
    },
    hasPatients(state) {
      return state.patients && state.patients.length > 0;
    },
    //HealthInformation
    HealthInformation(state) {
      return state.HealthInformation;
    },
    hasHealthInformation(state) {
      return state.HealthInformation && state.HealthInformation.length > 0;
    },
    //StatisticSupplement
    StatisticSupplement(state) {
      return state.StatisticSupplement;
    },
    hasStatisticSupplement(state) {
      return state.StatisticSupplement && state.StatisticSupplement.length > 0;
    },
    //BirthReport
    BirthReport(state) {
      return state.BirthReport;
    },
    hasBirthReport(state) {
      return state.BirthReport && state.BirthReport.length > 0;
    },
    //StatisticForm
    StatisticDetails(state) {
      return state.StatisticForm;
    },
    hasStatisticDetails(state) {
      return state.StatisticForm && state.StatisticForm.length > 0;
    },
  },
  actions: {
    async addPatient(context, patient) {
      try {
        const newPatient = patient;
        const response = await axios.post(
          "http://localhost:8000/api/post_front_desk_patients",
          newPatient
        );
        console.log(response);
        context.commit("push", newPatient);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e);
        throw error;
      }
    },
    async fetchPatients(context) {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_all_front_desk_patients/"
        );
        const fetchedPatients = response.data;
        console.log(fetchedPatients);
        const patients = [];
        var counter = 0;
        for (const object of fetchedPatients) {
          counter++;
          const patient = {
            ...object,
            row: counter,
          };
          patients.push(patient);
        }
        // console.log(users);
        context.commit("setPatients", patients);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    async search(context, payload) {
      try {
        const patient_id_or_name = payload;
        const response = await axios.get(
          `http://localhost:8000/api/search_patients/${patient_id_or_name}`
        );

        const searchResult = response.data;
        // console.log(searchResult.length);
        const patients = [];
        var counter = 0;
        for (const object of searchResult) {
          counter++;
          const patient = {
            ...object,
            row: counter,
          };
          patients.push(patient);
        }
        // console.log(users);
        context.commit("setPatients", patients);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e);
        throw error;
      }
    },
    //fetchInformationHealth
    async fetchHealthInformation(context, patienID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_front_desk_patients/${patienID}`
        );
        const fetchHealthInformation = response.data;
        // console.log(fetchHealthInformation);
        const HealthInformation = [];
        for (const object of fetchHealthInformation) {
          HealthInformation.push(object);
        }
        context.commit("setHealthInformation", HealthInformation);
      } catch (e) {
        const error = new Error("Something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    async addStatisticSupplement(context, statisticSupplement) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_front_desk_statistics_supplement",
          statisticSupplement
        );
        console.log(response);
        context.commit("setStatisticSupplement", statisticSupplement);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e);
        throw error;
      }
    },
    async fetchStatisticSupplement(context, patienID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_front_desk_statistics_supplement/${patienID}`
        );
        const fetchStatisticSupplement = response.data;
        const StatisticSupplement = [];
        for (const object of fetchStatisticSupplement) {
          StatisticSupplement.push(object);
        }
        context.commit("setStatisticSupplement", StatisticSupplement);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    async addBirthReport(context, birthReport) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_front_desk_birth_report_data",
          birthReport
        );
        console.log(response);
        context.commit("setBirthReport", birthReport);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e);
        throw error;
      }
    },
    async fetchBirthReport(context, patienID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_front_desk_birth_report_data/${patienID}`
        );
        const fetchBirthReport = response.data;
        const BirthReport = [];
        for (const object of fetchBirthReport) {
          BirthReport.push(object);
        }
        context.commit("setBirthReport", BirthReport);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    async addStatisticDetails(context, statisticDetails) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_front_desk_statistic_form",
          statisticDetails
        );
        console.log(response);
        context.commit("setStatisticForm", statisticDetails);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e);
        throw error;
      }
    },
    async fetchStatisticDetails(context, patienID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_front_desk_statistic_form/${patienID}`
        );
        const fetchStatisticForm = response.data;
        const StatisticForm = [];
        for (const object of fetchStatisticForm) {
          StatisticForm.push(object);
        }
        context.commit("setStatisticForm", StatisticForm);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
  },
};
