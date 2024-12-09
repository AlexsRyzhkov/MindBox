import { FC } from 'react';

import { Checkbox } from '@/shared/ui/checkbox/Checkbox';

import { useTodoPageContext } from '@/pages/todo/hooks/useTodoPageContext';

import './TodoPageCard.scss';

interface ITodoPageCard {
	id: string,
	text: string;
	completed: boolean;
	test_id?: string
}

export const TodoPageCard: FC<ITodoPageCard> = ({ id, text, completed, test_id = '' }) => {
	const { toggleCompleted } = useTodoPageContext();

	const onToggleCheckbox = () => toggleCompleted(id);

	return (
		<div className="todo-page-card" data-testid={`todo-${test_id}`} onClick={onToggleCheckbox}>
			<Checkbox checked={completed} test_id={test_id}/>
			<p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
		</div>
	);
};