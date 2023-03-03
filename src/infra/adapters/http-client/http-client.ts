import {
	IHttpClient,
	type HttpClientRequest,
	type HttpClientResponse,
} from "@/domain/http";

export class HttpClient implements IHttpClient {
	async execute<BodyResponse>(
		request: HttpClientRequest
	): Promise<HttpClientResponse<BodyResponse>> {
		const response = await fetch(request.url, {
			method: request.method,
			headers: request.headers as HeadersInit,
			body: request.body as BodyInit,
		});
		if (!response.ok) throw new Error();

		const data: BodyResponse = await response.json();
		return { body: data, statusCode: response.status };
	}
}
