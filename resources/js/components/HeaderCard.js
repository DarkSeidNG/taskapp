import React, { Component } from 'react';
import icon_task from '../../img/icon_task.png';

export default class HeaderCard extends Component {
    render() {
        const props = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="title">TASK APP</div>
                    <div className="task-title">{props.taskTitle}</div>
                    <div className="task-details">
                        <div className="task-details-item">
                            <img height="17" src={icon_task} /> <span className="option-total">{props.multiOptionQuestions}</span> Multiple Choice Questions
                        </div>
                        <div className="task-details-item">
                            <img height="17" src={icon_task} /> <span className="option-total">{props.freeTextQuestion}</span> Free-Text Question
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
