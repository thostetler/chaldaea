import Vuex from 'vuex'
import { parseSolrResponse } from '../helpers/solr'

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
      numResults: 0,
      inProgress: false,
      auth: {
        token: '',
        expires: ''
      }
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
      },
      SET_AUTH_DATA(state, authdata) {
        state.auth = authdata
      },
      SET_NUM_RESULTS(state, num) {
        state.numResults = num
      },
      TOGGLE_SELECT_RESULT(state, index) {
        state.results = [
          ...state.results.slice(0, index),
          {
            ...state.results[index],
            selected: !!!state.results[index].selected
          },
          ...state.results.slice(index + 1)
        ]
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        console.log('nuxt init')
      },
      async START_SEARCH({ commit, state }, q) {
        commit('SET_IN_PROGRESS')
        commit('CLEAR_RESULTS')
        this.$router.push({ path: 'search', query: { q: state.query } })
        const res = await this.$axios.$get('api/search/query', {
          params: {
            fl: 'title,abstract,authors,bibcode',
            q: state.query
          }
        })
        console.log(res)
        const data = parseSolrResponse(res)
        commit('SET_RESULTS', data.results)
        commit('SET_NUM_RESULTS', data.numResults)
        commit('SET_NOT_IN_PROGRESS')
      }
    }
  })
}

export default createStore
