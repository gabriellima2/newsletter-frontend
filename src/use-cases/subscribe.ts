import { SubscribeParams, UserEntity } from "@/domain/entities";
import { HttpClientResponse } from "@/domain/http";
import { IDefaultError } from "@/domain/errors";

export interface Subscribe {
	execute: (data: SubscribeParams) => Promise<HttpClientResponse<UserEntity>>;
}
