import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrderOnlineMenu.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
class OrderOnlineMenu extends Component {
    state = {
        selected: ''
    }

    render () {
        return (
            <>
                <Grid container item xs={12} spacing={3}>
                    <Grid item  xs={4}>
                        <Paper elevation={5} className="paper">
                            {this.props.name} {this.props.price}
                        </Paper>                    
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);