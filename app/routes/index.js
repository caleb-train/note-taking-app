import express from 'express';
import * as Validators from '../validators';
import * as Controllers from '../controllers';

const router = express.Router();

router.get('/notes', Controllers.getNotes);

router.get('/note/:id', Validators.getNote, Controllers.getNote);

router.post('/note', Validators.createNote, Controllers.createNote);

router.patch('/note/:id', Validators.updateNote, Controllers.updateNote);

router.delete('/note/:id', Validators.deleteNote, Controllers.deleteNote);

export default router;
