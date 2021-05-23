import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrderOnlineMenu.css';
import Paper from '@material-ui/core/Paper'
import ToggleButton from '@material-ui/lab/ToggleButton';
class OrderOnlineMenu extends Component {

    handleSelection = () => {
        console.log(`you clicked`, this.props.id);
    }

    render () {
        return (
            <>
                <ToggleButton>
                    <Paper elevation={5} onClick={this.handleSelection} className="paper">
                        <div className="grid" flexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</div>
                    </Paper>
                </ToggleButton>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);