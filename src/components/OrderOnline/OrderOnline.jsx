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
                <ToggleButtonGroup
                    value={this.state.date}
                    onChange={this.handleToggleChange}
                    name="date"
                    id="date-select"
                    exclusive={false}
                    size="small">
                    <ToggleButton value="today">Today</ToggleButton>
                    <ToggleButton value="tomorrow">Tomorrow</ToggleButton>
                    <ToggleButton value="week">This week</ToggleButton>
                </ToggleButtonGroup>
                    <Grid className="grid-col grid-col_10" container spacing={3}>
                    <ToggleButtonGroup
                        value={this.state.selected}
                        onChange={this.handleSelection}
                        name="selected"
                        id="item-select"
                        exclusive={false}
                        size="medium">
                        {this.props.store.getMenu.map((items) => {
                            return (
                                <div key={items.id} value={items.id}>
                                        {/* <OrderOnlineMenu  id={items.id} name={items.name} price={items.price} /> */}
                                        <ToggleButton value={items.id}>
                                        <div className="grid">{items.id}</div>
                                        </ToggleButton>
                                </div>
                            )
                        })}
                        <div value="Testing"><ToggleButton value="Testing">Testing</ToggleButton>
</div>

                    </ToggleButtonGroup>

                    </Grid>
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);