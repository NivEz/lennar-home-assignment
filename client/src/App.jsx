import { Heading, Text, Button } from '@radix-ui/themes';
import { AddTaskDialog } from './components/AddTaskDialog/AddTaskDialog';

function App() {
	return (
		<>
			<Heading>Tasks Manager</Heading>
			<AddTaskDialog />
		</>
	);
}

export default App;
