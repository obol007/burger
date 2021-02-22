import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sidedrawer = (props) => {
    let attachClasses = [classes.Sidedrawer, classes.Close];
    if(props.open){
        attachClasses = [classes.Sidedrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    );
};


export default sidedrawer;