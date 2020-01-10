import React, { Component } from 'react';

export default class CompClass extends Component {
    render() {
        return(
            <h1>{this.props.valor || '[]'}</h1>
        )
    }
}