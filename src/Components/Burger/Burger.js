import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients' 
const burger =(props)=>{
    let tranformedIngredients=Object.keys(props.ingredients)
    .map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=> {
            return <BurgerIngredient key={igkey + i} type={igkey}/>
        })
    }).reduce((arr,elem)=>{
        return arr.concat(elem)
    },[])
    
    if(tranformedIngredients.length===0){
        tranformedIngredients=<p>Please start adding ingredients</p>
    }

   return(
       <div className={classes.Burger}>
       <BurgerIngredient type='bread-top'/>
       {tranformedIngredients}
       <BurgerIngredient type='bread-bottom'/>
       </div>
   )
}
export default burger