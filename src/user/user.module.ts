import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaclientModule } from '..//packages/prismaclient/prismaclient.module';

@Module({
  imports: [PrismaclientModule],
  controllers: [UserController],
})
export class UserModule {}
