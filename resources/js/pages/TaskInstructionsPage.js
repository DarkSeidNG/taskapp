import React, { Component } from 'react';
import HeaderCard from '../components/HeaderCard';
import InstructionsCard from '../components/InstructionsCard';
import BottomButtonCard from '../components/BottomButtonCard';
import {tasks} from "../api/Services/Tasks";

export default class TaskInstructionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            userName: '',
            multiOption: 0,
            freeText: 0,
        };

        this.loadTaskDetails = this.loadTaskDetails.bind(this);
        this.processLoadedData = this.processLoadedData.bind(this);
    }

    componentDidMount() {
        this.loadTaskDetails();
    }

    loadTaskDetails(){
        const taskKey = this.props.match.params.id;

        tasks.taskDetails(taskKey)
            .then(res => {
                console.log(res.data);
                if (res.data !== null){
                    this.processLoadedData(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    processLoadedData(data) {
        const _title = data.task_title;
        const _userName = data.user_name;
        let _multiOption = 0;
        let _freeText = 0;

        for(let i = 0; i < data.questions.length; i++){
            if(data.questions[i].question_type === "multi-option"){
                _multiOption += 1;
            }
            else{
                _freeText += 1;
            }
        }

        this.setState({
            title: _title,
            userName: _userName,
            multiOption: _multiOption,
            freeText: _freeText,
        })
    }

    render() {
        const state = this.state;
        return (
            <React.Fragment>
                <HeaderCard
                    taskTitle={state.title}
                    multiOptionQuestions={state.multiOption}
                    freeTextQuestion={state.freeText}/>

                <InstructionsCard
                    multiOptionQuestions={state.multiOption}
                    freeTextQuestion={state.freeText}/>

                <BottomButtonCard
                    taskId = {this.props.match.params.id}/>

            </React.Fragment>
        );
    }
}
