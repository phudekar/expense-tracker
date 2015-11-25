import React from "react"

import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'

import BaseComponent from "../base-component.jsx"
import CategoryAvatar from "./category-avatar.jsx"

class TransactionList extends BaseComponent {

	constructor(){
		super();
	}

	render(){
		return (
			<List subheader="Today" className="transaction-list">
				{ this.props.transactions.map((transaction, index)=>{
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
					)
				})}
			</List>			
		)
	}
}

module.exports = TransactionList