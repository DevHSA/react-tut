import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './userInput/userInput'
import UserOutput from './userOutput/userOutput'

class App extends Component {

  state = {
    username: 'supermax'
  }

  inputChangeHandler = (event) => {

    this.setState({
      username: event.target.value
    })

  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.inputChangeHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Harish" />
      
      </div>
    );
  }
}

export default App;
