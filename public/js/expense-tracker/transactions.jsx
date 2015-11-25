import React from "react"

import BaseComponent from "../base-component.jsx"
import TransactionList from "./transaction-list.jsx"
import transactionService from "./transaction-service.jsx"

class Transactions extends BaseComponent {

	constructor(){
		super();
	}
	
	render() {
		return (
			<div className="transactions">
				<TransactionList transactions={this.transactionService.transactions}/>
			</div>
		)
	}
}

module.exports = Transactions