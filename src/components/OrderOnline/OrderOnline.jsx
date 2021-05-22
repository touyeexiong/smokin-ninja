import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu'
import mapStoreToProps from "../../redux/mapStoreToProps"
import Grid from '@material-ui/core/Grid'
import './OrderOnline.css';
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
                    <Grid className="grid-col grid-col_10" container spacing={3}>

                        {this.props.store.getMenu.map((items) => {
                            return (
                                <>
                                    <Grid item xs={4} container className="grid-col" spacing={0} direction="column" justify="center" alignItems="center">
                                            <OrderOnlineMenu  id={items.id} name={items.name} price={items.price} />
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