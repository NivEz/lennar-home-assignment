import { Flex, Box, Text, IconButton } from '@radix-ui/themes';
import { DeleteButton } from '../DeleteButton/DeleteButton';

export const TaskItem = ({ name, id, onDelete }) => {
	return (
		<Flex align="center" gap="3">
			<Box flexBasis="100%">
				<Text size="3">{name}</Text>
			</Box>
			<DeleteButton onDelete={() => onDelete(id)} />
		</Flex>
	);
};
