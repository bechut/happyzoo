import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClientModule } from './packages/prisma-client/prisma-client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
