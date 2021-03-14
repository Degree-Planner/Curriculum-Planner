import express from 'express';

import { getDegrees } from '../controllers/degrees.js';

const router = express.Router();

router.get('/', getDegrees);

export default router;