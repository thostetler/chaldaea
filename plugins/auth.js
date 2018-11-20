export default function({ store, app: { $axios, redirect, $auth } }) {
  const { token } = store.state.auth
  if (token.length) {
    console.log('found token in store', token)
    return
  }
  const url = 'https://devapi.adsabs.harvard.edu/v1/accounts/bootstrap'
  $axios.$get(url).then(auth => {
    store.commit('SET_AUTH_DATA', {
      token: auth.access_token,
      expires: auth.expire_in
    })
  })
}
