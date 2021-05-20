import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './OrderOnlineMenu.css';

class OrderOnlineMenu extends Component {


    render () {
        return (
            <>
                <div>
                    <div className="grid" flexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</div>
                </div>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);