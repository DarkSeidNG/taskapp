import React, { Component } from 'react';
import Card from './Card';

export default class MultipleOptionsQuestion extends Component {
    render() {
        const props = this.props;
        return (
            <Card>
                <div className="question-container">
                    <span className="question-number">{props.questionNumber}.) </span>
                    <span className="question"> {props.question} </span>

                    {props.options.map((option, idx) => {
                        return (
                            <div className="radio" key={idx}>
                                <label>
                                    <input type="radio" name="answer-option" value={option.id}/>
                                    {option.option}
                                </label>
                            </div>
                        )

                    })}

                </div>
            </Card>
        )
    }
}
