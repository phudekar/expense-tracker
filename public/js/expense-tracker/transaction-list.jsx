import React from "react"

import _ from "lodash"
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'

import BaseComponent from "../base-component.jsx"
import CategoryAvatar from "./category-avatar.jsx"

class TransactionList extends BaseComponent {

	constructor(){
		super();
		this._bind('getList','getListItem');
	}
	
	getListItem(transaction,index){
		return (
					<div key={index}>
						<ListItem
						primaryText={
							<div>
								<span>{transaction.title}</span>
								<span className="transaction-amount">{Math.round(transaction.amount)}</span>
							</div>
						}
						leftAvatar={<CategoryAvatar category={transaction.category} />}
						secondaryText={
							<span>{transaction.category}</span>
						}
						secondaryTextLines={1} />
						<ListDivider/>
					</div>
				);
	}	
	
	getList(){
		var transactionsByDate = _.groupBy(this.props.transactions,"date");
		var sortedDates = _.sortBy(_.keys(transactionsByDate),(d)=>{ return Date.parse(d) * -1;});
		return	_.map(sortedDates,(date)=>{
					var transactions = transactionsByDate[date];
					return (
						<List key={date} subheader={new Date(date).toDateString()}>
							{ _.map(transactions, this.getListItem) }
						</List>
					);	
				});
	}
	
	render(){
		return (
			<div className="transaction-list">{ this.getList()}</div>
		);		
	}
}

module.exports = TransactionList