import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from '../../db/user.repository';
import { BcryptService } from '../../helper/bcrypt.service';
import { JwtTokenService } from '../../helper/jwt.service';

@Injectable()
export class AuthService {
	constructor(private readonly user: UserRepository, private readonly bcrypt: BcryptService, private readonly jwt: JwtTokenService) {}

	async login(identifier: string, password: string) {
		const [user, dbError] = await this.user.find(identifier);
		if (dbError) {
			throw new HttpException(dbError.message, dbError.status);
		}
		const match = await this.bcrypt.compareValue(password, user.password);

		if (!match) {
			throw new HttpException('Invalid Password', 401);
		}

		const payload = {
			id: user.id,
			email: user.email,
			name: user.name,
		};

		return this.generateToken(payload);
	}

	async register(name: string, usernaem: string, email: string, password: string) {
		password = this.bcrypt.hashValue(password);

		const [user, dbError] = await this.user.create(name, usernaem, email, password);

		if (dbError) {
			throw new HttpException(dbError.message, dbError.status);
		}

		const payload = {
			id: user.id,
			email: user.email,
			name: user.name,
		};

		return this.generateToken(payload);
	}

	async getAllEmailsAndUsernames() {
		const [users, dbError] = await this.user.getAll();

		if (dbError) {
			throw new HttpException(dbError.message, dbError.status);
		}

		return users.map(user => {
			return {
				email: user.email,
				username: user.username,
			};
		});
	}

	private generateToken(payload: any) {
		const [token, error] = this.jwt.sign(payload);

		if (error) {
			throw new HttpException(error.message, error.status);
		}

		return token;
	}
}
