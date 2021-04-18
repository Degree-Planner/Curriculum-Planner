import express from 'express';

import { getDegrees, createDegree, updateDegree, getCourses, deleteDegree } from '../controllers/degrees.js';

const router = express.Router();

router.get('/', getDegrees);
router.get('/', getCourses);
//router.get('/search', searchDegrees);
router.post('/', createDegree);
router.patch('/:id', updateDegree);
router.delete('/:id', deleteDegree);

export default router;