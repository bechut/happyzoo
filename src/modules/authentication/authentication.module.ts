import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { JwtModule } from 'src/packages/jwt/jwt.module';
import { PrismaClientModule } from 'src/packages/prisma-client/prisma-client.module';

@Module({
  imports: [PrismaClientModule, JwtModule],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
