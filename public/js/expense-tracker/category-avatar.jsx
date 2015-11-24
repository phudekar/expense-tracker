import React from "react"

import FontIcon from 'material-ui/lib/font-icon'
import Avatar from 'material-ui/lib/avatar'
import Colors from 'material-ui/lib/styles/colors';

import BaseComponent from "../base-component.jsx"

class CategoryAvatar extends BaseComponent {

	constructor(){
		super();
		this.categories = {
			"food": {
					icon: "local_dining",
					background: Colors.indigo900
				},
			"entertainment": {
					icon: "local_movies",
					background: Colors.deepOrange600
				},
			"healthcare" : {
					icon: "local_pharmacy"
				},
			"travel" : {
					icon: "local_taxi"
				},
			"electronics" : {
					icon: "radio"
				},
			"apperals" : {
					icon: "local_offer"
				},
			"grocery" : {
					icon: "shopping_cart"	
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
			var category = category.toLowerCase();	
			if(this.categories[category] && this.categories[category].background)
				return this.categories[category].background;
			else
				return Colors.grey600;
		}
		
		return (
			<Avatar icon={getIcon(this.props.category)} style={{position: "absolute", top: "16px", left: "16px"}}
					backgroundColor={getBackground(this.props.category)}/>
		)
	}
}

module.exports = CategoryAvatar;