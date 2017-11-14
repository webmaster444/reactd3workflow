import React, { Component } from 'react';
import WorkflowChart from './WorkflowChart';
import './App.css';

class App extends Component {  
  constructor(props) {
     super(props);     
     this.state = {
          content: require('./data/jsondata.json')
      }
   }
  
  render() {
    return (
      <div>        
        <WorkflowChart id="d3-workflow" key={Math.random()} data={this.state.content}/>
       </div>
    );
  }
}

export default App;
