import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtModule as JM } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [JM.registerAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => {
      return {
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' }
      }
    },
    inject: [ConfigService]
  })],
  providers: [JwtService],
  exports: [JwtService]
})
export class JwtModule { }
