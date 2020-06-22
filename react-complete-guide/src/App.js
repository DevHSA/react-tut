import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'

import './App.css';
import Person from './Person/Person'

const StyledButton = styled.button`
      
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }

`;

class App extends React.Component {

  state = { 
    persons: [
      { id: 'id1', name: 'Max', age: 25 },
      { id: 'id2', name: 'Manu', age: 22 },
      { id: 'id3', name: 'Stephanie', age: 28 }
    ],
    otherState: 'something else',
    showPersons: false
  }


  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p => p.id === id);
    console.log("Index Found Out -->", personIndex);

    const person = [...this.state.persons]
    person[personIndex].name = event.target.value;

    this.setState({
      persons: person,
    })
  
  
    }

  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons })

  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render () {

    const style1 = {

      
      
      }

  

    let persons = null;

    if(this.state.showPersons){

      persons = (
      <div>
        
        { 
          this.state.persons.map( (person,index) => {

          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event,person.id)}
            />

        })}

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

      if(this.state.persons.length <= 2){
        classes.push('red');
      }

      if(this.state.persons.length <= 1){
        classes.push('bold');
      }


    return(

      
      <div className="App" >

      
        <h1>Hi Harish Here</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton 
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>
          {persons}
      </div>
      
    )
  }
}


export default App;


/*

const app = props => {

  const [ personsState, setPersonsState ] = useState({
    
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 28 },
      { name: 'Stephanie', age: 28 },
    ],
   
  });
  
  const [otherState,setOtherState] = useState('some other value');
  console.log(personsState,otherState);



  const switchNameHandler = () => {

    console.log("Was Clicked")
    //DONT DO THIS :P this.state.persons[0].name = 'Harish'
    setPersonsState({
      persons: [
  
        { name: 'Harish', age: 28 },
        { name: 'Manu', age: 28 },
        { name: 'Stephanie', age: 26 },
        
      ],
    

    });

  
}
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

export default app;
*/