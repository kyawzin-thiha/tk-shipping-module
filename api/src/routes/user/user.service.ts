import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from '../../db/user.repository';

@Injectable()
export class UserService {
	constructor(private readonly user: UserRepository) {}

	async get(identifier: string) {
		const [user, dbError] = await this.user.get(identifier);

		if (dbError) {
			throw new HttpException(dbError.message, dbError.status);
		}

		return user;
	}
}
