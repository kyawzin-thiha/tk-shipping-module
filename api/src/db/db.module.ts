import { Module } from '@nestjs/common';
import { HelperModule } from '../helper/helper.module';
import { ProductRepository } from './product.repository';
import { BoxRepository } from './box.repository';
import { UserRepository } from './user.repository';

@Module({
	imports: [HelperModule],
	providers: [UserRepository, ProductRepository, BoxRepository],
	exports: [UserRepository, ProductRepository, BoxRepository],
})
export class DbModule {}
