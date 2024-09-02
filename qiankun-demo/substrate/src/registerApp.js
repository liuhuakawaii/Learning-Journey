import { registerMicroApps, start } from 'qiankun'
const loader = (loading) => {
  console.log('loading', loading)
}

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:10001',  //默认reactApp启动的入口是10000端口
    activeRule: '/react', //默认reactApp的匹配规则是/react
    container: '#container', // 默认reactApp的挂载点是#container
    loader
  }
], {//lifecycles
  beforeLoad: app => {
    console.log('before load', app.name)
  },
  beforeMount: app => {
    console.log('before mount', app.name)
  },
  afterMount: app => {
    console.log('after mount', app.name)
  },
  beforeUnmount: app => {
    console.log('before unmount', app.name)
  },
  afterUnmount: app => {
    console.log('after unmount', app.name)
  }
})

start()