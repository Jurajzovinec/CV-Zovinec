import React from 'react';
import './App.css';
import cv from './json/cv.json';
import CvInformation from './components/CvInformation';
import Technologies from './components/Technologies';
import EnterProjectRoom from './components/EnterProjectRoom';

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
            name={"CuricullumVitae"}
            data={this.state.cvDetails} />
        </div>

        <div className="content__techonologies-visualization">
          {/*<Technologies name={"Technologies I want to learn/improve in."}/> */}
        </div>

        <div className="content__project-room-enter">
          <EnterProjectRoom name={"Projects"}/>
        </div>

      </div>
    )
  }
}

export default App;