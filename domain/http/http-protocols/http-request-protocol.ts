export interface HttpRequestProtocol<Body> {
	url: string;
	method: "post" | "get" | "put" | "delete";
	body?: Body;
	headers?: unknown;
}
