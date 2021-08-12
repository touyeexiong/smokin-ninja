import React, { Component } from 'react';
import OrderOnlineMenu from '../OrderOnlineMenu/OrderOnlineMenu'
import mapStoreToProps from "../../redux/mapStoreToProps"
import Grid from '@material-ui/core/Grid'
import './OrderOnline.css';
import { connect } from 'react-redux';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from "@material-ui/core/Button"

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

    handleSelection = (e, value) => {
        this.setState({
            selected: value
        })
        console.log(this.state.selected);

    }

    handleCheck = () => {
        console.log(`selected state:`, this.state);

    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }

    render() {


        return (
            <>
                <Button onClick={this.handleCheck}>State Check</Button>

                    <Grid className="grid-col grid-col_10" container spacing={3}>

                        {this.props.store.getMenu.map((items) => {
                            return (
                                <div key={items.id} value={items.id}>
                                        <OrderOnlineMenu  id={items.id} name={items.name} price={items.price} />

                                </div>
                            )
                        })}

                    </Grid>
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);