import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderCard from '../components/HeaderCard';
import InstructionsCard from '../components/InstructionsCard';
import BottomButtonCard from '../components/BottomButtonCard';

export default class TaskInstructionsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderCard
                    taskTitle="Senior Software Developer"
                    multiOptionQuestions="3"
                    freeTextQuestion="1"/>

                <InstructionsCard
                    multiOptionQuestions="3"
                    freeTextQuestion="1"/>

                <BottomButtonCard
                    taskId = {this.props.match.params.id}/>

            </React.Fragment>
        );
    }
}
