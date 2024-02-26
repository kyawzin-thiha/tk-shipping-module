import { Injectable } from '@nestjs/common';
import { PrismaService } from '../helper/prisma.service';
import { BoxesDto } from '../types/db.dto';
import { ErrorDto } from '../types/error.dto';

@Injectable()
export class BoxRepository {
	async;

	constructor(private readonly prisma: PrismaService) {}


	async getAll(): Promise<[BoxesDto, ErrorDto]> {
		try {
			const boxes = await this.prisma.box.findMany({
				orderBy: {
					createdAt: 'desc',
				},
				include: {
					contents: {
						include: {
							product: true,
						},
					},
				},
			});

			return [boxes, null];
		} catch (error) {
			return [null, { message: 'Internal Server Error', status: 500 }];
		}
	}
}