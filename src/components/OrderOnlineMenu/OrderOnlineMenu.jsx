import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrderOnlineMenu.css';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button'
class OrderOnlineMenu extends Component {
    state = {
        selected: ''
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

    render () {
        return (
            <>

                        <Paper elevation={5}  className="paper">
                            <div className="grid" flexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</div>
                        </Paper>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);