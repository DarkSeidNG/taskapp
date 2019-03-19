import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        const props = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        )
    }
}
