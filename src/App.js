import React from 'react';
import './App.css';
import cv from './json/cv.json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CvInformation from './components/CvInformation';
import Technologies from './components/Technologies';
import EnterProjectRoom from './components/EnterProjectRoom';
import ProjectRoom from './components/ProjectRoom';
import CvInPdf from './components/CvInPdf';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cvDetails: cv.CV
    };
  }

  render() {
    return (
      <Router>
       <Navbar />
        <Switch>
          <Route exact path="/">

            <div className="content">

              <div className="content__cv-recursive-ladder">
                <CvInformation
                  name={"CuricullumVitae"}
                  data={this.state.cvDetails} />
              </div>

              <div className="content__techonologies-visualization">
                {/*<Technologies name={"Technologies I want to learn/improve in/work with."} /> */}
              </div>

              <div className="content__project-room-enter">
                <EnterProjectRoom name={"Projects"} />
              </div>

            </div>

          </Route>
          <Route exact path="/projectroom">
            <ProjectRoom />
          </Route>

          <Route exact path="/cvinpdf">
            <CvInPdf />
          </Route>

        </Switch>
        
      </Router>
    )
  }
}

export default App;