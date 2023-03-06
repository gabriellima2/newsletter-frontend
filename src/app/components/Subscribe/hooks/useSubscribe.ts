import { ChangeEvent, useState } from "react";

import type { SubscribeParams } from "@/domain/entities";
import type { IDefaultError } from "@/domain/errors";
import type { Subscribe } from "@/use-cases/subscribe";

type Email = {
	value: string;
	errorMessage: string | null;
};

type UseSubscribeParams = {
	subscribe: Subscribe;
	validation: (params: SubscribeParams) => IDefaultError;
};

type UseSubscribeReturn = {
	email: Email;
	userHasAcceptedSendingEmails: boolean;
	handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSendingEmailsChange: () => void;
	handleSubscribe: () => Promise<string | null>;
};

const DEFAULT_ERROR_MESSAGE = "Por favor, digite um valor válido";

export function useSubscribe(params: UseSubscribeParams): UseSubscribeReturn {
	const { subscribe, validation } = params;
	const [email, setEmail] = useState<Email>({ value: "", errorMessage: null });
	const [userHasAcceptedSendingEmails, setUserHasAcceptedSendingEmails] =
		useState(false);

	const handleSendingEmailsChange = () =>
		setUserHasAcceptedSendingEmails((prevState) => !prevState);

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail({ value: e.target.value, errorMessage: null });

	const handleSubscribe = async () => {
		const validated = validation({ email: email.value });
		if (validated.hasError) {
			setEmail((prevState) => ({
				...prevState,
				errorMessage: validated.message || DEFAULT_ERROR_MESSAGE,
			}));
			return null;
		}
		const response = await subscribe.execute({ email: email.value });
		return `${response.body.email} inscrito com sucesso!`;
	};

	return {
		email,
		userHasAcceptedSendingEmails,
		handleEmailChange,
		handleSendingEmailsChange,
		handleSubscribe,
	};
}
