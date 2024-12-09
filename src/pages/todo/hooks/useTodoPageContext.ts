import { useContext } from 'react';

import { TodoPageContext } from '../context/TodoPageProvider';

export const useTodoPageContext = () => {
	const context = useContext(TodoPageContext);

	if (!context) {
		throw new Error('useCounter must be used within a todoProvider');
	}

	return context;
};