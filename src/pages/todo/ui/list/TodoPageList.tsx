import { useTodoPageContext } from '@/pages/todo/hooks/useTodoPageContext';
import { TodoPageCard } from '@/pages/todo/ui/card/TodoPageCard';

import './TodoPageList.scss';

export const TodoPageList = () => {
	const { filter, todos } = useTodoPageContext();

	const filteredList = () => {
		if (filter === 'ALL') {
			return todos;
		}

		if (filter === 'ACTIVE') {
			return todos.filter((todo) => !todo.completed);
		}

		if (filter === 'COMPLETED') {
			return todos.filter((todo) => todo.completed);
		}
	};

	return (
		<section className="todo-page-list">
			{filteredList().map((todo, index) => (
				<TodoPageCard key={todo.id} test_id={`${index}`} {...todo}/>
			))}
		</section>
	);
};