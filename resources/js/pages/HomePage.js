import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import banner from '../../img/banner-tasks.png';

export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={banner} width="100%" />
                <Card>
                    <div className="title-centered">TASK APP</div>
                </Card>

                <Card>
                    <div className="welcome-body">
                        Welcome to Task App.
                        <br/>
                        Easily create tasks and send to potential or current employees
                    </div>
                </Card>

                <Card>
                    <Link to={`/task`}><button className="start-button btn btn-success col-md-12">Create Task</button></Link>
                </Card>
            </React.Fragment>
        );
    }
}
