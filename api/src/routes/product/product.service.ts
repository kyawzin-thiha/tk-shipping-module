import { HttpException, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../db/product.repository';

@Injectable()
export class ProductService {
	constructor(private readonly product: ProductRepository) {}

	async getAll() {
		const [data, error] = await this.product.getAll();

		if (error) {
			throw new HttpException(error.message, error.status);
		}

		return data;
	}

	async createRaw(name: string, description: string, qty: number, shipBy: Date, shippingMethod: string, billingAddress: string, shippingAddress: string) {
		const [data, error] = await this.product.createRaw(name, description, qty, shipBy, shippingMethod, billingAddress, shippingAddress);

		if (error) {
			throw new HttpException(error.message, error.status);
		}

		return data;
	}

	async editRaw(id: string, name: string, description: string, qty: number, shipBy: Date, shippingMethod: string, billingAddress: string, shippingAddress: string) {
		const error = await this.product.editRaw(id, name, description, qty, shipBy, shippingMethod, billingAddress, shippingAddress);

		if (error) {
			throw new HttpException(error.message, error.status);
		}
	}

	async delete(id: string) {
		const error = await this.product.delete(id);

		if (error) {
			throw new HttpException(error.message, error.status);
		}
	}
}
