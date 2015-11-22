import React from "react"

import IconButton from "material-ui/lib/icon-button"
import Paper from "material-ui/lib/paper"
import Tabs from "material-ui/lib/tabs/tabs"
import Tab from "material-ui/lib/tabs/tab"

import BaseComponent from "../base-component.jsx"
import Transactions from "./transactions.jsx"

class ExpenseTracker extends BaseComponent {
	
	constructor(){
		super();
		this.state = {
			expenseCategories : [
				{id:1, name:"Food"},
				{id:2, name:"Apperals"}, 
				{id:3, name:"Healthcare"},
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
				<Tab label="Transactions" value="home" >
					<div className="tab-content">
						<Transactions expenseCategories={this.state.expenseCategories} onAddExpense={this.onAddExpense}/>
					</div>
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