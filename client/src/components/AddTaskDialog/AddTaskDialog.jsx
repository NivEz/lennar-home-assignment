import { useState, useRef } from 'react';
import { Flex, Text, Dialog, Button, TextField, Grid, Box } from '@radix-ui/themes';

export const AddTaskDialog = ({ action }) => {
	const [open, setOpen] = useState(false);
	const task = useRef(null);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const onSave = async event => {
		event.preventDefault();
		if (!task.current.value) {
			setErrorMessage('Task name is required');
			return;
		}
		setLoading(true);
		await action(task.current.value);
		setOpen(false);
		setLoading(false);
	};

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger>
				<Button>Add task</Button>
			</Dialog.Trigger>

			<Dialog.Content maxWidth="450px">
				<Dialog.Title>Add Task</Dialog.Title>
				<Dialog.Description size="2" mb="4">
					Add task details.
				</Dialog.Description>

				<Flex direction="column" gap="3">
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Describe your task
						</Text>
						<TextField.Root ref={task} placeholder="Enter task details" />
					</label>
				</Flex>
				<Grid columns={'2'} gap="3" mt="4">
					<Box>
						<Text size="1">{errorMessage}</Text>
					</Box>
					<Flex justify="end" gap="3">
						<Box>
							<Dialog.Close>
								<Button variant="soft" color="gray">
									Cancel
								</Button>
							</Dialog.Close>
						</Box>
						<Button onClick={onSave} loading={loading}>
							Save
						</Button>
					</Flex>
				</Grid>
			</Dialog.Content>
		</Dialog.Root>
	);
};
