import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClientService } from './prismaclient.service';

describe('PrismaclientService', () => {
  let service: PrismaClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaClientService],
    }).compile();

    service = module.get<PrismaClientService>(PrismaClientService);
  });

  it('should be defined', () => {
    service.happyZoo();
    expect(service.happyZoo).toBeDefined();
  });
});
