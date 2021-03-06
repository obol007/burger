import React from 'react'
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (

    <ul className={classes.NavItems}>
        <NavItem
            link="/" active >BurgerBuilder</NavItem>
        <NavItem link="/checkout" >Checkout</NavItem>
    </ul>
);

export default navItems;