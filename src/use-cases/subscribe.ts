import { SubscribeParams, UserEntity } from "@/domain/entities/user-entity";
import { HttpResponseProtocol } from "@/domain/http";

export type ISubscribeExecute = (
	data: SubscribeParams
) => Promise<HttpResponseProtocol<UserEntity>>;

export interface ISubscribe {
	execute: ISubscribeExecute;
}
