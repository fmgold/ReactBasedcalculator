import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';

class Test extends Component {
    render() {
        return (
            <AppBar position="fixed"
                style={{
                    backgroundColor: '#2f2f2f'
                }}
            >
                Header
            </AppBar>
        )
    }
}

export default Test;
