import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

class Menu extends Component {
    render () {
        return (
            <>
            <h1> We In Menu </h1>
            </>
        )
    }
}

export default connect()(Menu);