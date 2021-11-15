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
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => res.json());
      commit("assignState", {
        searchResult: searchResult,
      });
    },
    async switchPages({ commit }, payload) {
      const { title, currentPage } = payload;
      const searchResult = await fetch("/.netlify/functions/searchMoviePage", {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
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
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      ).then((res) => res.json());
      commit("assignState", {
        modaleResult: modaleResult,
      });
    },
    async searchByID({ commit }, payload) {
      const { id } = payload;
      const idResult = await fetch("/.netlify/functions/searchMovieDetail", {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => res.json());
      commit("assignState", {
        idResult: idResult,
      });
    },
  },
};
