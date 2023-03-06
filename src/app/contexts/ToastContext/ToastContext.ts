import { createContext } from "react";
import type { ToastOptions } from "react-toastify/dist/types";

export interface IToastContext {
	notify: (message: string, options?: ToastOptions) => void;
}

export const ToastContext = createContext<IToastContext>({} as IToastContext);
