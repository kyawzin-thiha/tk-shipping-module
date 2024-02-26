import {Body, Controller, Get, Post, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { Public } from '../../decorators/type.decorator';

@Controller('auth')
export class AuthController {
	constructor(private readonly auth: AuthService, private readonly configService: ConfigService) {}

	@Get('/authenticate')
	async reAuth() {
		return true;
	}

	@Public()
	@Get('/get-all-users')
	async getAllUsers() {
		return this.auth.getAllEmailsAndUsernames();
	}

	@Public()
	@Post('/login')
	async login(@Body() data: { identifier: string, password: string }, @Res({ passthrough: true }) res: any) {
		const token = await this.auth.login(data.identifier, data.password);

		console.log(this.configService.get('NODE_ENV'), this.configService.get('COOKIE_DOMAIN'));
		res.cookie('token', token, {
			httpOnly: this.configService.get('NODE_ENV') === 'production',
			secure: this.configService.get('NODE_ENV') === 'production',
			sameSite: 'None',
			domain: this.configService.get('NODE_ENV') === 'production' ? this.configService.get('COOKIE_DOMAIN') : undefined,
			maxAge: 1000 * 60 * 60 * 24,
		});

		return true;
	}

	@Public()
	@Post('/register')
	async register(@Body() data: {
		name: string,
		username: string,
		email: string,
		password: string
	}, @Res({ passthrough: true }) res: any) {
		const token = await this.auth.register(data.name, data.username, data.email, data.password);

		console.log(this.configService.get('NODE_ENV'), this.configService.get('COOKIE_DOMAIN'));
		res.cookie('token', token, {
			httpOnly: this.configService.get('NODE_ENV') === 'production',
			secure: this.configService.get('NODE_ENV') === 'production',
			sameSite: 'None',
			domain: this.configService.get('NODE_ENV') === 'production' ? this.configService.get('COOKIE_DOMAIN') : undefined,
			maxAge: 1000 * 60 * 60 * 24,
		});

		return true;
	}
}
