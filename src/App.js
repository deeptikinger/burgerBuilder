import React ,{Component}from 'react';
import Layout from './Components/layout/layout'
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
