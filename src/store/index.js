import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    files: [],
    openedFile: false,
  },
  getters: {
    getFiles: (state) => state.files,

    openedFile: (state) => state.openedFile,
  },
  mutations: {
    SET_FILES_TO_STORE(state, data) {
      state.files = data;
    },

    OPEN_FILE(state, file) {
      state.openedFile = file;
    },

    CLOSE_FILE(state) {
      state.openedFile = false;
    }


  },
  actions: {
    setFilesToStore({commit}, data) {
      commit('SET_FILES_TO_STORE', data);
    },

    clearStoreFiles({commit}) {
      commit('SET_FILES_TO_STORE', []);
    },

    openFile({commit}, file) {
      commit('OPEN_FILE', file)
    },

    closeFile({commit}) {
      commit('CLOSE_FILE');
    }
  },
})
