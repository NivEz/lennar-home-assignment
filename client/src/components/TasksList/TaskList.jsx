import { useState, useEffect } from 'react';
import { AddTaskDialog } from '../AddTaskDialog/AddTaskDialog';
import { TaskItem } from '../TaskItem/TaskItem';
import useFetch from '../../hooks/useFetch';
import { Spinner } from '@radix-ui/themes';

export const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);
	// const { data, loading, error } = useFetch('/tasks');
	// const [tasks, setTasks] = useState([]);

	// useEffect(() => {
	// 	if (data) {
	// 		// console.log(data);
	// 		// setTasks(data);
	// 	}
	// }, [data]);

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
		// setLoading(true);
		const res = await fetch('http://localhost:3000/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ taskName }),
		});
		const data = await res.json();
		setTasks([...tasks, data]);

		// setTasks([...tasks, { name: taskName }]);
	};

	const deleteTask = async taskName => {};

	return (
		<>
			<AddTaskDialog action={addTask} />
			{loading && <Spinner size="3" />}
			{tasks.map(task => (
				<TaskItem name={task.name} key={task.name} />
			))}
		</>
	);
};
