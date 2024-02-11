import { setupStore } from '@/store'

import { setupElementPlus } from '@/plugins/elementPlus'

import { setupRouter } from './router'

import { createApp } from 'vue'

import App from './App.vue'

import './permission'

import './style.css'

const setupAll = () => {
  const app = createApp(App)

  setupElementPlus(app)

  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

setupAll()
