import { useState, useRef } from 'react';
import { Flex, Box, Text, Dialog, Button, TextField, Grid } from '@radix-ui/themes';

export const AddTaskDialog = ({ action }) => {
	const [open, setOpen] = useState(false);
	const taskNameInputRef = useRef(null);
	const [loading, setLoading] = useState(false);

	const onSave = async event => {
		event.preventDefault();
		setLoading(true);
		await action(taskNameInputRef.current.value);
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
					Add task name and description.
				</Dialog.Description>

				<Flex direction="column" gap="3">
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Name
						</Text>
						<TextField.Root ref={taskNameInputRef} placeholder="Enter task name" />
					</label>
					<label>
						<Text as="div" size="2" mb="1" weight="bold">
							Description
						</Text>
						<TextField.Root placeholder="Enter task description" />
					</label>
				</Flex>

				<Flex gap="3" mt="4" justify="end">
					<Dialog.Close>
						<Button variant="soft" color="gray">
							Cancel
						</Button>
					</Dialog.Close>
					<Dialog.Close>
						<Button onClick={onSave} loading={loading}>
							Save
						</Button>
					</Dialog.Close>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
};
