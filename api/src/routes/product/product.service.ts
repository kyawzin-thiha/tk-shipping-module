import {HttpException, Injectable} from '@nestjs/common';
import {ProductRepository} from '../../db/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly product: ProductRepository) {}

    async getAll() {
        const [products, error] = await this.product.getAll();

        if (error) {
            throw new HttpException(error.message, error.status);
        }

        return products;
    }
}
