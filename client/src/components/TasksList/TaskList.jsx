import { useState } from 'react';
import { AddTaskDialog } from '../AddTaskDialog/AddTaskDialog';
import { TaskItem } from '../TaskItem/TaskItem';
import useFetch from '../../hooks/useFetch';

export const TaskList = () => {
	// const { data, loading, error } = useFetch('http://localhost:3000');
	const [tasks, setTasks] = useState([]);

	const addTask = async taskName => {
		const res = await fetch('http://localhost:3000');
		const data = await res.json();
		console.log(data);
		// setTasks([...tasks, { name: taskName }]);
	};

	return (
		<>
			<AddTaskDialog action={addTask} />
			{tasks.map(task => (
				<TaskItem name={task.name} key={task.name} />
			))}
		</>
	);
};
