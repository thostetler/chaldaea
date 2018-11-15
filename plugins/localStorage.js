import createPersistedState from 'vuex-persistedstate'

/**
 * Set up the persisted store, this will make sure that the state coming
 * from the server is saved into localStorage
 */
export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({})(store)
  })
}
