import {Injectable} from '@nestjs/common';
import {PrismaService} from '../helper/prisma.service';
import {UserDto, UsersDto} from '../types/db.dto';
import {ErrorDto} from '../types/error.dto';
import {Prisma, User} from '@prisma/client';

@Injectable()
export class UserRepository {
    constructor(private  readonly prisma: PrismaService) {}

    async find(identifier: string) : Promise<[UserDto, ErrorDto]> {
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    OR: [
                        {
                            id: identifier
                        },
                        {
                            email: identifier
                        },
                        {
                            username: identifier
                        }
                    ]
                }
            });

            if (!user) {
                return [null, {message: "User not found", status: 404}];
            }

            return [user, null];

        } catch(error) {
            return [null, {message: "Internal Server Error", status: 500}]
        }
    }

    async get(identifier: string) : Promise<[UserDto, ErrorDto]> {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: identifier
                }
            });

            if (!user) {
                return [null, {message: "User not found", status: 404}];
            }

            return [user, null];

        } catch(error) {
            return [null, {message: "Internal Server Error", status: 500}]
        }
    }

    async getAll() : Promise<[UsersDto, ErrorDto]> {
        try {
            const users = await this.prisma.user.findMany();
            return [users, null];
        }catch(error) {
            return [null, {message: "Internal Server Error", status: 500}]
        }
    }

    async create(name: string, username: string, email: string, password: string) : Promise<[UserDto, ErrorDto]> {
        try {
            const user = await this.prisma.user.create({
                data : {
                    name,
                    username,
                    email,
                    password
                }
            });

            return [user, null];
        } catch(error) {
            if(error instanceof  Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                return [null, {message: "User already exists", status: 409}]
            }
            return [null, {message: "Internal Server Error", status: 500}]
        }
    }

    async update(id: string, data: Partial<User>) : Promise<ErrorDto> {
        try {
            await this.prisma.user.update({
                where: {
                    id,
                },
                data,
            })

            return null;
        } catch(error) {
            return {message: "Internal Server Error", status: 500}
        }
    }

    async delete(id: string) : Promise<ErrorDto> {
        try {
            await this.prisma.user.delete({
                where: {
                    id
                }
            });

            return null;
        } catch(error) {
            return {message: "Internal Server Error", status: 500}
        }
    }
}