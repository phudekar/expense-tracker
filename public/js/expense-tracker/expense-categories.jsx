import d3 from "d3";

class ExpenseCategories {

	constructor(){
		var color = d3.scale.category20();
		this._all = [
				{id:0, name:"Food"},
				{id:1, name:"Apperals"}, 
				{id:2, name:"Healthcare"},
				{id:3, name:"Entertainment"},
				{id:4, name:"Education"},
				{id:5, name:"Electronics"},
				{id:6, name:"Travel"},
				{id:7, name:"Grocery"}
			];
			
		for(let index in this._all){
			this._all[index].color = color(index);
		}
	}
	
	get all(){
		return this._all;
	}
	
	getCategoryColor(categoryName){
		var c = this._all.find((category)=>{
			return category.name.toLowerCase() === categoryName.toLowerCase();
		});
		return c.color;
	}
}
				
module.exports = new ExpenseCategories();