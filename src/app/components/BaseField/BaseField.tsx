import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type BaseFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	labelText?: string;
	errorMessage: string | null;
};

export const BaseField = (props: BaseFieldProps) => {
	const { errorMessage, labelText, ...rest } = props;

	return (
		<div className={styles.field}>
			<label className={styles.field__label}>
				{labelText}
				<input
					{...rest}
					className={`${styles.field__input} ${props.className}`}
				/>
			</label>
			{errorMessage && (
				<span role="alert" className={styles.field__error}>
					{errorMessage}
				</span>
			)}
		</div>
	);
};
