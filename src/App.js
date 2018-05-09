import React from 'react';
import './style.css';
import env from './img/env.png';
import halfenv from './img/halenv.png';
import rings from './img/rings.png'

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="env">
          <img src={env} alt="Envelop" />
        </div>
        <div className="half-env">
          <img src={halfenv} alt="Envelop" />
        </div>
        <div className="invitation-box">
          <div className="box-1">
            <img src={rings} alt="Ring" />
          </div>
          <div className="box-2">
            <img src={rings} alt="Ring" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
