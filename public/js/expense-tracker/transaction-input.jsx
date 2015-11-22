import React from "react"

import IconButton from "material-ui/lib/icon-button"
import TextField from "material-ui/lib/text-field"
import SelectField from "material-ui/lib/select-field"
import DatePicker from "material-ui/lib/date-picker/date-picker"
import RaisedButton from "material-ui/lib/raised-button"

import BaseComponent from "../base-component.jsx"
import transactionsService from "./transactions-service.jsx"

class TransactionInput extends BaseComponent {
	
	constructor(){
		super();
		this.state={
			title: "",
			category: "",
			date: "",
			amount: 0,
			amountError:""
		}
		this._bind("_onTitleChange", "_onAmountChange", "_onCategoryChange","_onDateChange","addExpense","canAddExpense");
	}
	
	_onTitleChange(e){
		this.setState({title: e.target.value});
	}
	
	_onAmountChange(e){
		var newAmount = e.target.value;
		if(isNaN(newAmount)){
			this.setState({amountError: "Amount must be a number"});
			return;
		}
		this.setState({amount: eval(newAmount), amountError: ""});
	}
	
	_onDateChange(e, date){
		this.setState({date: date});
	}
	
	_onCategoryChange(e, index){
		this.setState({
			category: this.props.expenseCategories[index].name
		});
	}
	
	addExpense(){
		let expense = {
			title: this.state.title,
			category: this.state.category,
			amount: this.state.amount,
			date: this.state.date
		}
		this.props.onAddExpense(expense);
	}
	
	canAddExpense(){
		return this.state.title.length > 0
			&& this.state.category
			&& this.state.amount > 0
			&& this.state.date
	}
	
	render(){
		return (
		<div>
			<TextField hintText="Enter a title for your expense" floatingLabelText="Title" onChange={this._onTitleChange}/><br/>
			
			<SelectField onChange={this._onCategoryChange}
				floatingLabelText="Expense Type"
				hintText="Select type of expense"
				value={this.state.category.id}
				valueMember="id"
				displayMember="name"
				menuItems={this.props.expenseCategories}/><br/>
				
			<DatePicker onChange={this._onDateChange}
				floatingLabelText="Date of Expense"
				hintText="Select the date of expense"
  				value={this.state.date}/><br/>
				  
			<TextField hintText="Enter expense amunt" 
				floatingLabelText="Amount" 
				errorText={this.state.amountError}
				onChange={this._onAmountChange}/><br/>
			<br/>
			
			<RaisedButton label="Add Expense" 
				disabled={!(this.canAddExpense())}
				primary={true} onTouchTap={this.addExpense}/>
				
			<span className="cancel-button">
				<RaisedButton label="Cancel" secondary={true}  onTouchTap={this.props.onCancel}/>	
			</span>
			
		</div>
		);	
	}
}

module.exports = TransactionInput