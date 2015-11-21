import BaseComponent from "./base-component.jsx"

class Design extends BaseComponent {

constructor(){
super();
}

render(){
return (
	<div id={this.props.id} className="design">
		<div className="title">{this.props.title}<div>
		<div dangerouslySetInnerHTML={this.props.content}/>
	</div>
);
}

}