import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

class OrderOnlineMenu extends Component {


    render () {
        return (
            <>
            {/* <h1>{this.props.name}</h1> */}
            <div>
                        <Grid item xs={3}>
                            <Paper flexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</Paper>
                        </Grid>
            </div>


            </>
        )
    }
}

export default connect()(OrderOnlineMenu);