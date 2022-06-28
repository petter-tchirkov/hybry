import axios from 'axios'

export const state = () => ({
  isSidebarOpened: false,
  users: [],
  paginatedUsers: [],
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
  }
}

export const getters = {
  USERS(state) {
    return state.users
  }
}

export const actions = {
  async GET_USERS({commit}) {
    axios.get('http://localhost:3000/users')
    .then((response) => {
      commit('SET_USERS', response.data)
    })
  }
}
