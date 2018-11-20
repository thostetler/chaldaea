import Vuex from 'vuex'

// this will grab the current query and add a value to it
const updateQS = function(data) {
  let qs = Object.assign({}, this.$router.query, data)
  this.$router.push({ query: qs })
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      query: '',
      results: [],
      inProgress: false
    }),
    mutations: {
      SET_QUERY(state, query) {
        state.query = query
        // update the query string
        updateQS.call(this, { q: query })
      },
      SET_IN_PROGRESS(state) {
        state.inProgress = true
      },
      SET_NOT_IN_PROGRESS(state) {
        state.inProgress = false
      },
      SET_RESULTS(state, results) {
        state.results = results
      },
      CLEAR_RESULTS(state) {
        state.results = []
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        console.log('nuxt init')
      },
      async START_SEARCH({ commit }) {
        commit('SET_IN_PROGRESS')
        commit('CLEAR_RESULTS')
        const posts = await this.$axios.$get('api/posts')
        commit('SET_RESULTS', posts)
        commit('SET_NOT_IN_PROGRESS')
      }
    }
  })
}

export default createStore
