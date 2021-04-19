import express from 'express';

import { authAdmin, createAdmin } from '../controllers/admins.js';

const router = express.Router();

router.patch('/', authAdmin);
router.post('/', createAdmin)

export default router;