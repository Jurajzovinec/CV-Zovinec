import React from 'react';
import './App.css';
import cv from './json/cv.json';
import CvInformation from './components/CvInformation';
import TechnologiesVisualization from './components/TechnologiesVisualization';
import TechnologiesEventButton from './components/TechnologiesEventButton';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cvDetails: cv.CV
    };
  }

  render() {
    return (
      <div className="content">

        <div className="content__cv-recursive-ladder">
          <CvInformation
            name={"CV"}
            data={this.state.cvDetails} />
        </div>

        <div className="content__techonologies-visualization">
          <TechnologiesEventButton name={"Technologies I want to learn/improve in."}/>
        </div>

        <div className="content__project-room-enter">
          {/* */}

        </div>

      </div>
    )
  }
}

export default App;