import { Router } from 'express';
import {
	getAllTasks,
	getTaskById,
	createTask,
	deleteTask,
} from '../controllers/tasks.controller.js';

const router = Router();

// Get all tasks
router.get('/', getAllTasks);

// Get single task
router.get('/:id', getTaskById);

// Create task
router.post('/', createTask);

// Delete task
router.delete('/:id', deleteTask);

export default router;
