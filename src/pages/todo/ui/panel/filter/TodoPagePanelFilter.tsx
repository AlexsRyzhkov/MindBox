import { clsx } from 'clsx';

import { useTodoPageContext } from '@/pages/todo/hooks/useTodoPageContext';
import { TFilter } from '@/pages/todo/context/TodoPageProvider';

import './TodoPagePanelFilter.scss';

export const TodoPagePanelFilter = () => {
	const { changeFilter, filter } = useTodoPageContext();

	const filterOptions: { value: TFilter, label: string }[] = [
		{
			value: 'ALL',
			label: 'Все',
		},
		{
			value: 'COMPLETED',
			label: 'Выполненные',
		},
		{
			value: 'ACTIVE',
			label: 'Активные',
		},
	];

	return (
		<div className="todo-page-panel-filter">
			{filterOptions.map((filterOption) => (
				<div
					className={clsx(
						'todo-page-panel-filter__button',
						filterOption.value === filter && 'todo-page-panel-filter__button--active',
					)}
					onClick={() => changeFilter(filterOption.value)}
					key={filterOption.value}
				>
					{filterOption.label}
				</div>
			))}
		</div>
	);
};