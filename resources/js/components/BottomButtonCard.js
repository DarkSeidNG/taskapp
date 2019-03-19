import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';

export default class BottomButtonCard extends Component {
    render() {
        const props = this.props;
        return (
            <Card>
                <Link to={`/task/${props.taskId}/questions`}><button className="start-button btn btn-success col-md-12">Start Challenge!!</button></Link>
            </Card>
        )
    }
}
