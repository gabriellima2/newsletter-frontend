export interface UserEntity {
	id: number;
	email: string;
}

export type SubscribeParams = Pick<UserEntity, "email">;
