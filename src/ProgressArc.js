import React, { Component } from 'react';
import * as d3 from "d3";

class ProgressArc extends Component {

	displayName: 'ProgressArc'; 

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
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
    this.updatePercent(context);
  }

  setBackground(context) {
    return context.append('path')
    .datum({ endAngle: this.tau })
    .style('fill', '#e6e6e6')
    .attr('d', this.arc());
  }

  tau = Math.PI * 2;

  arc() {
    return d3.arc()
      .innerRadius(100)
      .outerRadius(110)
      .startAngle(0)
  }
  setContext() {
    return d3.select(this.refs.arc).append('svg')
      .attr('height', '300px')
      .attr('width', '300px')
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', `translate(150, 150)`);
  }
arcTween(transition, newAngle, arc) {
  transition.attrTween('d', (d) => {
   const interpolate = d3.interpolate(d.endAngle, newAngle);
   const newArc = d;
   return (t) => {
     newArc.endAngle = interpolate(t);
     return arc(newArc);
   };
  });
}
setForeground(context) {
    return context.append('path')
    .datum({ endAngle: 0 }) // <- (instead of tau * our percentage)
    .style('fill', this.props.foregroundColor)
    .attr('d', this.arc());
  }
updatePercent(context) {
  return this.setForeground(context).transition()
   .duration(this.props.duration)
   .call(this.arcTween, this.tau * this.props.percentComplete, this.arc());
}
  render() {
    return (
      <div ref="arc"></div>
    )
  }
}

export default ProgressArc;