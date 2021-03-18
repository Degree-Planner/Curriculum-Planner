import express from 'express';

import { authAdmin } from '../controllers/admins.js';

const router = express.Router();

router.post('/', authAdmin);

export default router;