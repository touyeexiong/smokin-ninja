import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu'
import mapStoreToProps from "../../redux/mapStoreToProps"
import Grid from '@material-ui/core/Grid'
import './OrderOnline.css';
import Paper from '@material-ui/core/Paper'

import { connect } from 'react-redux';

class OrderOnline extends Component {

    handleSelection = () => {
        console.log(`you clicked`, this.props.id);
    }
    

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }
    render() {

        return (
            <>
                <h1>                we in OrderOnline homie.
            </h1>
                    <Grid classname="grid" container spacing={3}>
                        {this.props.store.getMenu.map((items) => {
                            return (
                                <>
                                    <Grid item xs={4} container className="grid-col" spacing={0} direction="column" justify="center" alignItems="center">
                                        {/* <Paper className="paper" onClick={this.handleSelection}> */}
                                            <OrderOnlineMenu  id={items.id} name={items.name} price={items.price} />
                                        {/* </Paper> */}
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>

            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);