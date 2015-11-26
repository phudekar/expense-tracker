import React from "react"

import FontIcon from 'material-ui/lib/font-icon'
import Avatar from 'material-ui/lib/avatar'
import Colors from 'material-ui/lib/styles/colors'

import BaseComponent from "../base-component.jsx"
import expenseCategories from "./expense-categories.jsx"

class CategoryAvatar extends BaseComponent {

	constructor(){
		super();
		this.expenseCategories = expenseCategories;
		this.categories = {
			"food": {
					icon: "local_dining",
				},
			"entertainment": {
					icon: "local_movies",
				},
			"healthcare" : {
					icon: "local_pharmacy",
				},
			"travel" : {
					icon: "local_taxi",
				},
			"electronics" : {
					icon: "radio",
				},
			"apparels" : {
					icon: "local_offer",
				},
			"grocery" : {
					icon: "shopping_cart",
				}
				
		}
	}
	
	render(){
		var getIcon = (category) => {
			var category = category.toLowerCase();
			if(this.categories[category] && this.categories[category].icon)
				return <FontIcon className="material-icons">{this.categories[category].icon}</FontIcon>;
			else
				return <span>{category[0].toUpperCase()}</span>
		}	
		
		var getBackground = (category) => {
			return expenseCategories.getCategoryColor(category);
		}
		
		return (
			<Avatar className="category-avatar" icon={getIcon(this.props.category.toLowerCase())} backgroundColor={getBackground(this.props.category)}/>
		)
	}
}

module.exports = CategoryAvatar;