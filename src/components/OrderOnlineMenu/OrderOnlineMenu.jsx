import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrderOnlineMenu.css';
import Paper from '@material-ui/core/Paper'

class OrderOnlineMenu extends Component {

    handleSelection = () => {
        console.log(`you clicked`, this.props.id);
    }

    render () {
        return (
            <>
                <Paper elevation={4} onClick={this.handleSelection} className="paper">
                    <div className="grid" flexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</div>
                </Paper>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);