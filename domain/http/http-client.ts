import { HttpRequestProtocol } from "./http-protocols/http-request-protocol";
import { HttpResponseProtocol } from "./http-protocols/http-response-protocol";

export interface IHttpClient {
	execute: <ReqBody, ResBody>(
		request: HttpRequestProtocol<ReqBody>
	) => Promise<HttpResponseProtocol<ResBody>>;
}
