import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react App'))

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" > My hobbies: Racing </Person>
        <Person name="Stephanie" age="26" />
      </div>
      
    );
  }
}

export default App;
