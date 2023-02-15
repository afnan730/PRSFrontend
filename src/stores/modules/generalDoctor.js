import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      GD_patient_follow_up_sheet: [],
    };
  },
  mutations: {
    //assign users array in local state to the fetched users from database
    setGD_patient_follow_up_sheet(state, payload) {
      state.GD_patient_follow_up_sheet = payload;
    },
    pushGD_patient_follow_up_sheet(state, payload) {
      state.GD_patient_follow_up_sheet.push(payload);
    },
  },
  getters: {
    GD_patient_follow_up_sheet(state) {
      return state.GD_patient_follow_up_sheet;
    },
    hasGD_patient_follow_up_sheet(state) {
      return (
        state.GD_patient_follow_up_sheet &&
        state.GD_patient_follow_up_sheet.length > 0
      );
    },
  },
  actions: {
    async addPatient_follow_up(context, followup) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_general_doctor_house_officer_in_patient_follow_up_sheet",
          followup
        );
        console.log(response);
        context.commit("pushGD_patient_follow_up_sheet", followup);
      } catch (e) {
        const error = new Error(
          "something went wrong on server !! Try again later"
        );
        console.log(e);
        throw error;
      }
    },
    async fetchGD_patient_follow_up_sheet(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_general_doctor_house_officer_in_patient_follow_up_sheet/${patientID}`
        );
        const fetchedGD_patient_follow_up_sheet = response.data;
        // console.log(fetchedUsers.length);
        const GD_patient_follow_up_sheet = [];

        for (const object of fetchedGD_patient_follow_up_sheet) {
          GD_patient_follow_up_sheet.push(object);
        }
        context.commit(
          "setGD_patient_follow_up_sheet",
          GD_patient_follow_up_sheet
        );
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
  },
};
