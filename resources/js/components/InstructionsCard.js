import React, { Component } from 'react';
import Card from './Card';

export default class InstructionsCard extends Component {
    render() {
        const props = this.props;
        return (
            <Card>
                <div className="instructions-title">Instructions</div>
                <ol className="instructions-list">
                    <li>You have {props.multiOptionQuestions} multiple choice questions and {props.freeTextQuestion} free text question.</li>
                    <li>Do not go back after you have left a page.</li>
                    <li>Answer all questions before submitting.</li>
                    <li>Once started, the challenge cannot be stopped and closing your browser or the challenge tab causes the challenge to stop.</li>
                    <li>This challenge is not timed so you can take your time.</li>
                </ol>
            </Card>
        )
    }
}
