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
      expandCV: false,
      expandTechnologies: false,
      expandProjectRoom: false,
    };
    this.collapseSectionsOnToggle = this.collapseSectionsOnToggle.bind(this);
  }

  collapseSectionsOnToggle(value) {
    
    let stateCopy = this.state;
    const keys = Object.keys(stateCopy);

    keys.forEach(element => {
      if (element === value) {
        stateCopy[element] = true;
      } else {
        stateCopy[element] = false;
      }
      this.setState(stateCopy);
    });
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
                  name={"CuricullumVitaeJSON"}
                  data={cv.CV}
                  collapseSectionsOnToggle={(value) => this.collapseSectionsOnToggle(value)}
                  expand={this.state.expandCV}
                />
              </div>

              <div className="content__techonologies-visualization">
                <Technologies name={"Technologies I want to learn/improve in/work with."}
                  collapseSectionsOnToggle={(value) => this.collapseSectionsOnToggle(value)}
                  expand={this.state.expandTechnologies}
                />
              </div>

              <div className="content__project-room-enter">
                <EnterProjectRoom name={"Projects"}
                  collapseSectionsOnToggle={(value) => this.collapseSectionsOnToggle(value)}
                  expand={this.state.expandProjectRoom}
                />
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