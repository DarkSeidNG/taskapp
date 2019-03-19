import API from '../Api';

export const tasks = {
    load: () => API.get('tasks'),
    save: (task) => API.post('tasks/new', task),
};
