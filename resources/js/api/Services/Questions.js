import API from '../Api';

/***
 * This function will be used to make api calls to the questions table
 * @type {{load: (function(): AxiosPromise<any>)}}
 */
export const questions = {
    load: () => API.get('questions'),
};
