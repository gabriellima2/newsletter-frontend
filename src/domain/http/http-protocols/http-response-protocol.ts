export enum HttpStatusCode {
	ok = 200,
	noContent = 204,
	badRequest = 400,
	unauthorized = 401,
	forbidden = 403,
	notFound = 404,
	serverError = 500,
}

export interface HttpResponseProtocol<Body> {
	statusCode: HttpStatusCode;
	body: Body;
}
