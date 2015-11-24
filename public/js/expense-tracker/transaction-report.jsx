import React from "react"

import BaseComponent from "../base-component.jsx"

class TransactionReport extends BaseComponent {
	
	constructor(){
		super();
		this.state = {
			timespan: "day"
		}
	}
	
	render(){
		return (
			<div>
			</div>
		);
	}

}

module.exports = TransactionReport;