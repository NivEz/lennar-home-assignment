import express, { json } from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks.router.js';

const app = express();
const port = 3000;

// Middleware
app.use(json());
const corsOptions = {
	origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

// Routes
app.use('/tasks', tasksRouter);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
