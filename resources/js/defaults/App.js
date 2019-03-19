import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskInstructionsPage from '../pages/TaskInstructionsPage';
import QuestionsPage from '../pages/QuestionsPage';
import TaskCompletePage from '../pages/TaskCompletePage';
import HomePage from '../pages/HomePage';
import CreateTaskPage from '../pages/CreateTaskPage';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/task" component={CreateTaskPage} />
                                <Route exact path="/task/:id" component={TaskInstructionsPage} />
                                <Route exact path="/task/:id/questions" component={QuestionsPage} />
                                <Route exact path="/task/:id/complete" component={TaskCompletePage} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
