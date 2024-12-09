import { FC } from 'react';

import { InputChangeEvent, InputKeyEvent } from '@/shared/types/ChangeEvent';

import './Input.scss';

interface IInput {
	value: string;
	placeholder: string;
	onChange: (e: InputChangeEvent) => void;
	onKeydown: (e: InputKeyEvent) => void;
}

export const Input: FC<Partial<IInput>> = ({ value, placeholder, onChange, onKeydown }) => {
	return (
		<input
			data-testid="input-test"
			className="input"
			type={'text'}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			onKeyDown={onKeydown}
		/>
	);
};