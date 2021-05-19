import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './OrderOnlineMenu.css';

class OrderOnlineMenu extends Component {


    render () {
        return (
            <>
            {/* <h1>{this.props.name}</h1> */}
            <div>
                        <Grid item xs={3}>
                            <div className="grid" lexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</div>
                        </Grid>
            </div>


            </>
        )
    }
}

export default connect()(OrderOnlineMenu);