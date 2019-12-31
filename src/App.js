import React, { useState, useRef } from 'react';

import Step from './components/displays/step';
import NavBar from './components/displays/sideNav';
import Hidden from '@material-ui/core/Hidden';

import { stepIDName } from './css.js'

const Steps = require("./data/config");

export default function App() {
  const [visibleSection, setVisibleSection] = useState(); // Hook for visible section state
  const headerRef = useRef(null); // Header height reference

  const doScroll = id => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className='app'>
      <div className='header'>
        <h1>Clear My Missouri Record</h1>
      </div>

      <div className='content'>
        <div className='steps'>
          {Steps.steps.map((data, index) => {
            return (
              <Step
                key={index.toString()}
                stepNumber={index + 1}
                {...data}
              />
            );
          })}
        </div>
      </div>
      <Hidden mdDown>
        <div className='navbar'>
          <ol className='navbar-sticky'>
            {Steps.steps.map((data, index) => {
              return (
                <NavBar
                  key={index.toString()}
                  onClick = { () => doScroll(stepIDName(index + 1)) }
                  stepNumber={index + 1}
                  {...data}
                />
              );
            })}
          </ol>
        </div>
      </Hidden>

      <div className='footer'>
        <div className='footer-content'>footer placeholder</div>
      </div>
    </div>
  );
}
