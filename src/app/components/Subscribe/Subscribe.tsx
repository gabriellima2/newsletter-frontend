import { useSubscribe } from "./hooks/useSubscribe";
import { makeSubscribe } from "@/main/factories/use-cases/make-subscribe";

import { BaseCheckbox } from "../BaseCheckbox";
import { BaseButton } from "../BaseButton";
import { BaseField } from "../BaseField";

import styles from "./styles.module.css";

export const Subscribe = () => {
	const {
		email,
		userHasAcceptedSendingEmails,
		handleSendingEmailsChange,
		handleEmailChange,
		handleSubmit,
	} = useSubscribe({
		subscribe: makeSubscribe(),
	});

	return (
		<form onSubmit={handleSubmit} className={styles.subscribe}>
			<BaseField
				type="text"
				placeholder="Digite seu melhor email"
				value={email}
				onChange={handleEmailChange}
				labelText="Email *"
				errorMessage={null}
			/>
			<footer className={styles.subscribe__footer}>
				<BaseCheckbox
					labelText="Eu aceito receber emails diariamente"
					checked={userHasAcceptedSendingEmails}
					onChange={handleSendingEmailsChange}
				/>
				<BaseButton type="submit" disabled={!userHasAcceptedSendingEmails}>
					Inscrever-se
				</BaseButton>
			</footer>
		</form>
	);
};
