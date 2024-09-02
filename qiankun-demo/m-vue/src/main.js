import './public_path.js'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router'


let app
let router
let history
function render(props) {
  app = createApp(App)
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue' : '/')
  router = createRouter({ history, routes })

  app.use(router)
  const container = props.container
  app.mount(container ? container.querySelector('#app') : document.getElementById('app'))
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export const bootstrap = async () => {
  console.log('vue app bootstraped')
}

export const mount = async (props) => {
  render(props)
}

export const unmount = async () => {
  app.unmount()
  history.destroy();
  app = null;
  router = null
}
