import React from "react";
import BaseComponent from "./base-component.jsx";
 
class Slide extends BaseComponent {

	render(){
		return (
				<div className="slide">
					<div className="header">
						<span id="title" className="title">{this.props.slide.title}</span>
					</div>
					<div className="body">
					</div>
				</div>
			);
	}
}

module.exports = Slide;