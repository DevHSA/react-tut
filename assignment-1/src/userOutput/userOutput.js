import React from 'react';
import './userOutput.css'


const userOutput = (props) => {

    return(
        <div className="userOutput">   
            <p>Some Random text! {props.userName}</p>
            <p>This shall be overwritten</p>
        </div>
    );

}

export default userOutput;
