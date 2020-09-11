import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeView from './views/Home.view.jsx'

  function App(){
    return <div>
      Ola, mundo
    </div>
  }
ReactDOM.render(
  <React.StrictMode>
    <HomeView/>
  </React.StrictMode>,
  document.getElementById('root')
);

