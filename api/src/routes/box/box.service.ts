import { HttpException, Injectable } from '@nestjs/common';
import { BoxRepository } from '../../db/box.repository';

@Injectable()
export class BoxService {
	constructor(private readonly box: BoxRepository) {}

	async getAll() {
		const [boxes, error] = await this.box.getAll();

		if (error) {
			throw new HttpException(error.message, error.status);
		}

		return boxes;
	}
}
