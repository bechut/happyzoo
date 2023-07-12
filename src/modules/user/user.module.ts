import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaClientModule } from 'src/packages/prisma-client/prisma-client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [UserController],
})
export class UserModule {}
