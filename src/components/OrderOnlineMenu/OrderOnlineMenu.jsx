import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderOnlineMenu extends Component {
    render () {
        return (
            <>
            <h1>{this.props.name}</h1>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);