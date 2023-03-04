"use client";
import { type FormEvent, useState } from "react";

type UseSubmitReturn = {
	error: string | null;
	isSubmitting: boolean;
	handleSubmit: (e: FormEvent, cb: () => Promise<void>) => Promise<void>;
};

export function useSubmit(): UseSubmitReturn {
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: FormEvent, cb: () => Promise<void>) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			await cb();
		} catch (err) {
			setError((err as Error).message);
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
