const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    '~/semantic/dist/semantic.min.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/auth.js',
    '@/plugins/element-ui.js',
    '@/plugins/axios.js',
    { src: '~/plugins/localStorage.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/auth', '@nuxtjs/axios', '@nuxtjs/proxy'],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
  },

  /*
  ** Auth module settings
  */
  auth: {
    strategies: {
      local: {
        endpoints: {}
      }
    }
  },

  /*
  ** Axios proxy settings
  */
  proxy: {
    '/api/': {
      target: 'https://devapi.adsabs.harvard.edu/v1',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
