import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrderOnlineMenu.css';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
class OrderOnlineMenu extends Component {
    state = {
        selected: "",
    };

    handleSelection = () => {
        console.log(`you clicked`, this.props.id);
        // if (this.state.selected = '') {
        //     this.setState({
        //         selected: 'selected'
        //     })
        // } else {
        //     this.setState({
        //         selected: ''
        //     })
        // }
        this.setState({
            selected: "apples"
        })
        console.log(this.state.selected);
        
    }

    render () {
        return (
            <>
            <ToggleButtonGroup  onClick={this.handleSelection} value={this.state.selected}>
                    <ToggleButton value="apples">
                    Testing
                </ToggleButton>
                
            </ToggleButtonGroup>
                <ToggleButton onClick={this.handleSelection}>
                    <Paper elevation={5} onClick={this.handleSelection} className="paper">
                        <div className="grid" flexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</div>
                    </Paper>
                </ToggleButton>
            </>
        )
    }
}

export default connect()(OrderOnlineMenu);