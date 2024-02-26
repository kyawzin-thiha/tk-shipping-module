import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly user: UserService) {}

	@Get('')
	async getUser(@Request() req: any) {
		const { id } = req.user;

		return await this.user.get(id);
	}
}
