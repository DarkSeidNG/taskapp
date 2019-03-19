import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import banner from '../../img/banner-tasks.png';
import {questions} from '../api/Services/Questions';
import {tasks} from '../api/Services/Tasks';
import swal from "sweetalert";

export default class CreateTaskPage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            questions: [],
            task: {
                user_email: '',
                user_name: '',
                task_title: '',
                questions: [],
            },
            submitting: false
        };

        this.loadFromApi = this.loadFromApi.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onSubmitTask = this.onSubmitTask.bind(this);
        this.resetDefault = this.resetDefault.bind(this);
    }

    componentDidMount() {
        this.loadFromApi();
    }

    loadFromApi(){
        questions.load()
            .then(res => {
                console.log(res.data);
                this.setState({questions : res.data});
            })
            .catch(err => {
                console.log(err);
            });
    }

    onChange(e) {
        const { task } = { ...this.state };
        const currentState = task;
        const { name, value } = e.target;
        currentState[name] = value;

        this.setState({ task: currentState });
    }

    onCheckboxChange(e) {
        const questionId = e.target.value;
        this.state.task.questions.push(questionId);
        this.setState(this.state);
    }

    onSubmitTask(e) {
        e.preventDefault();

        console.log(this.state.task);
        const task = this.state.task;
        if (task.questions.length === 0){
            alert("Please add questions to this task");
        }
        else if(!this.validateEmail(task.user_email)){
            alert("Enter a valid email address");
        }
        else{
            tasks.save(task)
                .then(res => {
                    console.log(res.data);
                    if (res.data.status === "success"){
                        this.handleShowModal("Task Created", res.data.message, res.data.status );
                        this.resetDefault();
                    }
                    else {
                        this.handleShowModal("Error", res.data.message, res.data.status );
                    }

                })
                .catch(err => {
                    console.log(err);
                });
        }

    }

    validateEmail (email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
    }

    resetDefault(){
        this.setState ({
            task: {
                user_email: '',
                user_name: '',
                task_title: '',
                questions: [],
            }
        });
    }

    handleShowModal(title, message, status) {
        swal(title, message, status);
    }

    render() {
        const state = this.state;
        return (
            <React.Fragment>
                <Link to="/"><img src={banner} width="100%" /></Link>
                <Card>
                    <div className="title-centered">Create new task</div>
                </Card>

                <form className="md-float-material form-material" onSubmit={this.onSubmitTask}>
                    <Card>

                        <div className="form-group form-primary">
                            <label>Task Title</label>
                            <input
                                type="text"
                                name="task_title"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={state.task.task_title}/>
                        </div>

                        <div className="form-group form-primary">
                            <label>User Name</label>
                            <input
                                type="text"
                                name="user_name"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={state.task.user_name}/>
                        </div>

                        <div className="form-group form-primary">
                            <label>User Email</label>
                            <input
                                type="text"
                                name="user_email"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={state.task.user_email}/>
                        </div>

                        <h4>Select Questions</h4>
                        <hr/>
                        {state.questions.map(question => {
                            return (
                                <div className="form-group form-primary" key={question.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="questions[]"
                                            value={question.id}
                                            onChange={this.onCheckboxChange}
                                        />
                                        {question.question} - ({question.question_type})
                                        </label>
                                </div>
                            )
                        })}


                    </Card>

                    <Card>
                        <button type="submit" className="start-button btn btn-success col-md-12">Save task</button>
                    </Card>
                </form>
            </React.Fragment>
        );
    }
}
