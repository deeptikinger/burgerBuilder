import React from 'react'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/backDrop/backDrop'
import Aux from '../../../hoc/auxiliary'
const sideDrawer =(props)=>{
let attachedClasses=[classes.SideDrawer,classes.Close]
 if(props.open){
  attachedClasses=[classes.SideDrawer,classes.Open]
 }
  return(
    <Aux>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
          <Logo height='11%'/>
          <nav>
              <NavigationItems/>
          </nav>
      </div>
    </Aux>

  )
}  
export default sideDrawer