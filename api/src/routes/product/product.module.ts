import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { HelperModule } from '../../helper/helper.module';
import { DbModule } from '../../db/db.module';

@Module({
	imports: [HelperModule, DbModule],
	controllers: [ProductController],
	providers: [ProductService],
})
export class ProductModule {}