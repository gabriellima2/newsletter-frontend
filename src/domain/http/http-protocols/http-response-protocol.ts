import { HttpStatusCode } from "./http-status-code";

export interface HttpResponseProtocol<Body> {
	statusCode: HttpStatusCode;
	body: Body;
}
