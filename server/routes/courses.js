import express from 'express';

import { getCourses,  createCourses, updateCourse } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourses);
router.patch('/:id', updateCourse);

export default router;