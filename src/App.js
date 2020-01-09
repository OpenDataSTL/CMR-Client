import React, { useState, useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Info from './pages/info';

export default function App() {

  return (
    <div className='app'>
      <div className='header' >
        <h1>Clear My Missouri Record</h1>
      </div>
      <Info></Info>
      <div className='bottom-spacer' />
      <div className='footer'>
        <div className='footer-content'>footer placeholder</div>
      </div>
    </div>
  );
}
