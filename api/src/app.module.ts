import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { HelperModule } from './helper/helper.module';
import { ProductModule } from './routes/product/product.module';
import { BoxModule } from './routes/box/box.module';
import { AuthModule } from './routes/auth/auth.module';
import { AuthGuard } from './guards/auth.guatd';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from './routes/user/user.module';

@Module({
	imports: [ConfigModule.forRoot({
		isGlobal: true,
	}), DbModule, HelperModule, ProductModule, BoxModule, AuthModule, UserModule],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
	],
})
export class AppModule {}
