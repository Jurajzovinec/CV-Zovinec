import React from 'react';
import './App.css';
import CV from './CV.json';
import CvInformation from './components/CvInformation';


// Root component -> Manages all app state
class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      cvDetails: CV.CV
    };
    this.getNested = this.getNested.bind(this);
  }

  componentDidMount() {
  }

  getNested(obj, ...args) {
    return args.reduce((obj, level) => obj && obj[level], obj);
  }

  render() {
    return (
      <div>
        <CvInformation 
          name={"CV"} 
          data={this.state.cvDetails}/>
      </div>

    )
  }
}

export default App;