import { useState, useEffect } from 'react';
import { AddTaskDialog } from '../AddTaskDialog/AddTaskDialog';
import { TaskItem } from '../TaskItem/TaskItem';
import useFetch from '../../hooks/useFetch';
import { Spinner } from '@radix-ui/themes';

export const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);
	// const { data, loading, error } = useFetch('/tasks');

	// get all tasks
	useEffect(() => {
		if (tasks.length) {
			return;
		}
		fetch('http://localhost:3000/tasks')
			.then(res => res.json())
			.then(data => {
				setTasks(data);
				setLoading(false);
			});
	}, []);

	const addTask = async taskName => {
		const res = await fetch('http://localhost:3000/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ taskName }),
		});
		if (!res.ok) {
			// set error message
			throw new Error(data.message || 'Something went wrong');
		}
		const data = await res.json();
		setTasks([...tasks, data]);
	};

	const deleteTask = async taskId => {
		const res = await fetch(`http://localhost:3000/tasks/${taskId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!res.ok) {
			// set error message
			throw new Error(data.message || 'Something went wrong');
		}
		const data = await res.json();
		setTasks([...tasks.filter(task => task.id !== taskId)]);
	};

	return (
		<>
			<AddTaskDialog action={addTask} />
			{loading && <Spinner size="3" />}
			{tasks.map(task => (
				<TaskItem name={task.name} id={task.id} key={task.id} onDelete={deleteTask} />
			))}
		</>
	);
};
