import React from "react";
import ReactDOM from "react-dom";
import Slide from "./slide.jsx";
import BaseComponent from "./base-component.jsx";
import slides from "./slides.jsx";
 
class App extends BaseComponent {

constructor(){
  super();
  this.state = {
        slides: slides,
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
        { this.state.currentIndex !== 0 ? <a onClick={this.previous}>Previous</a> : '' } 
        { this.state.currentIndex > 0 && this.state.currentIndex <  this.state.slides.length-1  ? ' | ' : '' } 
        { this.state.currentIndex !== this.state.slides.length-1 ?  <a onClick={this.next}>Next</a> : ''}
        <Slide slide={this.getCurrentSlide()}></Slide>
      </div>
      
    );
  }
}
 
ReactDOM.render(<App/>, document.getElementById("content"));