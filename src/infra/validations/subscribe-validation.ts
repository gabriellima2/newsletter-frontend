import { z } from "zod";

import { SubscribeParams } from "@/domain/entities";
import { IDefaultError } from "@/domain/errors";

const userSchema = z.object({
	email: z
		.string()
		.email({ message: "E-mail inválido!" })
		.trim()
		.max(256, { message: "O e-mail ultrapassou o limite de 256 caracteres!" }),
});

export function subscribeValidation({ email }: SubscribeParams): IDefaultError {
	const validated = userSchema.safeParse({ email });
	if (validated.success) return { hasError: false, message: undefined };
	return { hasError: true, message: validated.error.issues[0].message };
}
