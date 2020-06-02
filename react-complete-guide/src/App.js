import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [ personsState, setPersonsState ] = useState({
    
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 28 },
      { name: 'Stephanie', age: 28 },
    ],
    OtherState: 'Some Other Value'
  });

  const switchNameHandler = () => {

    console.log("Was Clicked");
    //DONT DO THIS :P this.state.persons[0].name = 'Harish'
    this.setPersonsState({
      persons: [
  
        { name: 'Harish', age: 28 },
        { name: 'Manu', age: 28 },
        { name: 'Stephanie', age: 26 },
  
      ]
    });

  // render() {
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react App'))
    return (

      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>SwitchName</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > My hobbies: Racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

      </div>

    );
  // }
}


}


export default app;
