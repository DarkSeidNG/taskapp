import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
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
            taskStatus: 'pending',
            redirect: false,
        };

        this.loadTaskDetails = this.loadTaskDetails.bind(this);
        this.processLoadedData = this.processLoadedData.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
    }

    /**
     * Fetch task details when component mounts
     */
    componentDidMount() {
        this.loadTaskDetails();
    }

    /**
     * Method to fetch task details from the remote backend
     */
    loadTaskDetails(){
        const taskKey = this.props.match.params.id;

        tasks.taskDetails(taskKey)
            .then(res => {
                console.log(res.data);
                if (res.data !== null){
                    this.processLoadedData(res.data);
                }
                else{
                    this.setRedirect();
                }
            })
            .catch(err => {
                console.log(err);
                this.setRedirect();
            });
    }

    /**
     * Method to process the data retrieved from the backend and add the required fields to the state
     * @param data - data retrieved from the backend
     */
    processLoadedData(data) {
        const _title = data.task_title;
        const _userName = data.user_name;
        const _taskStatus = data.task_status;
        let _multiOption = 0;
        let _freeText = 0;

        for(let i = 0; i < data.questions.length; i++){
            if(data.questions[i]['question'].question_type === "multi-option"){
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
            taskStatus: _taskStatus,
        })
    }

    setRedirect() {
        this.setState({
            redirect: true
        })
    }

    renderRedirect () {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        const state = this.state;
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <HeaderCard
                    taskTitle={state.title}
                    multiOptionQuestions={state.multiOption}
                    freeTextQuestion={state.freeText}
                    taskStatus={state.taskStatus}/>

                <InstructionsCard
                    multiOptionQuestions={state.multiOption}
                    freeTextQuestion={state.freeText}/>

                <BottomButtonCard
                    taskId = {this.props.match.params.id}/>

            </React.Fragment>
        );
    }
}
