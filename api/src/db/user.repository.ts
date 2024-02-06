import {Injectable} from '@nestjs/common';
import {PrismaService} from '../helper/prisma.service';
import {UserDto} from '../types/db.dto';
import {ErrorDto} from '../types/error.dto';
import {Prisma, User} from '@prisma/client';

@Injectable()
export class UserRepository {
    get prisma(): PrismaService {
        return this._prisma;
    }
    constructor(private  readonly _prisma: PrismaService) {}

    async find(identifier: string) : Promise<[UserDto, ErrorDto]> {
        try {
            const user = await this._prisma.user.findFirst({
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
            const user = await this._prisma.user.findUnique({
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

    async create(name: string, username: string, email: string, password: string) : Promise<[UserDto, ErrorDto]> {
        try {
            const user = await this._prisma.user.create({
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
            await this._prisma.user.update({
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
            await this._prisma.user.delete({
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