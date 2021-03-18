import express from 'express';

import { getDegrees, createDegree, updateDegree } from '../controllers/degrees.js';

const router = express.Router();

router.get('/', getDegrees);
router.post('/', createDegree);
router.patch('/', updateDegree);

export default router;