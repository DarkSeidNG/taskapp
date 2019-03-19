import React, { Component } from 'react';
import Card from './Card';

export default class BottomRightFloatButtonCard extends Component {
    render() {
        const props = this.props;
        return (
            <Card>
                <button onClick={this.props.clickMethod} className="start-button btn btn-success col-md-4 offset-md-8">{props.text}</button>
            </Card>
        )
    }
}
