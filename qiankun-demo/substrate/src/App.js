import { BrowserRouter, Link } from "react-router-dom";
import './App.css';
import { useEffect, useRef } from "react";
import { loadMicroApp } from "qiankun";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    loadMicroApp({
      name: 'm-static',
      entry: '//localhost:10001',
      container: containerRef.current,
      props: { msg: 'hello world' }
    })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/react">React应用</Link>
        <Link to="/vue">Vue应用</Link>
      </BrowserRouter>
      <div ref={containerRef}></div>
      <div id='container'></div>
    </div>
  );
}

export default App;
