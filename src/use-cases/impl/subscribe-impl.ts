import { IHttpClient, HttpClientResponse } from "@/domain/http";
import { SubscribeParams, UserEntity } from "@/domain/entities";
import { IDefaultError } from "@/domain/errors";
import { Subscribe } from "../subscribe";

export class SubscribeImpl implements Subscribe {
	constructor(
		private readonly url: string,
		private readonly httpClient: IHttpClient
	) {}

	async execute(
		params: SubscribeParams
	): Promise<HttpClientResponse<UserEntity>> {
		const response = await this.httpClient.execute<UserEntity | IDefaultError>({
			url: this.url,
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});
		const hasErrorMessage = (response.body as IDefaultError).message;
		if (!response.ok && hasErrorMessage) throw new Error(hasErrorMessage);
		if (!response.ok) throw new Error("Ocorreu um erro, tente novamente!");
		return response as HttpClientResponse<UserEntity>;
	}
}
