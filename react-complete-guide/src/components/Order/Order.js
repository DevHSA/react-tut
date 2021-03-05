import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {

    let ingredientsArray = Object.keys(props.ingredients).map(item => {
        
        return { ingredient: item, value: props.ingredients[item]}
    
    })

    console.log(ingredientsArray)
    return(

        <div className={classes.Order}>
            <p>Ingredients: 
            {
                ingredientsArray.map(item=> {

                    return <span key={item.ingredient} style={{textTransform: 'capitalize', display:'inline-block', margin:'0 8px', border: '1px solid #ccc', padding: '5px' }}>{item.ingredient}  ({item.value})</span>;
                })

            }
            </p>
            <p>Price: <strong>Rupees {Number.parseFloat(props.price).toFixed(2)}</strong></p> 
        </div>

    );

}

export default Order;