import { SubscribeParams, UserEntity } from "@/domain/entities/user-entity";
import { IHttpClient, HttpResponseProtocol } from "@/domain/http";
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
