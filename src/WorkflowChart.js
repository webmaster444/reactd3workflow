import React, { Component } from 'react';
import * as d3 from "d3";

class WorkflowChart extends Component {

	displayName: 'WorkflowChart'; 

  propTypes: {
    id: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    backgroundColor: PropTypes.string,
    foregroundColor: PropTypes.string,
    percentComplete: PropTypes.number
  }

  componentDidMount() {
    var generalChartData = require('./data/jsondata.json');    
	  this.drawArc();
	}

	componentDidUpdate() {
    this.redrawArc();
  }

  redrawArc() {
    const context = d3.select(`#${this.props.id}`);
    context.remove();
    this.drawArc();
  }

  drawArc() {   
  }
  
  render() {
    return (
      <div ref="workflow"></div>
    )
  }
}

export default WorkflowChart;