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
                    <Grid display="flex" flexWrap="wrap" item xs={4}>
                        <Paper className="paper" flex={1} elevation={5} className="paper">
                            {this.props.name} {this.props.price}
                        </Paper>                    
                    </Grid>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);