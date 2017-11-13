import React, { Component } from 'react';
import WorkflowChart from './WorkflowChart';
import './App.css';

class App extends Component {  
    constructor(props) {
     super(props);
     this.state = {percentComplete: 0.3};
     this.togglePercent = this.togglePercent.bind(this);
   }

  togglePercent() {
    const percentage = this.state.percentComplete === 0.3 ? 0.7 : 0.3;
    this.setState({percentComplete: percentage});
  }
  render() {
    return (
      <div>        
        <WorkflowChart id="d3-workflow"/>
       </div>
    );
  }
}

export default App;
