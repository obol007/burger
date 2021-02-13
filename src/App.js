import React, { Component } from 'react';
import './index.css';
import Layout from './components/Layout/Layout';
import Burger from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

  render() {
    return (
      <Layout>
        <Burger/>
      </Layout>
    );
  }
}

export default App;
