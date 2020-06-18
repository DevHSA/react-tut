import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

class App extends Component {
  
  state = {

    userInput: '',

  }

  inputChangedHandler = (event) => {

    this.setState({
      userInput: event.target.value,
    });
    console.log(this.state.userInput);
  }


  deleteCharHandler = (index) => {

    let text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({
      userInput: updatedText,
    });


  }

  render() {
    

    const charList = this.state.userInput.split('').map( (char, index) => {

      return <CharComponent character={char} key={index} clicked={() => this.deleteCharHandler(index) } />;

    }); 


    return (
      <div>
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <ValidationComponent inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
