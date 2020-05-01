import React from 'react'
import classes from './toolbar.module.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle'
const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <DrawToggle clicked={props.drawToggle}/>
        <Logo height='80%'/>
        <nav className={classes.DesktopOnly}>
          <NavigationItems/>
        </nav>
    </header>
)
export default toolbar