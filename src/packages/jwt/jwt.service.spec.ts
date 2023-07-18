import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from './jwt.service';

import { JwtModule as JWTM } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
describe('JwtService', () => {
  let service: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JWTM.registerAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_SECRET'),
            signOptions: {
              expiresIn: '1d',
            },
          }),
          inject: [ConfigService],
        }),
      ],
      providers: [JwtService],
    }).compile();

    service = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    service.get();
    expect(service).toBeDefined();
    expect(service.get).toBeDefined();
  });
});
