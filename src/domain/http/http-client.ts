export interface HttpClientRequest {
	url: string;
	method: "post" | "get" | "put" | "delete";
	body?: unknown;
	headers?: unknown;
}

export interface HttpClientResponse<Body> {
	statusCode: number;
	body: Body;
}

export interface IHttpClient {
	execute: <BodyResponse>(
		request: HttpClientRequest
	) => Promise<HttpClientResponse<BodyResponse>>;
}
