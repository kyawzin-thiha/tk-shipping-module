import { Controller, Get } from '@nestjs/common';
import { BoxService } from './box.service';

@Controller('box')
export class BoxController {
	constructor(private readonly box: BoxService) {}

	@Get('get-all')
	async getAll() {
		return await this.box.getAll();
	}
}
