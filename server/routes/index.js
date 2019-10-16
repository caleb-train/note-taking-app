import express from 'express';
import * as Validators from '../validators';
import * as Controllers from '../controllers';

const router = express.Router();

router.post('/', Validators.createNote, Controllers.createNote);

export default router;
