import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import {Grid} from'@material-ui/core';

ReactDOM.render(
  <Grid >
    
    <Navbar/>
    <App />
  </Grid>,
  document.getElementById('root')
);

