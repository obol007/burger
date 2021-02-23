import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((previousState) => { 
            return {showSideDrawer: !previousState.showSideDrawer }
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
                <Sidedrawer
                    closed={this.sideDrawerCloseHandler}
                    open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >
        )
    };
};

export default Layout;