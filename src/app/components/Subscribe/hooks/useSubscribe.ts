import { Subscribe } from "@/use-cases/subscribe";
import { ChangeEvent, FormEvent, useState } from "react";

type UseSubscribeParams = {
	subscribe: Subscribe;
};

export function useSubscribe(params: UseSubscribeParams) {
	const { subscribe } = params;
	const [email, setEmail] = useState("");
	const [userHasAcceptedSendingEmails, setUserHasAcceptedSendingEmails] =
		useState(false);

	const handleSendingEmailsChange = () =>
		setUserHasAcceptedSendingEmails((prevState) => !prevState);

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
		userHasAcceptedSendingEmails,
		handleEmailChange,
		handleSendingEmailsChange,
		handleSubmit,
	};
}
