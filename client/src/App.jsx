import { Heading } from '@radix-ui/themes';
import { TaskList } from './components/TasksList/TaskList';

function App() {
	return (
		<>
			<Heading>Tasks Manager</Heading>
			<TaskList />
		</>
	);
}

export default App;
