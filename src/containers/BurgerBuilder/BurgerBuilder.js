import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {


    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const currentQuantity = this.state.ingredients[type];
        const newQuantity = currentQuantity + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newQuantity;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }
    removeIngredientHandler = (type) => {
        const currentQuantity = this.state.ingredients[type];
        if(currentQuantity<1) return;
        let newQuantity = currentQuantity -1
        let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newQuantity;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }
    render() {
        let disabledButtons = {...this.state.ingredients};
        for(let key in disabledButtons){
            disabledButtons[key]  = disabledButtons[key] < 1;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    add={this.addIngredientHandler}
                    remove = {this.removeIngredientHandler}
                    disabled = {disabledButtons}
                    price = {this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;