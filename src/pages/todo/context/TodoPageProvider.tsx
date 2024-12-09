import { createContext, FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
	id: string;
	text: string;
	completed: boolean;
}

export type TFilter = 'ALL' | 'ACTIVE' | 'COMPLETED'

interface ITodoPageContext {
	filter: TFilter;
	todos: Todo[];
	addTodo: (text: string) => void;
	toggleCompleted: (id: string) => void;
	changeFilter: (filter: TFilter) => void;
}

export const TodoPageContext = createContext<ITodoPageContext | null>(null);

export const TodoPageProvider: FC<PropsWithChildren> = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [filter, setFilter] = useState<TFilter>('ALL');

	const addTodo = useCallback((text: string) => {
		setTodos((todos) =>
			[...todos, {
				id: uuidv4(),
				text: text,
				completed: false,
			}]);
	}, []);

	const toggleCompleted = useCallback((id: string) => {
		setTodos((todos) => (
			todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		));
	}, []);

	const changeFilter = useCallback((filter: TFilter) => {
		setFilter(filter);
	}, []);

	const value = useMemo<ITodoPageContext>(() => ({
		filter: filter,
		todos,
		addTodo,
		toggleCompleted,
		changeFilter,
	}), [todos, filter]);

	return (
		<TodoPageContext.Provider value={value}>
			{children}
		</TodoPageContext.Provider>
	);
};