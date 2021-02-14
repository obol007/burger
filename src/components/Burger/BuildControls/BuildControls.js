import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) =>(
<div className = {classes.BuildControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong>$</p>
{controls.map(control=>(
    <BuildControl 
    key={control.label} 
    label = {control.label} 
    addIngredient = {()=>props.add(control.type)}
    removeIngredient = {()=>props.remove(control.type)} 
    disable = {props.disabled[control.type]}
    />
))}
</div>

);

export default buildControls;