import { useSubscribe } from "./hooks/useSubscribe";
import { useSubmit } from "@/app/hooks/useSubmit";

import { makeSubscribe } from "@/main/factories/use-cases/make-subscribe";
import { subscribeValidation } from "@/infra/validations";

import { BaseCheckbox } from "../BaseCheckbox";
import { BaseButton } from "../BaseButton";
import { BaseField } from "../BaseField";

import styles from "./styles.module.css";

export const Subscribe = () => {
	const { isSubmitting, handleSubmit } = useSubmit();
	const {
		email,
		userHasAcceptedSendingEmails,
		handleSendingEmailsChange,
		handleEmailChange,
		handleSubscribe,
	} = useSubscribe({
		subscribe: makeSubscribe(),
		validation: subscribeValidation,
	});

	return (
		<form
			onSubmit={(e) => handleSubmit(e, handleSubscribe)}
			className={styles.subscribe}
		>
			<BaseField
				type="text"
				placeholder="Digite seu melhor email"
				value={email.value}
				onChange={handleEmailChange}
				labelText="Email *"
				errorMessage={email.errorMessage}
			/>
			<footer className={styles.subscribe__footer}>
				<BaseCheckbox
					labelText="Eu aceito receber emails diariamente"
					checked={userHasAcceptedSendingEmails}
					onChange={handleSendingEmailsChange}
				/>
				<BaseButton
					type="submit"
					disabled={!userHasAcceptedSendingEmails || isSubmitting}
				>
					{isSubmitting ? "Enviando" : "Inscrever-se"}
				</BaseButton>
			</footer>
		</form>
	);
};
