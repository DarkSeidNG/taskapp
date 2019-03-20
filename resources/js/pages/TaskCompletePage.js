import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Card from "../components/Card";
import {tasks} from "../api/Services/Tasks";
import banner from "../../img/banner-tasks.png";

export default class TaskCompletePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            redirect: false,
            taskDetails: [],
        };

        this.renderRedirect = this.renderRedirect.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.processTaskDetails = this.processTaskDetails.bind(this);
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

        tasks.answerDetails(taskKey)
            .then(res => {
                console.log(res.data);
                if (res.data !== null){
                    this.setState({
                        userName: res.data.task.user_name,
                    });
                    this.processTaskDetails(res.data.details);
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

    /***
     * Organise the data retrieved from the backend
     * and add the clean data to the taskDetails state
     * @param details
     */
    processTaskDetails(details) {
        for (let i = 0; i < details.length; i++){
            const question = details[i].question.question;
            let status = "pending";
            
            if (details[i].question.question_type === "multi-option"){
                if(details[i].question.question_real_answer.question_option_id === details[i].users_answer.selected_question_option_id){
                    status = "passed";
                }
                else{
                    status = "failed";
                }
            }

            const detailsJsx = <div>{question} <span className={status}>({status})</span></div>;

            this.state.taskDetails.push(detailsJsx);
            this.setState(this.state);

        }
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
                <img src={banner} width="100%" />
                <Card>
                    Hello <strong>{this.state.userName}</strong>
                    <br/>
                    Thanks for completing this challenge, the admin will contact you with results soon.
                </Card>
                {state.taskDetails.map((detail, idx) => {
                    return (
                        <Card key={idx}>
                            <strong>{detail}</strong>
                        </Card>
                    )
                })}
            </React.Fragment>
        );
    }
}
