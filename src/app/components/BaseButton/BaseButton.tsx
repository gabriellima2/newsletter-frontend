import React, { ButtonHTMLAttributes } from "react";

import { mainFont } from "../../layout";
import styles from "./styles.module.css";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	leftIcon?: () => JSX.Element;
};

export const BaseButton = (props: BaseButtonProps) => {
	const { children, leftIcon, ...rest } = props;

	return (
		<button
			type="button"
			{...rest}
			className={`${mainFont.className} ${rest.className}`}
		>
			{children}
			{leftIcon && React.createElement(leftIcon, null)}
		</button>
	);
};
