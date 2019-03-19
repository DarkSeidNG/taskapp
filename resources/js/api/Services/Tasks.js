import API from '../Api';

export const tasks = {
    load: () => API.get('tasks'),
    save: (task) => API.post('tasks/new', task),
    taskDetails: (taskKey) => API.get('tasks/' + taskKey),
    answer: (task) => API.post('tasks/question/answer', task),
};
