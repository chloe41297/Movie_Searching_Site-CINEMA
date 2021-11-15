export default {
  namespaced: true,
  state() {
    return {
      searchResult: [],
      modaleResult: {},
      idResult: [],
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async readSearch({ commit }, payload) {
      const { title } = payload;
      const searchResult = await fetch("/.netlify/functions/searchMovieList", {
        method: "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.json());
      console.log(searchResult);
      commit("assignState", {
        searchResult: searchResult,
      });
    },
    async switchPages({ commit }, payload) {
      //const { title, currentPage } = payload;
      const searchResult = await fetch("/.netlify/functions/searchMoviePage", {
        method: "POST",
        body: JSON.stringify(payload),
      }).then((res) => res.json());
      commit("assignState", {
        searchResult: searchResult,
      });
    },
    async openModale({ commit }, payload) {
      const { id } = payload;
      const modaleResult = await fetch(
        "/.netlify/functions/searchMovieDetail",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      ).then((res) => res.json());
      commit("assignState", {
        modaleResult: modaleResult,
      });
    },
  },
};
