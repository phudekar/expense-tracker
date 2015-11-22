import React from "react"

import Dialog from 'material-ui/lib/dialog'
import FloatingActionButton from "material-ui/lib/floating-action-button"
import FontIcon from 'material-ui/lib/font-icon'
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';

import BaseComponent from "../base-component.jsx"
import TransactionInput from "./transaction-input.jsx"
import transactionsService from "./transactions-service.jsx"

class Transactions extends BaseComponent {

	constructor(){
		super();
		this.transactionsService = transactionsService;
		this.state = {
			showDialog: false
		};
		this._bind('_handleDialogCancel','_handleRequestClose','_addExpense','onAddExpense')
	}
	
	_addExpense(){
		this.setState({showDialog: true});
	}
	
	_handleDialogCancel(){
		this.setState({showDialog: false});
	}
	
	_handleRequestClose(){
		this.setState({showDialog: false});
	}
	
	onAddExpense(expense){
		this.transactionsService.addTransaction(expense);
		this.setState({showDialog: false});
	}
	
	render() {
		
		return (
			<div className="transactions">
				<List subheader="Today">
				{ this.transactionsService.transactions.map((transaction, index)=>{
					return (
					<div key={index}>
						<ListItem
						primaryText={transaction.title}
						secondaryText={
						<p>
							<span style={{color: "darkblue"}}>{transaction.category}</span><br/>
							<span>{transaction.amount}</span>
						</p>
						}
						secondaryTextLines={2} />
						<ListDivider/>
						</div>
						)
				})}
				</List>			
				<FloatingActionButton 
					onTouchTap={this._addExpense} >
					<span className="add-button">+</span>
				</FloatingActionButton>

				<Dialog
					title="Add Expense"
					open={this.state.showDialog}
					onRequestClose={this._handleRequestClose}>
					
					<TransactionInput expenseCategories={this.props.expenseCategories} 
						onAddExpense={this.onAddExpense} 
						onCancel={this._handleDialogCancel}/>
				</Dialog>
			</div>
		)
	}

}

module.exports = Transactions