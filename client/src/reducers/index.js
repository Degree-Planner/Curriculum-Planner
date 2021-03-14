import { combineReducers } from 'redux';

import courses from './courses';
import auth from './auth';
import degrees from './degrees';

export const reducers =  combineReducers({ courses, auth, degrees });