"use client";
import { type FormEvent, useState } from "react";
import { useToastContext } from "../contexts/ToastContext";

type UseSubmitReturn = {
	error: string | null;
	isSubmitting: boolean;
	handleSubmit: (
		e: FormEvent,
		cb: () => Promise<string | null>
	) => Promise<void>;
};

export function useSubmit(): UseSubmitReturn {
	const { notify } = useToastContext();
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (
		e: FormEvent,
		cb: () => Promise<string | null>
	) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const message = await cb();
			notify(message || "Sucesso!", { type: "success" });
		} catch (err) {
			const error = (err as Error).message;
			setError(error);
			notify(error, { type: "error" });
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		error,
		isSubmitting,
		handleSubmit,
	};
}
