import {Module} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {BcryptService} from './bcrypt.service';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';
import {JwtTokenService} from './jwt.service';

@Module({
    imports: [JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
            global: true,
            secret: configService.get("JWT_SECRET"),
            signOptions: { expiresIn: '1d' },
        }),
        inject: [ConfigService],
    })],
    providers: [PrismaService, BcryptService, JwtTokenService],
    exports: [PrismaService, BcryptService, JwtTokenService],
})
export class HelperModule {}
