import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "./base-component.jsx";
import ExpenseTracker from "./expense-tracker/expense-tracker.jsx";
import injectTapEventPlugin from "react-tap-event-plugin";
 
class App extends BaseComponent {

constructor(){
  super();
  this.state = {
        currentIndex: 0
      };
        this._bind('next', 'previous');
  }
  
  next(){
   this.setState({currentIndex: this.state.currentIndex+1});
  }
  
  previous(){
   this.setState({currentIndex: this.state.currentIndex-1});
  }
  
  getCurrentSlide(){
    return this.state.slides[this.state.currentIndex];;
  }
  
  render() {
    return (
      <div>
        <ExpenseTracker/>
      </div>
      
    );
  }
}
 
injectTapEventPlugin();
ReactDOM.render(<App/>, document.getElementById("content"));