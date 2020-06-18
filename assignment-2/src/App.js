import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

class App extends Component {
  state = {
    length: 0,

    text: "",

    textSeparate: [],
  };

  onChangeHandler = (event) => {
    console.log(event.target.value.length);
    let newObj = {
      indChar: event.target.value.charAt(event.target.value.length - 1),
    };
    let temp = [...this.state.textSeparate, newObj];
    var tempText = "";

    for (let i = 0; i < event.target.value.length; i++) {
      tempText = tempText + temp[i].indChar;
    }

    this.setState({
      length: event.target.value.length,

      textSeparate: temp,
      text: tempText,
    });
  };

  onDeleteHandler = (index) => {
    let temp = [...this.state.textSeparate];
    temp.splice(index, 1);
    var tempText = "";
    for (let i = 0; i < temp.length; i++) {
      tempText = tempText + temp[i].indChar;
    }
    this.setState({
      length: temp.length,
      textSeparate: temp,
      text: tempText,
    });

    console.log("check Delete");
  };

  render() {
    let boxes = this.state.textSeparate.map((text, index) => {
      return (
        <CharComponent
          char={text.indChar}
          delete={() => this.onDeleteHandler(index)}
        />
      );
    });

    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.onChangeHandler(event)}
          value={this.state.text}
        />
        <p>{this.state.length}</p>

        <ValidationComponent length={this.state.length} />
        {boxes}
      </div>
    );
  }
}

export default App;
