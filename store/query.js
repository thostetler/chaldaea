/**
 * Defines the query store, this will be used for modeling the typical
 * solr query
 *
 * @see https://lucene.apache.org/solr/guide/7_3/common-query-parameters.html
 */
export const state = () => ({
  q: '',
  rows: 10,
  start: 0
})

export const mutations = {
  setQuery(state, query) {
    state.q = query
  },
  setRows(state, rows) {
    state.rows = rows
  },
  setStart(state, start) {
    state.start = start
  }
}
