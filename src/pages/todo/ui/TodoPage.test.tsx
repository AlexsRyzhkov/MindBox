import { beforeEach, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { TodoPage } from '@/pages/todo/ui/TodoPage';
import userEvent from '@testing-library/user-event';

describe('testing todo list function', () => {
	beforeEach(async () => {
		render(<TodoPage/>);

		const input = screen.queryByTestId('input-test');

		await userEvent.type(input, 'Test todo');
		await userEvent.type(input, '{Enter}');

		await userEvent.type(input, 'Test1 todo');
		await userEvent.type(input, '{Enter}');

		await userEvent.type(input, 'Test3 todo');
		await userEvent.type(input, '{Enter}');

		const todo = screen.getByTestId('todo-1');
		await userEvent.click(todo);
	});


	it('creating todo', async () => {
		const input = screen.queryByTestId('input-test');

		await userEvent.type(input, 'Test2 todo');
		await userEvent.type(input, '{Enter}');

		screen.queryByText('Test2 todo');
	});

	it('checked todo', async () => {
		const todo = screen.getByTestId('todo-0');

		await userEvent.click(todo);

		screen.getByTestId('checkbox-active-icon-0');
	});

	it('completed filter', async () => {
		const filterCompleted = screen.getByText('Выполненные');

		await userEvent.click(filterCompleted);

		const todo = screen.getByTestId('todo-0');

		const { getByTestId } = within(todo);

		getByTestId('checkbox-active-icon-0');
	});

	it('active filter', async () => {
		const filterCompleted = screen.getByText('Активные');

		await userEvent.click(filterCompleted);

		const todos = screen.getAllByTestId(/todo-\d+/i);

		for (const todo of todos) {
			const { queryByTestId } = within(todo);
			expect(queryByTestId(`checkbox-active-icon-${todo.dataset.testid}`)).toBeNull();
		}
	});
});