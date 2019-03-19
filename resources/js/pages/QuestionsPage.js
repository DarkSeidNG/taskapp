import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderCard from '../components/HeaderCard';
import FreeTextQuestion from '../components/FreeTextQuestion';
import MultipleOptionsQuestion from '../components/MultipleOptionsQuestion';
import BottomRightFloatButtonCard from '../components/BottomRightFloatButtonCard';
import {tasks} from "../api/Services/Tasks";
import swal from "sweetalert";

export default class QuestionsPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            questions: [
                {
                    question: "",
                    question_type: "",
                }
            ],
            question_index: 0,
            can_next: true,
            title: '',
            userName: '',
            multiOption: 0,
            freeText: 0,
            lastAnswer: '',
        };

        this.onNextClick = this.onNextClick.bind(this);
        this.loadTaskDetails = this.loadTaskDetails.bind(this);
        this.processLoadedData = this.processLoadedData.bind(this);
        this.onAnswerChange = this.onAnswerChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    /**
     * Fetch task details when component mounts
     */
    componentDidMount(){
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
            })
            .catch(err => {
                console.log(err);
            });
    }

    /**
     * Method to process the data retrieved from the backend and add the required fields to the state
     * @param data - data retrieved from the backend
     */
    processLoadedData(data) {
        const _title = data.task_title;
        const _userName = data.user_name;
        let _multiOption = 0;
        let _freeText = 0;
        const _questions = data.questions;

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
            questions: _questions,
        })
    }


    /**
     * Method called when save and continue button is clicked
     */
    onNextClick(){
        if(this.state.lastAnswer !== ''){
            const userAnswer = {
                task_question_id: this.state.questions[this.state.question_index].id,
                answer_type: this.state.questions[this.state.question_index]['question'].question_type,
                answer: this.state.lastAnswer,
            };
            tasks.answer(userAnswer)
                .then(res => {
                    console.log(res.data);
                    if (res.data.status === "success"){
                        this.handleNext(res.data);
                    }
                    else if(res.data.status === "error"){
                        this.handleShowModal("Answer Saved", res.data.message, res.data.status);
                    }
                })
                .catch(err => {
                    console.log(err);
                });


        }
        else{
            alert("Please answer the question before saving");
        }
    }

    /**
     * Show modal
     * @param title
     * @param message
     * @param status
     */
    handleShowModal(title, message, status) {
        swal(title, message, status);
    }

    /**
     * Method to handle moving to the next question after one has been submitted successfully
     * @param data
     */
    handleNext(data){
        if (this.state.questions.length > (this.state.question_index + 1)){
            this.setState({
                ...this.state,
                question_index: this.state.question_index + 1,
                can_next: true,
                lastAnswer:'',
            });
            this.handleShowModal("Answer Saved", data.message, data.status);
        }
        else{
            this.setState({
                ...this.state,
                can_next: false,
            });
        }
    }

    /**
     * Method to handle answer change from the MultipleOptionsQuestion and FreeTextQuestion components
     * @param answer
     */
    onAnswerChange(answer) {
        this.setState({
            ...this.state,
            lastAnswer: answer,
        });

        console.log(answer);
    }

    render() {
        const selectedQuestion = this.state.questions[this.state.question_index]['question'];
        const state = this.state;
        return (
            <React.Fragment>
                <HeaderCard
                    taskTitle={state.title}
                    multiOptionQuestions={state.multiOption}
                    freeTextQuestion={state.freeText}/>

                {selectedQuestion.question_type === "multi-option" ?
                    (
                        <MultipleOptionsQuestion
                                                 questionNumber={this.state.question_index + 1}
                                                 question={selectedQuestion.question}
                                                 options={selectedQuestion.question_options}
                                                 onOptionSelected={this.onAnswerChange}/>
                    ) :
                    (
                        <FreeTextQuestion
                                          questionNumber={this.state.question_index + 1}
                                          question={selectedQuestion.question}
                                          onAnswerChanged={this.onAnswerChange}/>
                    )
                }

                {this.state.can_next?
                    (
                        <BottomRightFloatButtonCard
                            text="Save & Continue"
                            clickMethod={this.onNextClick}/>
                    ) : (
                        <BottomRightFloatButtonCard
                            text="Finish"
                            clickMethod={this.onNextClick}/>
                    )
                }

            </React.Fragment>
        );
    }
}
