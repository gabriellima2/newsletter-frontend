import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, type ToastOptions } from "react-toastify";

import { ToastContext } from "./ToastContext";
import type { TChildren } from "@/@types/TChildren";

export const ToastProvider = (props: TChildren) => {
	const { children } = props;
	const notify = (message: string, options?: ToastOptions) => {
		toast(message, {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			...options,
		});
	};

	return (
		<ToastContext.Provider value={{ notify }}>
			<ToastContainer />
			{children}
		</ToastContext.Provider>
	);
};
