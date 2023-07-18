import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { PrismaclientModule } from '..//packages/prismaclient/prismaclient.module';

@Module({
  imports: [PrismaclientModule],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
