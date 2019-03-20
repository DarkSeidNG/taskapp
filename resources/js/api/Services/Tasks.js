import API from '../Api';

/***
 * Function for making api calls for tasks
 * @type {{load: (function(): AxiosPromise<any>), save: (function(*=): AxiosPromise<any>), taskDetails: (function(*): AxiosPromise<any>), answer: (function(*=): AxiosPromise<any>)}}
 */
export const tasks = {
    load: () => API.get('tasks'),
    save: (task) => API.post('tasks/new', task),
    taskDetails: (taskKey) => API.get('tasks/' + taskKey),
    answer: (task) => API.post('tasks/question/answer', task),
    setCompleted: (taskKey) => API.get('tasks/complete/' + taskKey),
    answerDetails: (taskKey) => API.get('tasks/userAnswers/' + taskKey),
};
