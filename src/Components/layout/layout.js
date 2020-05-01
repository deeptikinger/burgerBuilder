import React,{Component} from 'react'
import Aux from '../../hoc/auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/toolbar/toolbar'
import SideDraw from '../Navigation/SideDrawer/SideDrawer'
 class Layout extends Component{
     state={
         showSideDrawer:true
     }
     sideDrawClosed=()=>{
      this.setState({showSideDrawer:false})
     }

     sideDrawToggle=()=>{
         this.setState((prevState)=>{
           return {showSideDrawer:!this.state.showSideDrawer}
         }
        )
     }
     render(){
         return(<Aux>
            <Toolbar
            drawToggle={this.sideDrawToggle}/>
            <SideDraw 
            open={this.state.showSideDrawer}
            closed={this.sideDrawClosed}/>
             <main className={classes.Content}>
                 {this.props.children}
             </main>
         </Aux>)
        
     }
}

 export default Layout