import { IconButton } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';

export const DeleteButton = ({ onDelete }) => {
	return (
		<IconButton
			onClick={onDelete}
			variant="outline"
			size="1"
			radius="full"
			style={{ cursor: 'pointer' }}
		>
			<TrashIcon />
		</IconButton>
	);
};
