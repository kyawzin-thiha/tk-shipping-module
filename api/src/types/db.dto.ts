import {User} from '@prisma/client';

export type UserDto = User | null;
export type UsersDto = User[] | null;