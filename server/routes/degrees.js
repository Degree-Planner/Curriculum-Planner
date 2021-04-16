import express from 'express';

import { getDegrees, createDegree, updateDegree, getCourses } from '../controllers/degrees.js';

const router = express.Router();

router.get('/', getDegrees);
router.get('/', getCourses);
//router.get('/search', searchDegrees);
router.post('/', createDegree);
router.patch('/:id', updateDegree);

export default router;