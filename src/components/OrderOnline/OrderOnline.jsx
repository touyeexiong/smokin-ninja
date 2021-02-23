import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu'
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import mapStoreToProps from "../../redux/mapStoreToProps"
import Grid from '@material-ui/core/Grid'

import { connect } from 'react-redux';

class OrderOnline extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }
    render () {
        
        return (
            <>
            <h1>
                <Grid>
                        {this.props.store.getMenu.map((items) => {
                        return (
                            <>
                            <OrderOnline />
                            <div>{items.id}</div>
                            </>
                        )
                    })}
                </Grid>
                we in OrderOnline homie.
            </h1>
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);