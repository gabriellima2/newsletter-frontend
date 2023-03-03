import { InputHTMLAttributes } from "react";

type BaseFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	labelText?: string;
	errorMessage: string | null;
};

export const BaseField = (props: BaseFieldProps) => {
	const { errorMessage, labelText, ...rest } = props;

	return (
		<div>
			<label>
				{labelText}
				<input {...rest} />
			</label>
			{errorMessage && <span role="alert">{errorMessage}</span>}
		</div>
	);
};
