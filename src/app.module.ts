import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClientModule } from './packages/prisma-client/prisma-client.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './packages/interceptors/response.interceptor';
import { ExceptionInterceptor } from './packages/interceptors/exception.interceptor';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [PrismaClientModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ExceptionInterceptor,
    },
  ],
})
export class AppModule {}
