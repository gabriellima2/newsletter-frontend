import { ReactNode } from "react";

export type TChildren<T = unknown> = T & {
	children: ReactNode;
};
