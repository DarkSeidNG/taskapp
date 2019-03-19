import React, { Component } from 'react';
import HeaderCard from '../components/HeaderCard';

export default class TaskCompletePage extends Component {
    constructor(props){
        super(props);

    }


    render() {

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
