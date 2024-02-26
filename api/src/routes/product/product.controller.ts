import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor(private readonly product: ProductService) {}

	@Get('get-all')
	async getAll() {
		return await this.product.getAll();
	}

	@Post('create-raw')
	async createRaw(@Body() data: {
		name: string,
		description: string,
		qty: number,
		shipBy: Date,
		shippingMethod: string,
		billingAddress: string,
		shippingAddress: string,
	}) {
		return await this.product.createRaw(data.name, data.description, data.qty, data.shipBy, data.shippingMethod, data.billingAddress, data.shippingAddress);
	}

	@Put('edit-raw/:id')
	async editRaw(@Param('id') id: string, @Body() data: {
		name: string,
		description: string,
		qty: number,
		shipBy: Date,
		shippingMethod: string,
		billingAddress: string,
		shippingAddress: string,
	}) {
		return await this.product.editRaw(id, data.name, data.description, data.qty, data.shipBy, data.shippingMethod, data.billingAddress, data.shippingAddress);
	}

	@Delete('delete/:id')
	async delete(@Param('id') id: string) {
		return this.product.delete(id);
	}
}
