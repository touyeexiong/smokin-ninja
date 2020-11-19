import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

class OrderOnline extends Component {
    render () {
        return (
            <>
            <h1>
                we in OrderOnline homie.
            </h1>
            </>
        )
    }
}

export default connect()(OrderOnline);