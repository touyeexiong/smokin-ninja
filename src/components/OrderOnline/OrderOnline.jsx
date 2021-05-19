import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu'
import mapStoreToProps from "../../redux/mapStoreToProps"
import Grid from '@material-ui/core/Grid'
import './OrderOnline.css';
import Paper from '@material-ui/core/Paper'

import { connect } from 'react-redux';

class OrderOnline extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }
    render() {

        return (
            <>
                <h1>
                    <Grid classname="grid">
                        {this.props.store.getMenu.map((items) => {
                            return (
                                <>
                                    <Grid item xs={4} className="grid-col">
                                        <Paper>
                                            <OrderOnlineMenu id={items.id} name={items.name} price={items.price} />
                                        </Paper>
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