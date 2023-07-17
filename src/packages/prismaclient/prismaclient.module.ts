import { Module } from '@nestjs/common';
import { PrismaClientService } from './prismaclient.service';

@Module({
  providers: [PrismaClientService],
  exports: [PrismaClientService],
})
export class PrismaclientModule {}
