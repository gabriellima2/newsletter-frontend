import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type BaseCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
	labelText?: string;
};

export const BaseCheckbox = (props: BaseCheckboxProps) => {
	const { labelText, ...rest } = props;

	return (
		<label>
			{labelText}
			<input type="checkbox" {...rest} />
		</label>
	);
};
