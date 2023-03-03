import { useSubscribe } from "./hooks/useSubscribe";
import { makeSubscribe } from "@/main/factories/use-cases/make-subscribe";
import { BaseField } from "../BaseField";
import { BaseButton } from "../BaseButton";
import { Checkbox } from "../Checkbox";

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
		<main>
			<form onSubmit={handleSubmit}>
				<BaseField
					type="text"
					placeholder="Digite seu melhor email"
					value={email}
					onChange={handleEmailChange}
					errorMessage={null}
				/>
				<Checkbox
					labelText="Eu aceito receber emails diariamente"
					checked={userHasAcceptedSendingEmails}
					onChange={handleSendingEmailsChange}
				/>
				<BaseButton type="submit" disabled={!userHasAcceptedSendingEmails}>
					Inscrever-se
				</BaseButton>
			</form>
		</main>
	);
};
