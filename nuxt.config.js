export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'booking',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css' },
    ],
    script: [
      {
        type: 'text/javascript',
        src: '/js/svgSprite.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: '/vendor/jquery/jquery.min.js'
      },
      {
        type: 'text/javascript',
        src: '/vendor/bootstrap/js/bootstrap.bundle.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: '/vendor/magnific-popup/jquery.magnific-popup.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: '/vendor/smooth-scroll/smooth-scroll.polyfills.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: '/vendor/bootstrap-select/js/bootstrap-select.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: '/vendor/object-fit-images/ofi.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js',
        body: true
      },
      {
        type: 'text/javascript',
        src: '/js/theme.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/plugins/vendor/nouislider/nouislider.min.css',
    '~/plugins/vendor/nouislider/nouislider.css',
    '~/plugins/vendor/magnific-popup/magnific-popup.css',
    '@/assets/css/style.default.css',
    '@/assets/css/custom.css'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
