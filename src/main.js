// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
// import '~/assets/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {
    theme: {
      options: {
        customProperties: true
      },
      light: true,
      themes: {
        light: {
          primary: '#11bf94',
          primaryBackground: colors.teal.accent3,
          secondary: colors.green.darken1,
          accent: '#0e214c',
        },
      },
    },
  }
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);

  Vue.component('Layout', DefaultLayout)
}
