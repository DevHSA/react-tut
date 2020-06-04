import React from 'react';



const userOutput = (props) => {

    return(
        <div>   
            <p>Some Random text! {props.userName}</p>
            <p>This shall be overwritten</p>
        </div>
    );

}

export default userOutput;
