const { defineConfig } = require('@vue/cli-service')
// import { defineConfig } from '@vue/cli-service'
module.exports = defineConfig({
  transpileDependencies: true,
  // transpileDependencies: ['vue-meta'],

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
