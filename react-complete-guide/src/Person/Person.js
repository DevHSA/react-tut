import React from 'react'
import Styled from 'styled-components'

//import './Person.css'

const person = (props) => {

    const StyledDiv = Styled.div`
    
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    margin-top: 10px;


@media (min-width: 500px) {

        width: 450px;

    `;

    const style={
        '@media (min-width: 500px)': {
            width: '450px',
        }
    };


    return (
        // <div className="Person" style={style}>

       
        
        
        
        <StyledDiv>
        <p onClick={props.click}>I'm a {props.name} person and i am {props.age} years old! {}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            </StyledDiv>
    )
}

export default person;

