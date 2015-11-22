import React from "react"

import IconButton from "material-ui/lib/icon-button"
import Paper from "material-ui/lib/paper"
import Tabs from "material-ui/lib/tabs/tabs"
import Tab from "material-ui/lib/tabs/tab"

import BaseComponent from "../base-component.jsx"
import TransactionInput from "./transaction-input.jsx"

class ExpenseTracker extends BaseComponent {
	
	constructor(){
		super();
		this.state = {
			expenseCategories : [
				{id:1, name:"Food"},
				{id:2, name:"Apperals"}, 
				{id:3, name:"Leisure"},
				{id:4, name:"Entertainment"},
				{id:5, name:"Education"},
				{id:6, name:"Electronics"}],
			expenses: []
		};
		this._bind('_handleTabsChange', '_handleButtonClick','onAddExpense');
	}
	
	_handleTabsChange(){
		alert(this.state.tabsValue);
	}
	
	_handleButtonClick(){
	
	}
	
	onAddExpense(expense){
		this.state.expenses.push(expense);
	}
	
	render(){
		return (
		<Paper>
			<Tabs className="tabs">
				<Tab label="Home" value="home" >
					<div className="tab-content">
						<TransactionInput expenseCategories={this.state.expenseCategories} onAddExpense={this.onAddExpense}/>
					</div>
				</Tab>
				<Tab label="Transactions" value="transactions" >
					<div className="tab-content"> </div>
				</Tab>
				<Tab label="Reports" value="reports">
					<div className="tab-content"> </div>
				</Tab>
			</Tabs>
		</Paper>
		);	
	}
}

module.exports = ExpenseTracker