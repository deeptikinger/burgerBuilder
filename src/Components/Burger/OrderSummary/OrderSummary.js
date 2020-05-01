import React from 'react'
import Aux from '../../../hoc/auxiliary'
import Button from '../../UI/Button/button'

const orderSummary=(props)=>{
    const ingredientsSummary=Object.keys(props.ingredients)
    .map(igKey=>{
    return <li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
        </li>
    })
    return (
        <Aux>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients:</p>    
          <ul>
             {ingredientsSummary}
          </ul>
          <p><strong>TOTAL PRICE:{props.price.toFixed(2)}</strong></p>
          <p>Continue to CheckOut .....</p>
          <Button ButtonType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
          <Button ButtonType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )

}

export default orderSummary