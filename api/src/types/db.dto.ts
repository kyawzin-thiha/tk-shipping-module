import {Customer, Product, User} from '@prisma/client';

export type UserDto = User | null;
export type UsersDto = User[] | null;

export type ProductDto = Product & {billedTo?: Customer, shippedTo?: Customer} | null;
export type ProductsDto = (Product & {billedTo?: Customer, shippedTo?: Customer})[] | null;