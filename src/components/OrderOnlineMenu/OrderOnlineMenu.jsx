import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrderOnlineMenu.css';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
class OrderOnlineMenu extends Component {
    state = {
        selected: ''
    };

    handleSelection = (e, value) => {
        console.log(`you clicked`, this.props.id);
        this.setState({
            selected: value
        })
        console.log(this.state.selected);
        
    }

    render () {
        return (
            <>
                <ToggleButtonGroup 
                    value={this.state.selected}
                    onChange={this.handleSelection}
                    name="menuitem"
                    id="item-select"
                    exclusive={false} 
                    >
                    <ToggleButton value={this.props.id}>
                        <Paper elevation={5}  className="paper">
                            <div className="grid" flexGrow={1} id={this.props.id}>{this.props.name} {this.props.price}</div>
                        </Paper>
                    </ToggleButton>
            </ToggleButtonGroup>

            </>
        )
    }
}

export default connect()(OrderOnlineMenu);