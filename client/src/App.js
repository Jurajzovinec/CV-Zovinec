import React from 'react';
import './App.css';
import cv from './json/cv.json';
import CvInformation from './components/CvInformation';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      cvDetails: cv.CV
    };
  }

  render() {
    return (
      <div className="recursive-ladder">
        <CvInformation 
          name={"CV"} 
          data={this.state.cvDetails}/>
      </div>

    )
  }
}

export default App;