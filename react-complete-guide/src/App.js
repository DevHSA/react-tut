import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Persons/Person/Person";
import Persons from './components/Persons/Persons'

class App extends React.Component {
  state = {
    persons: [
      { id: "id1", name: "Max", age: 25 },
      { id: "id2", name: "Manu", age: 22 },
      { id: "id3", name: "Stephanie", age: 28 },
    ],
    otherState: "something else",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    console.log("Index Found Out -->", personIndex);

    const person = [...this.state.persons];
    person[personIndex].name = event.target.value;

    this.setState({
      persons: person,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    let persons = null;
    let buttonClass = "button";

    if (this.state.showPersons) {
      buttonClass = "buttonRed";
      persons = (
        <div>

          <Persons 
          
            persons={this.}
            clicked={}
            changed={}
          
          />

          {/* {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })} */}
        </div>
      );

      // style1.backgroundColor = 'red';
      // style1[':hover'] = {
      //   backgroundColor: 'salmon',
      // color: 'black',
      // }
    }

    //let classes = ['red', 'bold'].join(' ');

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi Harish Here</h1>
        <p>This is really working!</p>
        <button className={buttonClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
