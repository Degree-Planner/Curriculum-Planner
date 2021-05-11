import axios from 'axios';

const API = axios.create({ baseURL: 'https://csc530-project.herokuapp.com/'});

export const createCourse = (newCourse) => API.post('/courses', newCourse);

export const authAdmin = (email) => API.patch('/admins', email);

export const fetchDegrees = () => API.get('/degrees');

export const createDegree = (newDegree) => API.post('/degrees', newDegree);

export const updateDegree = (id, updatedDegree) => API.patch(`/degrees/${id}`, updatedDegree);

export const deleteDegree = (id) => API.delete(`/degrees/${id}`);

export const createAdmin = (newAdmin) => API.post(`/admins`, newAdmin);