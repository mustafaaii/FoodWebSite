import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './components/global/header';
import Body from './components/global/body';
import Footer from './components/global/footer';


ReactDOM.render(
  <React.StrictMode>
    <div style={{backgroundColor:"#F8F8FB"}}>
    <Header/>
    <Body/>
    <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
