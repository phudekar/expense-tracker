import React from "react"
import d3 from "d3"
import _ from "lodash"

import BaseComponent from "../base-component.jsx"
import transactionService from "./transaction-service.jsx"

class TransactionReport extends BaseComponent {
	
	constructor(){
		super();
		this.transactionService = transactionService;
		this.state = {
			timespan: "day",
			width: 450,
			height: 300,
			radius: 100,
			innerRadius: 45,
			tweenDuration: 250
		}
		this._bind('_pieTween','_removePieTween','_arc');
		this.pieData = [];    
		this.oldPieData = [];
		this.color = d3.scale.category20();
	}
	
	getTranscationSummary(){
		var categoriesGroup = _.groupBy(this.transactionService.transactions, 'category')
		return _.map(_.keys(categoriesGroup), (key) => {
			var data = { 
					category: key,
					amount: _.sum(categoriesGroup[key], (transaction) => { return transaction.amount;})
					};
			return data;
		});
	}
	
	createDonut(transactionSummary){
		var dount = d3.layout.pie().value(function(d){
			return d.amount;
		});
		return dount(transactionSummary);
	}
	
	getTotalAmount(transactionSummary) {
		return _.sum(transactionSummary, (transactionCategory) => { 
			return transactionCategory.amount; 
		});
	}
	
	componentDidMount(){
		this._addResizeHandler();
		this._draw();
	}
	
	componentDidUpdate(){
		this._draw();
	}
	
	getColor(d, i){
		return this.color(i);
	}
	
	_draw(){
		this._cleanUpChart();
		this._initializePie();	
		this._drawPieChart();
	}
	
	_initializePie(){
		var vis =  d3.select("#pie-chart")
					.append("svg:svg")
					.attr("width", this.state.width)
					.attr("height", this.state.height);
					
		this.arc_group = vis.append("svg:g")
							.attr("class", "arc")
							.attr("transform", "translate(" + (this.state.width/2) + "," + (this.state.height/2) + ")");
		
		var center_group = vis.append("svg:g")
							.attr("class", "center_group")
							.attr("transform", "translate(" + (this.state.width/2) + "," + (this.state.height/2) + ")");
		
		this.paths = this.arc_group.append("svg:circle")
						.attr("fill", "#EFEFEF")
						.attr("r", this.state.radius);
		
		var whiteCircle = center_group.append("svg:circle")
							.attr("fill", "white")
							.attr("r", this.state.innerRadius);
		
		var totalLabel = center_group.append("svg:text")
							.attr("class", "label")
							.attr("dy", -15)
							.attr("text-anchor", "middle")
							.text("TOTAL");
		
		this.totalValue = center_group.append("svg:text")
							.attr("class", "total")
							.attr("dy", 7)
							.attr("text-anchor", "middle")
							.text("Waiting...");
		
		var totalUnits = center_group.append("svg:text")
							.attr("class", "units")
							.attr("dy", 21)
							.attr("text-anchor", "middle")
							.text("Rs");
	}
	
	_cleanUpChart(){
		var chartContainer = d3.select("#pie-chart");
		chartContainer.select("svg").remove();
	}
	
	_drawPieChart(){
		var transactionSummary =  this.getTranscationSummary();
							
	 	this.pieData = this.createDonut(transactionSummary);
		 
    	this.arc_group.selectAll("circle").remove();

		this.totalValue.text(this.getTotalAmount(transactionSummary));
		 
		this.paths = this.arc_group.selectAll("path").data(this.pieData);
		this.paths.enter()
			.append("svg:path")
			.attr("stroke", "white")
			.attr("stroke-width", 0.5)
			.attr("fill", (d,i) => {return this.getColor(d,i);})
			.transition()
				.duration(this.state.tweenDuration)
				.attrTween("d", this._pieTween);
		this.paths.transition()
				.duration(this.state.tweenDuration)
				.attrTween("d", this._pieTween);
		this.paths.exit().transition()
				.duration(this.state.tweenDuration)
				.attrTween("d", this._removePieTween)
			.remove();
	}
	
	_arc(b){
		var arc =  d3.svg.arc()
					.startAngle(function(d){ return d.startAngle; })
					.endAngle(function(d){ return d.endAngle; })
					.innerRadius(this.state.innerRadius)
					.outerRadius(this.state.radius);
		return arc(b);
	}
	
	_pieTween(d, i) {
		var s0;
		var e0;
		if(this.oldPieData[i]){
			s0 = this.oldPieData[i].startAngle;
			e0 = this.oldPieData[i].endAngle;
		} else if (!(this.oldPieData[i]) && this.oldPieData[i-1]) {
			s0 = this.oldPieData[i-1].endAngle;
			e0 = this.oldPieData[i-1].endAngle;
		} else if(!(this.oldPieData[i-1]) && this.oldPieData.length > 0){
			s0 = this.oldPieData[oldPieData.length-1].endAngle;
			e0 = this.oldPieData[oldPieData.length-1].endAngle;
		} else {
			s0 = 0;
			e0 = 0;
		}
		var i = d3.interpolate({startAngle: s0, endAngle: e0}, {startAngle: d.startAngle, endAngle: d.endAngle});
		return (t) => {
			var b = i(t);
			return this._arc(b);
		};
	}
	
	_removePieTween(d, i) {
		s0 = 2 * Math.PI;
		e0 = 2 * Math.PI;
		var i = d3.interpolate({startAngle: d.startAngle, endAngle: d.endAngle}, {startAngle: s0, endAngle: e0});
		return (t) => {
			let b = i(t);
			return this._arc(b);
		};
	}
	
	_addResizeHandler(){
		window.addEventListener("resize", ()=>{
			var report =  document.getElementsByClassName("transaction-report")[0];
			var resize = report.clientWidth < 500;
			this.setState({
				width :  report.clientWidth,
				height : resize? report.clientWidth * 0.8 :this.state.height,
				radius : resize? report.clientWidth * 0.3 : this.state.radius,
				innerRadius: resize? report.clientWidth *.15 : this.state.innerRadius
			});
		});
	}
	
	render(){
		return (
			<div className="transaction-report">
				<div id="pie-chart">
				</div>
			</div>
		);
	}

}

module.exports = TransactionReport;