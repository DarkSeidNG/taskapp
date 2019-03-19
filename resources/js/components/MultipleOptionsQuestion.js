import React, { Component } from 'react';
import Card from './Card';

export default class MultipleOptionsQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        };

        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange (e) {
        this.setState({
            selectedOption: e.target.value
        });
        this.props.onOptionSelected(e.target.value);
    }

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
                                    <input
                                        type="radio"
                                        name="answer-option"
                                        onChange={this.handleOptionChange}
                                        checked={this.state.selectedOption == option.id}
                                        value={option.id}/>
                                    &emsp;{option.question_option}
                                </label>
                            </div>
                        )

                    })}

                </div>
            </Card>
        )
    }
}
