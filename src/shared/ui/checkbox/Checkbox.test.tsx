import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '@/shared/ui/checkbox/Checkbox';

test('Checkbox checked', async () => {
	render(<Checkbox/>);

	const checkbox = screen.queryByTestId('checkbox-');

	await userEvent.click(checkbox);

	const checkboxActiveIcon = screen.queryByTestId('checkbox-active-icon-');

	expect(checkboxActiveIcon).not.toBeNull();
});