import { SubscribeParams, UserEntity } from "@/domain/entities/user-entity";
import { HttpResponseProtocol } from "@/domain/http/http-protocols/http-response-protocol";

export type ISubscribeExecute = (
	data: SubscribeParams
) => Promise<HttpResponseProtocol<UserEntity>>;

export interface ISubscribe {
	execute: ISubscribeExecute;
}
