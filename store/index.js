import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export const plugins = [createPersistedState()]

export const state = () => ({
  isSidebarOpened: false,
  users: [],
  watchlist: [],
  search: ''
});

export const mutations = {
  showHideSidebar(state) {
    state.isSidebarOpened = !state.isSidebarOpened
  },
  SET_USERS: (state, users) => {
    state.users = users
  },
  SET_PAGINATED_USERS: (state, paginatedUsers) => {
    state.paginatedUsers = paginatedUsers
  },
  SEARCH_USERS: (state, search) => {
    state.search = search
  },
  ADD_TO_WATCHLIST: (state, watchList) => {
    state.watchlist = watchList
  }
}

export const getters = {
  USERS(state) {
    return state.users
  },
  WATCHLIST(state) {
    return state.watchlist
  }
}

export const actions = {
  async GET_USERS({commit}) {
    axios.get('https://localhost:3000')
    .then((response) => {
      commit('SET_USERS', response.data)
    })
  }
}
