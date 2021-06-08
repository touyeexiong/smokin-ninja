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
        selected: ''
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
        console.log(`selected state:`, this.state.selected);

    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MENU' });
    }
    render() {

        return (
            <>
                {/* <ToggleButtonGroup
                    value={this.state.date}
                    onChange={this.handleToggleChange}
                    name="date"
                    id="date-select"
                    exclusive={false}
                    size="small">
                    <ToggleButton value="today">Today</ToggleButton>
                    <ToggleButton value="tomorrow">Tomorrow</ToggleButton>
                    <ToggleButton value="week">This week</ToggleButton>
                </ToggleButtonGroup> */}
                    <Grid className="grid-col grid-col_10" container spacing={3}>
                    <ToggleButtonGroup
                        value={this.state.selected}
                        onChange={this.handleSelection}
                        name="selected"
                        id="item-select"
                        exclusive={false}
                        size="medium">
                        <Grid item xs={4} container className="grid-col" spacing={0} direction="column" justify="center" alignItems="center">

                        {this.props.store.getMenu.map((items) => {
                            return (
                                <React.Fragment key={items.id}>
                                        <OrderOnlineMenu  id={items.id} name={items.name} price={items.price} />
                                        {/* <ToggleButton value={items.id}> */}
                                        {/* <div className="grid" key={items.id}>{items.id}</div>
                                            {items.id}
                                        </ToggleButton> */}
                                </React.Fragment>
                            )
                        })}
                        </Grid>
                    </ToggleButtonGroup>

                    </Grid>
                <Button onClick={this.handleCheck}>State Check</Button>
            </>
        )
    }
}

export default connect(mapStoreToProps)(OrderOnline);