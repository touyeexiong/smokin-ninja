import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu'
import mapStoreToProps from "../../redux/mapStoreToProps"
import Grid from '@material-ui/core/Grid'
import './OrderOnline.css';
import { connect } from 'react-redux';
class OrderOnline extends Component {
    state = {
        selected: '',
        date: ''
    }

    handleToggleChange = (e, value) => {
        this.setState({
            date: value
        })
        console.log(this.state.date);
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }

    render() {
        return (
            <>
            <div className="grid">
                <div className="grid-col grid-col_8">
                    <Grid container spacing={1}>
                            {this.props.store.getMenu.map((items) => {
                                return (
                                    <div>
                                        <OrderOnlineMenu key={items.id} id={items.id} name={items.name} price={items.price} />
                                    </div>
                                )
                            })}
                    </Grid>
                </div>
            </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);