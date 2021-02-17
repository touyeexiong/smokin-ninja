import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderOnlineMenu extends Component {
    render () {
        return (
            <>
            <h1>We in OrderOnlineMenu bro</h1>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);