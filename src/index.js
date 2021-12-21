import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let data

async function init() {
  data = await fetch('http://localhost:5000')
  data = await data.json()

  ReactDOM.render(
    <React.StrictMode>
      <App data={data.boards} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

init()

