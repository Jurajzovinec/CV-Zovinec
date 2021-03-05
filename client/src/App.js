import React from 'react';
import './App.css';
import CV from './CV.json';
import CvInformation from './components/CvInformation';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      cvDetails: CV.CV
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