import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { PrismaclientModule } from '../packages/prismaclient/prismaclient.module';
import { JwtModule } from '../packages/jwt/jwt.module';

@Module({
  imports: [PrismaclientModule, JwtModule],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
