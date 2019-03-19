import API from '../Api';

export const questions = {
    load: () => API.get('questions'),
};
