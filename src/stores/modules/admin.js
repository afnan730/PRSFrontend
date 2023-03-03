import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      users: [], //list stores users objects
      id: "", //store id of selected user
      selectedUser: null, // stores a particular user data once a user is selected from the table
      statisticData: null,
      femaleCount: 0,
      maleCount: 0,
      usersCount: 0,
    };
  },
  //mutations here set the variables in the state above
  mutations: {
    //assign users array in local state to the fetched users from database
    setUsers(state, payload) {
      state.users = payload;
    },
    setUsersCount(state, payload) {
      state.usersCount = payload;
    },
    //when adding new user we should push it to array of users in local state
    push(state, payload) {
      state.users.push(payload);
    },
    //set selected user in state
    setSelectedUser(state, payload) {
      state.selectedUser = payload;
    },
    setStatistics(state, payload) {
      state.statisticData = payload;
      // console.log(state.statisticData);
    },
    setMaleCount(state, payload) {
      state.maleCount = payload;
    },
    setFemaleCount(state, payload) {
      state.femaleCount = payload;
    },
  },
  //use getters to return the values stored in state object
  getters: {
    //return list of users
    users(state) {
      return state.users;
    },
    getUsersCount(state) {
      return state.usersCount;
    },
    //return boolean value whether we have users in database or not
    hasUsers(state) {
      return state.users && state.users.length > 0;
    },
    //return selected user
    selectedUser(state) {
      return state.selectedUser;
    },
    usersCount(state) {
      return state.totalUsers;
    },
    statistics(state) {
      return state.statisticData;
    },
    maleCount(state) {
      return state.maleCount;
    },
    femaleCount(state) {
      return state.femaleCount;
    },
  },
  actions: {
    //fetch all users from database
    async fetchUsers(context) {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/get_all_users/"
        );
        const fetchedUsers = response.data;
        console.log(fetchedUsers.length);
        const users = [];
        var counter = 0;
        for (const object of fetchedUsers) {
          counter++;
          const user = {
            ...object,
            row: counter,
          };
          users.push(user);
        }
        // console.log(users);
        context.commit("setUsers", users);
      } catch (e) {
        const error = new Error("something went wrong !! Try again later ");
        console.log(e);
        throw error;
      }
    },
    // the logic of adding a new user to system flows here ,
    //recieves the user object
    async addUser(context, payload) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/post_users",
          payload
        );
        console.log(response);
        context.commit("push", payload);
      } catch (e) {
        var error = new Error(
          "something went wrong on server !! Try again later "
        );
        if (e.message === "Request failed with status code 500") {
          error = new Error("Seem likes this ID is already in use.");
        }
        console.log(e);
        throw error;
      }
    },
    async countUsersByDate(context, payload) {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/user_start_end_date_count/`,
          payload
        );
        const count = response.data;
        console.log(count);
        context.commit("setUsersCount", count);
      } catch (e) {
        const error = new Error("something went wrong");
        console.log(e);
        throw error;
      }
    },
    // the control logic of seraching for user name or id in payload
    async search(context, payload) {
      try {
        const national_id_or_name = payload;
        const response = await axios.get(
          `http://localhost:8000/api/search_users/${national_id_or_name}`
        );

        const searchResult = response.data;
        // console.log(searchResult.length);
        const users = [];
        var counter = 0;
        for (const object of searchResult) {
          counter++;
          const user = {
            ...object,
            row: counter,
          };
          users.push(user);
        }
        // console.log(users);
        context.commit("setUsers", users);
      } catch (e) {
        const error = new Error("something went wrong");
        console.log(e);
        throw error;
      }
    },
    async searchById(context, payload) {
      try {
        const national_id = payload;
        const response = await axios.get(
          `http://localhost:8000/api/get_users/${national_id}`
        );

        const searchResult = response.data;
        // console.log(searchResult.length);
        const users = [];
        var counter = 0;
        for (const object of searchResult) {
          counter++;
          const user = {
            ...object,
            row: counter,
          };
          users.push(user);
        }
        // console.log(users);
        context.commit("setUsers", users);
      } catch (e) {
        const error = new Error("something went wrong");
        console.log(e);
        throw error;
      }
    },
    // the control logic of deleting user recieve the user id to delete user
    async delete(_, userId) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/delete_user/${userId}`
        );
        console.log(response);
      } catch (e) {
        var error = e.message
          ? new Error(e.message + " !! ")
          : "Something went wrong !! Try again later";
        if (e.message === "Request failed with status code 500") {
          error = new Error(
            "This user doesn't exist !! please click close button to reload users "
          );
        }
        console.log(e);
        throw error;
      }
    },
    // this function contoains the control logic of viewing user
    // recieve the user id
    // return user id
    async viewUser(context, userId) {
      //console.log(userId);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/get_users/${userId}`
        );
        //console.log(response.data);

        context.commit("setSelectedUser", response.data);
        //console.log(context.getters);
      } catch (e) {
        const error = new Error(
          "Couldn't fetch usesr ! something went wrong ..."
        );
        console.log(error);
        throw error;
      }
    },
    //this function recieves user id to update his data
    async updateUser(context, user) {
      console.log(user);
      try {
        const response = await axios.put(
          "http://localhost:8000/api/update_user/",
          user
        );
        console.log(response);
        context.commit("push", user);
      } catch (e) {
        var error = e.message
          ? new Error(e.message + " !! Try again later")
          : "Something went wrong !! Try again later";
        if (e.message === "Request failed with status code 500") {
          error = new Error(
            "This user doesn't exist !! please reload the page"
          );
        }
        console.log(e);
        throw error;
      }
    },
    // async getUsersCount(context) {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:8000/api/all_user_count/`
    //     );
    //     console.log(response.data);
    //     context.commit("setTotalUsers", response.data);
    //     //console.log(context.getters);
    //   } catch (e) {
    //     const error = new Error(
    //       "Couldn't fetch usesr ! something went wrong ..."
    //     );
    //     console.log(error);
    //     throw error;
    //   }
    // },
    async getStatistics(context) {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/all_counts/`
        );

        const data = response.data;
        //console.log(data.Male_count);
        context.commit("setStatistics", data);
        context.commit("setMaleCount", data.Male_count);
        context.commit("setFemaleCount", data.Female_count);
        //console.log("gg" + context.getters.femaleCount);
        localStorage.setItem("statistic", data);
        localStorage.setItem("female", context.getters.femaleCount);
        localStorage.setItem("male", context.getters.maleCount);
        // console.log(context.state.statisticData);
      } catch (e) {
        const error = new Error(" something went wrong ...");
        console.log(error);
        throw error;
      }
    },
  },
};
