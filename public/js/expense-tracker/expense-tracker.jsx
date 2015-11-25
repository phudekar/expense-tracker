import React from "react"

import IconButton from "material-ui/lib/icon-button"
import Paper from "material-ui/lib/paper"
import Tabs from "material-ui/lib/tabs/tabs"
import Tab from "material-ui/lib/tabs/tab"

import BaseComponent from "../base-component.jsx"
import Transactions from "./transactions.jsx"
import TransactionReport from "./transaction-report.jsx"
import AddTransactionButton from "./add-transaction-button.jsx"

class ExpenseTracker extends BaseComponent {
	
	constructor(){
		super();
	}
	
	render(){
		return (
		<Paper>
			<Tabs className="tabs">
				<Tab label="Transactions" value="home" >
					<div className="tab-content">
						<Transactions/>
						<AddTransactionButton/>
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