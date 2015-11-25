import React from "react"

import Dialog from 'material-ui/lib/dialog'
import FloatingActionButton from "material-ui/lib/floating-action-button"

import BaseComponent from "../base-component.jsx"
import TransactionInput from "./transaction-input.jsx"
import transactionService from "./transaction-service.jsx"

class AddTransactionButton extends BaseComponent{
	
	constructor(){
		super();
		this.transactionService = transactionService;
		this.state = {
			showDialog: false
		};
		this._bind('_handleDialogCancel','_handleRequestClose','_addTransaction','onAddTransaction');
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
	
	render(){
		return (
			<div>
				<FloatingActionButton style={{position: "absolute", right: "20px", bottom: "20px" }}
						onTouchTap={this._addTransaction} >
						<span className="add-button">+</span>
				</FloatingActionButton>
	
				<Dialog
					title="Add Transaction"
					open={this.state.showDialog}
					onRequestClose={this._handleRequestClose}>
					
					<TransactionInput 
						onAddTransaction={this.onAddTransaction} 
						onCancel={this._handleDialogCancel}/>
				</Dialog>
			</div>
		);
	}
}

module.exports = AddTransactionButton;