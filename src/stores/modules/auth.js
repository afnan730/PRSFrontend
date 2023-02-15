import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      user: null,
      actor: null,
      token: null,
    };
  },
  getters: {
    user(state) {
      return state.user;
    },
    userId(state) {
      return state.userId;
    },
    actor(state) {
      return state.actor;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      state.userId = payload.userID;
      state.actor = payload.actor;
      state.token = payload.token;
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_login",
          {
            national_id: payload.userId,
            password: payload.password,
          }
        );
        console.log(response.data);
        const user = response.data.user;
        const actor = user.designation;
        const userID = user.national_id;
        const token = response.data.token;
        //console.log(token);
        //console.log(user);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userID);
        localStorage.setItem("user", user);
        localStorage.setItem("actor", actor);
        context.commit("setUser", {
          token: token,
          user: user,
          userId: userID,
          actor: actor,
        });
      } catch (e) {
        var error = e.message
          ? new Error(e.message + " !! Try again later")
          : new Error("Something went wrong !! Try again later");
        if (e.message === "Request failed with status code 403") {
          error = new Error("Please enter valid userID and password");
        }
        throw error;
      }
    },
    tryLogin(context) {
      const user = localStorage.getItem("user");
      const actor = localStorage.getItem("actor");
      const userID = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      if (user && actor && userID && token) {
        context.commit("setUser", {
          token: token,
          user: user,
          userId: userID,
          actor: actor,
        });
      }
    },

    logout(context) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("actor");
      context.commit("setUser", {
        token: null,
        user: null,
        userId: null,
        actor: null,
      });
      //console.log(context.state);
      return;
    },
  },
};
