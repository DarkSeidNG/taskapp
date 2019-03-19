import React, { Component } from 'react';
import Card from './Card';

export default class FreeTextQuestion extends Component {
    render() {
        const props = this.props;
        return (
            <Card>
                <div className="question-container">
                    <span className="question-number">{props.questionNumber}.) </span>
                    <span className="question"> {props.question} </span>

                    <div>
                        <textarea className="form-control" name="free-text-answer"/>
                    </div>
                </div>
            </Card>
        )
    }
}
