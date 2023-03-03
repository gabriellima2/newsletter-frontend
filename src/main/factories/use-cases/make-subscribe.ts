import { makeApiUrl, makeHttpClient } from "../http";
import { SubscribeImpl } from "@/use-cases/impl";

export const makeSubscribe = () =>
	new SubscribeImpl(makeApiUrl("/user"), makeHttpClient());
