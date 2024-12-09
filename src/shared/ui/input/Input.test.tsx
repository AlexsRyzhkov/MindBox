import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '@/shared/ui/input/Input';

test('change input value', async () => {
	render(<Input/>);

	const input = screen.queryByTestId('input-test');

	await userEvent.type(input, 'test input');

	const refreshInput = screen.queryByTestId('input-test');

	expect(refreshInput).toHaveValue('test input');
});