import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './OrderOnlineMenu.css';

class OrderOnlineMenu extends Component {

    handleSelection = () => {
        console.log(`you clicked`, this.props.id);
    }

    render () {
        return (
            <>
                <div>
                    <div onClick={this.handleSelection} className="grid" flexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</div>
                </div>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);