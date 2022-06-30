import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export const plugins = [createPersistedState()]

export const state = () => ({
  isSidebarOpened: false,
  accounts: [],
  watchlist: [],
  search: ''
});

export const mutations = {
  showHideSidebar(state) {
    state.isSidebarOpened = !state.isSidebarOpened
  },
  SET_ACCOUNTS: (state, accounts) => {
    state.accounts = accounts
  },
  SET_PAGINATED_ACCOUNTS: (state, paginatedAccounts) => {
    state.paginatedAccounts = paginatedAccounts
  },
  SEARCH_ACCOUNTS: (state, search) => {
    state.search = search
  },
  ADD_TO_WATCHLIST: (state, watchList) => {
    state.watchlist = watchList
  }
}

export const getters = {
  ACCOUNTS(state) {
    return state.accounts
  },
  WATCHLIST(state) {
    return state.watchlist
  }
}

export const actions = {
  async GET_ACCOUNTS({commit}) {
    axios.get('https://c0b9-45-136-51-226.eu.ngrok.io/api/top', {
      crossdomain: true,
      crossorigin:true,
      headers: {
        'ngrok-skip-browser-warning': '1'
      }
    })
    .then((response) => {
      commit('SET_ACCOUNTS', response.data.accounts)
    })
  }
}
