import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


class App extends Component {


  state = { 
    persons: [
      { name: 'harish', age: 25 },
      { name: 'shalu', age: 22 },
      { name: 'someone', age: 28 }
    ],
    otherState: 'something else'
  }

  

  switchNameHandler = (nameClicked) => {
     this.setState({
      persons: [
        { name: nameClicked, age: 25 },
        { name: 'shaluaaaaa', age: 223 },
        { name: 'someonedasdsadsad', age: 28 }
      ],

     })

  }

  nameChangedHandler = (event) => {

    this.setState({
      persons: [
        { name: 'Max', age: 25 },
        { name: event.target.value, age: 223 },
        { name: 'someonedasdsadsad', age: 28 }
      ],

     })

  }


  render () {
    return(

      <div className="App" >
        <h1>Hi Harish Here</h1>
        <p>This is really working!</p>
        <button onClick={ this.switchNameHandler.bind(this, 'Good') }>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].name} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].name} 
          click={this.switchNameHandler.bind(this, 'iggregious')}
          changed={this.nameChangedHandler}> Something in between </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].name} />
      </div>
    )
  }


}


export default App


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