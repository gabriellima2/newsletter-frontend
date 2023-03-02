import { SubscribeImpl } from "@/use-cases/impl/subscribe-impl";
import { makeApiUrl, makeHttpClient } from "../http";

export const makeSubscribe = () =>
	new SubscribeImpl(makeApiUrl("/user"), makeHttpClient());
