import { FC, useCallback, useEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

import './Checkbox.scss';

interface ICheckbox {
	checked: boolean;
	onChange: (checked: boolean) => void;
	test_id: string;
}

export const Checkbox: FC<Partial<ICheckbox>> = ({
	checked = false,
	onChange,
	test_id = '',
}) => {
	const [value, setValue] = useState(checked);

	useEffect(() => {
		if (value !== checked) {
			setValue(checked);
		}
	}, [checked]);

	const onClick = useCallback(() => {
		if (onChange) {
			return onChange(value);
		}

		setValue((value) => !value);
	}, []);

	return (
		<div className="checkbox" data-testid={`checkbox-${test_id}`} onClick={onClick}>
			{value && (
				<IoMdCheckmark
					data-testid={`checkbox-active-icon-${test_id}`}
					className="checkbox__active-icon"
					color={'#2a2c41'}
				/>
			)}
		</div>
	);
};