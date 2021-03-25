import express from 'express';

import { getDegrees, createDegree, searchDegrees, updateDegree, getCourses } from '../controllers/degrees.js';

const router = express.Router();

router.get('/', getDegrees);
router.get('/', getCourses);
router.get('/', searchDegrees);
router.post('/', createDegree);
router.patch('/', updateDegree);

export default router;