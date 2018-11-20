export default function({ store, app: { $axios, redirect } }) {
  $axios.onRequest(config => {
    if (/^api\//.test(config.url) && config.url.indexOf('bootstrap') === -1) {
      const { token } = store.state.auth
      if (token.length) {
        console.log('adding header using: ', token)
        config.headers.Authorization = `Bearer:${token}`
      }
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
