import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu'
import mapStoreToProps from "../../redux/mapStoreToProps"
import Grid from '@material-ui/core/Grid'
import './OrderOnline.css';

import { connect } from 'react-redux';

class OrderOnline extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }
    render () {
        
        return (
            <>
            <h1>
                <Grid classname="grid">
                        {this.props.store.getMenu.map((items) => {
                        return (
                            <>
                                <Grid  className="grid-col">
                            <OrderOnlineMenu id={items.id} name={items.name} price={items.price}/>
                                </Grid>
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