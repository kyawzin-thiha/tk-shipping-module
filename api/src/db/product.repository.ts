import { Injectable } from '@nestjs/common';
import { PrismaService } from '../helper/prisma.service';
import { ProductDto, ProductsDto } from '../types/db.dto';
import { ErrorDto } from '../types/error.dto';

@Injectable()
export class ProductRepository {
	constructor(private readonly prisma: PrismaService) {}

	async getAll(): Promise<[ProductsDto, ErrorDto]> {
		try {
			const rawProducts = await this.prisma.product.findMany({
				where: {
					NOT: [
						{ status: 'ALL_IN_BOX' },
						{ status: 'SHIPPED' },
					],
				},
				include: {
					billingContact: true,
					shippingContact: true,
					boxes: true,
				},
			});

			const products = rawProducts.map(product => {
				// Sum up the quantities in BoxContent for each product
				const totalBoxedQty = product.boxes.reduce((acc, content) => acc + content.qty, 0);

				return {
					...product,
					remainingQty: product.qty - totalBoxedQty, // Calculate remaining quantity
				};
			});

			return [products, null];
		} catch (error) {
			console.log(error);
			return [null, { message: 'Internal Server Error', status: 500 }];
		}
	}

	async createRaw(name: string, description: string, qty: number, shipBy: Date, shippingMethod: string, billingAddress: string, shippingAddress: string): Promise<[ProductDto, ErrorDto]> {
		try {
			const product = await this.prisma.product.create({
				data: {
					name,
					description,
					qty,
					shipBy,
					shippingMethod,
					billingAddress,
					shippingAddress,
					isManual: true,
				},
				include: {
					billingContact: true,
					shippingContact: true,
				},
			});

			return [product, null];
		} catch (error) {
			console.log(error);
			return [null, { message: 'Internal Server Error', status: 500 }];
		}
	}

	async editRaw(id: string, name: string, description: string, qty: number, shipBy: Date, shippingMethod: string, billingAddress: string, shippingAddress: string): Promise<ErrorDto> {
		try {
			await this.prisma.product.update({
				where: {
					id,
				}, data: {
					name,
					description,
					qty,
					shipBy,
					shippingMethod,
					billingAddress,
					shippingAddress,
				},
			});
			return null;
		} catch (error) {
			return { message: 'Internal Server Error', status: 500 };
		}
	}

	async delete(id: string): Promise<ErrorDto> {
		try {
			await this.prisma.product.delete({
				where: {
					id,
				},
			});
			return null;
		} catch (error) {
			return { message: 'Internal Server Error', status: 500 };
		}
	}

}