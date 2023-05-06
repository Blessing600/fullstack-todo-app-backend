import { Router } from 'express';
import {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} from '../controllers/ToDoControllers';

const router = Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.put('/update/:id', updateToDo);
router.delete('/delete/:id', deleteToDo);

export default router;
