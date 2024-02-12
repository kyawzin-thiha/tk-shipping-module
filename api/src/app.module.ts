import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {HelperModule} from './helper/helper.module';
import {DbModule} from './db/db.module';
import {WebhookModule} from './routes/webhook/webhook.module';
import {AuthModule} from './routes/auth/auth.module';
import {APP_GUARD} from '@nestjs/core';
import {AuthGuard} from './guards/auth.guatd';

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true
    }), HelperModule, DbModule, AuthModule, WebhookModule],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        }
    ]
})
export class AppModule {}
