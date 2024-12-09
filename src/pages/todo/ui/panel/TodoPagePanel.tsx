import { useState } from 'react';

import { Input } from '@/shared/ui/input/Input';
import { InputChangeEvent, InputKeyEvent } from '@/shared/types/ChangeEvent';

import { useTodoPageContext } from '@/pages/todo/hooks/useTodoPageContext';
import { TodoPagePanelFilter } from '@/pages/todo/ui/panel/filter/TodoPagePanelFilter';

import './TodoPagePanel.scss';

export const TodoPagePanel = () => {
	const { addTodo } = useTodoPageContext();
	const [text, setText] = useState<string>('');

	const onChange = (e: InputChangeEvent) => {
		setText(e.target.value);
	};

	const onAddTodo = (e: InputKeyEvent) => {
		if (e.key === 'Enter' && text.trim().length > 0) {
			addTodo(text);
			setText('');
		}
	};

	return (
		<div className="todo-page-panel">
			<Input
				value={text}
				placeholder={'Добавить задачу'}
				onChange={onChange}
				onKeydown={onAddTodo}
			/>
			<TodoPagePanelFilter/>
		</div>
	);
};