import { ToastProvider } from "./ToastContext";
import type { TChildren } from "@/@types/TChildren";

export const Providers = (props: TChildren) => {
	const { children } = props;

	return <ToastProvider>{children}</ToastProvider>;
};
