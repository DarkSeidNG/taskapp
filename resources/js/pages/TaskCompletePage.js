import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderCard from '../components/HeaderCard';
import FreeTextQuestion from '../components/FreeTextQuestion';
import MultipleOptionsQuestion from '../components/MultipleOptionsQuestion';
import BottomRightFloatButtonCard from '../components/BottomRightFloatButtonCard';

export default class TaskCompletePage extends Component {
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
        };

        this.onNextClick = this.onNextClick.bind(this);
    }

    componentDidMount(){
        for (let i = 0; i < 10; i++){
            this.setState({
                questions: [
                    {
                        question: "What is your name?",
                        question_type: "multi-option",
                        options: [
                            {
                                id: 1,
                                option: "opos"
                            },
                            {
                                id: 2,
                                option: "bravos"
                            }]
                    },
                    {
                        question: "What is your fathers name?",
                        question_type: "multi-option",
                        options: [
                            {
                                id: 1,
                                option: "kikus"
                            },
                            {
                                id: 2,
                                option: "fructas"
                            }]
                    },
                    {
                        question: "What is your mothers full name?",
                        question_type: "free-text",
                    }
                ]
            })
        }
    }

    onNextClick(){
        if (this.state.questions.length > (this.state.question_index + 1)){
            this.setState({
                ...this.state,
                question_index: this.state.question_index + 1,
                can_next: true,
            });
        }
        else{
            this.setState({
                ...this.state,
                can_next: false,
            });
        }

    }

    render() {
        const selectedQuestion = this.state.questions[this.state.question_index];
        return (
            <React.Fragment>
                <HeaderCard
                    taskTitle="Senior Software Developer"
                    multiOptionQuestions="3"
                    freeTextQuestion="1"/>
            </React.Fragment>
        );
    }
}
