import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

export const fetchCourses = () => API.get('/courses');

export const createCourse = (newCourse) => API.post('/courses', newCourse);

export const authAdmin = (email) => API.post('/admins', email);