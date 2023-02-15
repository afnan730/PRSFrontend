import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      NurseProgress: [],
      NurseObservation: [],
      NurseIVFluids: [],
      NurseInvestgation: [],
    };
  },
  mutations: {
    //NurseProgress
    //assign users array in local state to the fetched users from database
    setNurseProgress(state, payload) {
      state.NurseProgress = payload;
    },
    pushNurseProgressNote(state, payload) {
      state.NurseProgress.push(payload);
    },

    //NurseObservation
    setNurseObservation(state, payload) {
      state.NurseObservation = payload;
    },
    pushNurseObservation(state, payload) {
      state.NurseObservation.push(payload);
    },
    //NurseIVFluids
    setNurseIVFluids(state, payload) {
      state.NurseIVFluids = payload;
    },

    pushIVFluid(state, payload) {
      state.NurseIVFluids.push(payload);
    },
    //NurseInvestgation
    setNurseInvestgation(state, payload) {
      state.NurseInvestgation = payload;
    },
    pushInvestigation(state, payload) {
      state.NurseInvestgation.push(payload);
    },
  },
  getters: {
    //NurseProgress
    NurseProgress(state) {
      return state.NurseProgress;
    },
    hasNurseProgress(state) {
      return state.NurseProgress && state.NurseProgress.length > 0;
    },
    //NurseObservation
    NurseObservation(state) {
      return state.NurseObservation;
    },
    hasNurseObservation(state) {
      return state.NurseObservation && state.NurseObservation.length > 0;
    },
    //NurseIVFluids
    NurseIVFluids(state) {
      return state.NurseIVFluids;
    },
    hasNurseIVFluids(state) {
      return state.NurseIVFluids && state.NurseIVFluids.length > 0;
    },
    //NurseInvestgation
    NurseInvestgation(state) {
      return state.NurseInvestgation;
    },
    hasNurseInvestgation(state) {
      return state.NurseInvestgation && state.NurseInvestgation.length > 0;
    },
  },
  actions: {
    async addNurseProgress(context, note) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_nurse_progress_notes",
          note
        );
        console.log(response);
        context.commit("pushNurseProgressNote", note);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e);
        throw error;
      }
    },
    //fetchNurseProgress
    async fetchNurseProgress(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_nurse_progress_notes/${patientID}`
        );
        const fetchedNurseProgress = response.data;
        // console.log(fetchedUsers.length);
        const NurseProgress = [];
        for (const object of fetchedNurseProgress) {
          NurseProgress.push(object);
        }

        context.commit("setNurseProgress", NurseProgress);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },

    async addObservation(context, observation) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_nurse_observation_form",
          observation
        );
        console.log(response);
        context.commit("pushNurseObservation", observation);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e);
        throw error;
      }
    },
    //fetchNurseObservation
    async fetchNurseObservation(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_nurse_observation_form/${patientID}`
        );
        const fetchedNurseObservation = response.data;
        // console.log(fetchedUsers.length);
        const NurseObservation = [];
        for (const object of fetchedNurseObservation) {
          NurseObservation.push(object);
        }

        context.commit("setNurseObservation", NurseObservation);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },

    async addIVFluid(context, IVFluid) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_nurse_and_vice_doctor_i_v_fluids_form",
          IVFluid
        );
        console.log(response);
        context.commit("pushIVFluid", IVFluid);
      } catch (e) {
        const error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("something went wrong on server !! Try again later");
        console.log(e);
        throw error;
      }
    },
    //fetchNurseIVFluids
    async fetchNurseIVFluids(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_nurse_and_vice_doctor_i_v_fluids_form/${patientID}`
        );
        const fetchedNurseIVFluids = response.data;
        console.log(response.data);
        const NurseIVFluids = [];
        var counter = 0;
        for (const object of fetchedNurseIVFluids) {
          counter++;

          const Nurse_IVFluids = {
            id: counter,
            user_id: object.user_id,
            date: object.date.split(" "),
            volume_and_concentration: object.volume_and_concentration,
            rate_ml_br: object.rate_ml_br,
            additives_amount: object.additives_amount,
            discontinued_on: object.discontinued_on,
            discontinued_by: object.discontinued_by,
          };
          NurseIVFluids.push(Nurse_IVFluids);
        }

        context.commit("setNurseIVFluids", NurseIVFluids);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
    //fetchNurseInvestgation
    async fetchNurseInvestgation(context, patientID) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_nurse_investigation_form/${patientID}`
        );
        const fetchedNurseInvestgation = response.data;
        // console.log(fetchedUsers.length);
        const NurseInvestgation = [];
        for (const object of fetchedNurseInvestgation) {
          NurseInvestgation.push(object);
        }

        context.commit("setNurseInvestgation", NurseInvestgation);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(error);
        throw error;
      }
    },
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
  },
};
