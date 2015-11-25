import React from "react"

import IconButton from "material-ui/lib/icon-button"
import Paper from "material-ui/lib/paper"
import Tabs from "material-ui/lib/tabs/tabs"
import Tab from "material-ui/lib/tabs/tab"

import BaseComponent from "../base-component.jsx"
import TransactionList from "./transaction-list.jsx"
import transactionService from "./transaction-service.jsx"
import TransactionReport from "./transaction-report.jsx"
import AddTransactionButton from "./add-transaction-button.jsx"

class ExpenseTracker extends BaseComponent {
	
	constructor(){
		super();
		this.transactionService = transactionService;
		this.state = {
			transactions: this.transactionService.transactions
		}
		this._bind('onTransactionsUpdated');
	}
	
	onTransactionsUpdated(){
		this.setState({transactions: this.transactionService.transactions});
	}
	
	render(){
		return (
		<Paper>
			<Tabs className="tabs">
				<Tab label="Transactions" value="home" >
					<div className="tab-content">
						<TransactionList transactions={this.state.transactions}/>
						<AddTransactionButton onTransactionsUpdated={this.onTransactionsUpdated}/>
					</div>
				</Tab>
				<Tab label="Reports" value="reports">
					<div className="tab-content">
						<TransactionReport/>
					</div>
				</Tab>
			</Tabs>
		</Paper>
		);	
	}
}

module.exports = ExpenseTracker