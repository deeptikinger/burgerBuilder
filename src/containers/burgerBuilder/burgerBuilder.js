import React,{Component} from 'react'
import Aux from '../../hoc/auxiliary'
import Burger from '../../Components/Burger/Burger'
import  BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES={
    salad:0.4,
    cheese:0.6,
    meat:1.3,
    bacon:1.6
};

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            meat:0,
            cheese:0
        },
        totalPrice:5,
        purchaseAble:false,
        purchasing:false
    }
    updatePurchase(ingredients){
     const sum=Object.keys(ingredients)
            .map(igKey=>{
                const returnValue= ingredients[igKey]
                return returnValue
            })
            .reduce((sum,elm)=>{
                return sum+elm;
            },0)
        this.setState({purchaseAble:sum>0})    
    }

    addIngredients=(type)=>{
     const oldCount=this.state.ingredients[type]
     const updateCount=oldCount+1
     const updateIngredients={
         ...this.state.ingredients
     }
     updateIngredients[type]=updateCount
     const priceAddition=INGREDIENTS_PRICES[type]
     const oldPrice=this.state.totalPrice
     const newPrice=oldPrice+priceAddition
     this.setState({totalPrice:newPrice,ingredients:updateIngredients})
     this.updatePurchase(updateIngredients)
   }

    removeIngredients=(type)=>{
      
        const oldCount=this.state.ingredients[type]
        if(oldCount<=0){
          return ;
        }
        const updateCount=oldCount-1
        const updateIngredients={
            ...this.state.ingredients
        }
        updateIngredients[type]=updateCount
        const priceDeduction=INGREDIENTS_PRICES[type]
        const oldPrice=this.state.totalPrice
        const newPrice=oldPrice-priceDeduction
        this.setState({totalPrice:newPrice,ingredients:updateIngredients})
      }

      purchaseHandler=()=>{
          this.setState({purchasing:true})
      }
      purchaseContinueHandler=()=>{
          alert('You continue')
      }
      purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return(
        <Aux>
         <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
             <OrderSummary ingredients={this.state.ingredients}
             price={this.state.totalPrice}
             purchaseCancel={this.purchaseCancelHandler}
             purchaseContinue={this.purchaseContinueHandler}/>
         </Modal>
         
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
          ingredientAdded={this.addIngredients}
          ingredientRemove={this.removeIngredients}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseAble={this.state.purchaseAble}
          ordered={this.purchaseHandler}/>
        </Aux>
        )
    }
}
export default BurgerBuilder