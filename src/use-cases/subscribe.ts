import { SubscribeParams, UserEntity } from "@/domain/entities/user-entity";
import { HttpResponseProtocol } from "@/domain/http";

export interface ISubscribe {
	execute: (data: SubscribeParams) => Promise<HttpResponseProtocol<UserEntity>>;
}
