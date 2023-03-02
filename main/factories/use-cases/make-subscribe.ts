import { SubscribeImpl } from "@/use-cases/impl/subscribe-impl";
import { makeApiUrl } from "../http/make-api-url";
import { makeHttpClient } from "../http/make-http-client";

export const makeSubscribe = () =>
	new SubscribeImpl(makeApiUrl("/user"), makeHttpClient());
