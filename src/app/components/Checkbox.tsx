import { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
	labelText?: string;
};

export const Checkbox = (props: CheckboxProps) => {
	const { labelText, ...rest } = props;

	return (
		<label>
			{labelText}
			<input type="checkbox" {...rest} />
		</label>
	);
};
