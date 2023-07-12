import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClientModule } from './packages/prisma-client/prisma-client.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ResponseInterceptor } from './packages/interceptors/response.interceptor';
import { ExceptionInterceptor } from './packages/interceptors/exception.interceptor';

@Module({
  imports: [PrismaClientModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionInterceptor,
    },
  ],
})
export class AppModule {}
