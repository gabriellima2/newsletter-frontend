import { SubscribeParams, UserEntity } from "@/domain/entities";
import { HttpClientResponse } from "@/domain/http";

export interface ISubscribe {
	execute: (data: SubscribeParams) => Promise<HttpClientResponse<UserEntity>>;
}
