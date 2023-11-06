import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import { createApp,createSSRApp } from 'vue'

loadFonts()
const app=createApp(App)
  app.use(router)
  app.use(vuetify)
  // app.use(createMetaManager())
  app.mount('#app')

