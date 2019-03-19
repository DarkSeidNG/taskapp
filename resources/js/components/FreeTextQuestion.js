import React, { Component } from 'react';
import Card from './Card';

export default class FreeTextQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange (e) {
        this.props.onAnswerChanged(e.target.value);
    }

    render() {
        const props = this.props;
        return (
            <Card>
                <div className="question-container">
                    <span className="question-number">{props.questionNumber}.) </span>
                    <span className="question"> {props.question} </span>

                    <div className="radio">
                        <textarea className="form-control" name="free-text-answer" onChange={this.handleTextChange}/>
                    </div>
                </div>
            </Card>
        )
    }
}
