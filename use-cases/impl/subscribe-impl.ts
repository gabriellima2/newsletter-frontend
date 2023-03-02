import { SubscribeParams, UserEntity } from "@/domain/entities/user-entity";
import { IHttpClient } from "@/domain/http/http-client";
import { HttpResponseProtocol } from "@/domain/http/http-protocols/http-response-protocol";
import { ISubscribe } from "../subscribe";

export class SubscribeImpl implements ISubscribe {
	constructor(
		private readonly url: string,
		private readonly httpClient: IHttpClient
	) {}

	async execute(
		params: SubscribeParams
	): Promise<HttpResponseProtocol<UserEntity>> {
		return await this.httpClient.execute<string, UserEntity>({
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
