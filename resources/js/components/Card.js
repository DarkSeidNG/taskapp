import React, { Component } from 'react';

/***
 * The card parent class that will be used to wrap all content that needs to be in cards
 */
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
