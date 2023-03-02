import {
	IHttpClient,
	type HttpRequestProtocol,
	type HttpResponseProtocol,
} from "@/domain/http";

export class HttpClient implements IHttpClient {
	async execute<ReqBody, ResBody>(
		request: HttpRequestProtocol<ReqBody>
	): Promise<HttpResponseProtocol<ResBody>> {
		const response = await fetch(request.url, {
			method: request.method,
			headers: request.headers as HeadersInit,
			body: request.body as BodyInit,
		});
		if (!response.ok) throw new Error();

		const data: ResBody = await response.json();
		return { body: data, statusCode: response.status };
	}
}
