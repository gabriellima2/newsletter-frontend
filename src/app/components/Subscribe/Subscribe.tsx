import { FormEvent, useState } from "react";

import { makeSubscribe } from "@/main/factories/use-cases/make-subscribe";

export const Subscribe = () => {
	const subscribe = makeSubscribe();
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const response = await subscribe.execute({ email });
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Digite seu melhor email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button type="submit">Inscrever-se</button>
			</form>
		</main>
	);
};
