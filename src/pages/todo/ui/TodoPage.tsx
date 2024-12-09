import { Header } from '@/shared/ui/header/Header';

import { TodoPageList } from '@/pages/todo/ui/list/TodoPageList';
import { TodoPageProvider } from '@/pages/todo/context/TodoPageProvider';
import { TodoPagePanel } from '@/pages/todo/ui/panel/TodoPagePanel';

import './TodoPage.scss';

export const TodoPage = () => {
	return (
		<TodoPageProvider>
			<Header/>
			<section className="todo-page">
				<TodoPagePanel/>
				<TodoPageList/>
			</section>
		</TodoPageProvider>
	);
};