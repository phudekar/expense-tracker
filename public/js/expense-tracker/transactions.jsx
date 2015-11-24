import React from "react"

import Dialog from 'material-ui/lib/dialog'
import FloatingActionButton from "material-ui/lib/floating-action-button"
import FontIcon from 'material-ui/lib/font-icon'

import BaseComponent from "../base-component.jsx"
import TransactionInput from "./transaction-input.jsx"
import transactionService from "./transaction-service.jsx"
import TransactionList from "./transaction-list.jsx"

class Transactions extends BaseComponent {

	constructor(){
		super();
		this.transactionService = transactionService;
		this.state = {
			showDialog: false
		};
		this._bind('_handleDialogCancel','_handleRequestClose','_addTransaction','onAddTransaction')
	}
	
	_addTransaction(){
		this.setState({showDialog: true});
	}
	
	_handleDialogCancel(){
		this.setState({showDialog: false});
	}
	
	_handleRequestClose(){
		this.setState({showDialog: false});
	}
	
	onAddTransaction(transaction){
		this.transactionService.addTransaction(transaction);
		this.setState({showDialog: false});
	}
	
	render() {
	
		return (
			<div className="transactions">
			
				<TransactionList transactions={this.transactionService.transactions}/>
				
				<FloatingActionButton style={{position: "absolute", right: "20px", bottom: "20px" }}
					onTouchTap={this._addTransaction} >
					<span className="add-button">+</span>
				</FloatingActionButton>

				<Dialog
					title="Add Transaction"
					open={this.state.showDialog}
					onRequestClose={this._handleRequestClose}>
					
					<TransactionInput 
						onAddExpense={this.onAddTransaction} 
						onCancel={this._handleDialogCancel}/>
				</Dialog>
			</div>
		)
	}

}

module.exports = Transactions