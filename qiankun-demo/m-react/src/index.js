import './public_path'  //注意放最开头，处理子应用静态资源加载路径问题
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function render(props) {
  const container = props.container
  const root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// qiankun提供了一些标识，用于标识当前应用是否在父应用中被渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

//qiankun要求 应用暴露的方式需要是umd格式
export async function bootstrap(props) {
  console.log('[m-react] react app bootstraped', props);
}
export async function mount(props) {
  console.log('[m-react] props from main framework', props);
  //外层基座的容器叫container容器
  render(props);
}
export async function unmount(props) {
  console.log('[m-react] unmount', props);
}