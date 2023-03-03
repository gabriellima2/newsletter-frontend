import { IHttpClient, HttpClientResponse } from "@/domain/http";
import { SubscribeParams, UserEntity } from "@/domain/entities";
import { Subscribe } from "../subscribe";

export class SubscribeImpl implements Subscribe {
	constructor(
		private readonly url: string,
		private readonly httpClient: IHttpClient
	) {}

	async execute(
		params: SubscribeParams
	): Promise<HttpClientResponse<UserEntity>> {
		return await this.httpClient.execute({
			url: this.url,
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(params),
		});
	}
}
