import React from 'react'
import burgerLogo from '../../assessts/images/logo.png'
import classes from './logo.module.css'
const logo=(props)=>(
   <div className={classes.Logo} style={{height:props.height}}>
       <img src={burgerLogo} alt="my burger"/>
   </div>
)
export default logo