import { useSubscribe } from "./hooks/useSubscribe";
import { makeSubscribe } from "@/main/factories/use-cases/make-subscribe";
import { BaseField } from "../BaseField";
import { BaseButton } from "../BaseButton";

export const Subscribe = () => {
	const { email, handleEmailChange, handleSubmit } = useSubscribe({
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
				<BaseButton type="submit">Inscrever-se</BaseButton>
			</form>
		</main>
	);
};
