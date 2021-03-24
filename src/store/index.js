import { createStore } from "vuex";

export default createStore({
  state: {
    isUserLoggedIn: false,
    translatorResults: [],
    loggedInUser: {}
  },
  mutations: {
    SET_USER_LOGGEDIN_FLAG(state, {userLoggedIn}) {
      state.isUserLoggedIn = userLoggedIn;
    },
    SET_TRANSLATOR_RESULTS(state, data) {
      state.translatorResults = data.translatorResults;
  
    },
    SET_LOGGED_IN_USER(state, data) {
      state.loggedInUser = data.loggedInUser;
    },
    DELETE_LOGGED_IN_USER(state, data) {
      state.loggedInUser = {}
    }

  },
  actions: {
    userLoggedInFlag({ commit }, data) {
      commit("SET_USER_LOGGEDIN_FLAG", data);
    },
    translatorResults({commit}, data){
       commit("SET_TRANSLATOR_RESULTS", data);
    },
    userLoggedIn({ commit }, data) {
      commit("SET_LOGGED_IN_USER", data);
    },
    deleteLoggedIn({commit}, data) {
      commit("DELETE_LOGGED_IN_USER", data)
    }
  },
  modules: {},
});
