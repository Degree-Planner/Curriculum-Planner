import axios from 'axios';

//const API = axios.create({ baseURL: 'https://csclab.murraystate.edu/csc530/dev'});

const API = axios.create({ baseURL: 'http://localhost:5000'});

//const API = axios.create({ baseURL: 'https://csc530-project.herokuapp.com'});

//export const fetchCourses = () => API.get('/courses');

export const createCourse = (newCourse) => API.post('/courses', newCourse);

export const authAdmin = (email) => API.post('/admins', email);

export const fetchDegrees = () => API.get('/degrees');

//export const fetchSearchDegrees = (degree) => API.get('/searchdegrees', degree);

export const createDegree = (newDegree) => API.post('/degrees', newDegree);

export const updateDegree = (id, updatedDegree) => API.patch(`/degrees/${id}`, updatedDegree);

export const deleteDegree = (id) => API.delete(`/degrees/${id}`);