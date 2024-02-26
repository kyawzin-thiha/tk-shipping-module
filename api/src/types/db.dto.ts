import { Box, BoxContent, Customer, Product, User } from '@prisma/client';

export type UserDto = User | null;
export type UsersDto = User[] | null;

export type ProductDto = Product & { billingContact: Customer, shippingContact: Customer } | null;
export type ProductsDto = (Product & { billingContact: Customer, shippingContact: Customer })[] | null;

export type CustomerDto = Customer | null;
export type CustomersDto = Customer[] | null;

export type BoxDto = Box & { contents: BoxContent[] } | null;
export type BoxesDto = (Box & { contents: BoxContent[] })[] | null;