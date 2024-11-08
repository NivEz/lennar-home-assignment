// In-memory task storage
// If I had more time I would use a database (probably mongo with mongoose)
let tasks = [];

// Get all tasks
export const getAllTasks = (req, res) => {
	res.send(tasks);
};

// Get single task
export const getTaskById = (req, res) => {
	const task = tasks.find(t => t.id === parseInt(req.params.id));
	if (!task) return res.status(404).send('Task not found');
	res.send(task);
};

// Create task
export const createTask = (req, res) => {
	const task = {
		id: Date.now(),
		name: req.body.taskName,
	};
	tasks.push(task);
	res.send(task);
};

// Delete task
export const deleteTask = (req, res) => {
	const task = tasks.find(t => t.id === parseInt(req.params.id));
	if (!task) return res.status(404).send('Task not found');

	const index = tasks.indexOf(task);
	tasks.splice(index, 1);

	res.send(task);
};
