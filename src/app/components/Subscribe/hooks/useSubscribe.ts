import { ISubscribe } from "@/use-cases/subscribe";
import { ChangeEvent, FormEvent, useState } from "react";

type UseSubscribeParams = {
	subscribe: ISubscribe;
};

export function useSubscribe(params: UseSubscribeParams) {
	const { subscribe } = params;
	const [email, setEmail] = useState("");

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const response = await subscribe.execute({ email });
		} catch (err) {
			console.error(err);
		}
	};

	return {
		email,
		handleEmailChange,
		handleSubmit,
	};
}
