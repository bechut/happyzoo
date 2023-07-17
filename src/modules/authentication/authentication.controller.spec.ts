import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationController } from './authentication.controller';

import { PrismaClientServiceMock } from '../../unit-test/prisma-client.class';
import { PrismaClientModule } from '../../packages/prisma-client/prisma-client.module';
import { PrismaClientService } from '../../packages/prisma-client/prisma-client.service';

import { JwtModule } from '../../packages/jwt/jwt.module';
import { JwtService } from '../../packages/jwt/jwt.service';
import { JwtServiceMock } from '../../unit-test/jwt-service.class';

import { mockUser } from '../../unit-test/mock.data';

async function initController(providers: any[]) {
  const module: TestingModule = await Test.createTestingModule({
    imports: [PrismaClientModule, JwtModule],
    controllers: [AuthenticationController],
    providers,
  }).compile();
  return module;
}

jest.mock('bcrypt', () => {
  return {
    compare: (pass: string, hash: string) => {
      return pass === hash;
    },
  };
});

describe('AuthenticationController', () => {
  let controller: AuthenticationController;

  describe('login failed 1', () => {
    beforeEach(async () => {
      const module = await initController([
        {
          provide: PrismaClientService,
          useValue: PrismaClientServiceMock({
            user: {
              findUniqueOrThrow: jest
                .fn()
                .mockRejectedValueOnce({ message: 'No User found' }),
            },
          }),
        },
        { provide: JwtService, useValue: JwtServiceMock({}) },
      ]);
      controller = module.get<AuthenticationController>(
        AuthenticationController,
      );
    });
    it('No User found', async () => {
      try {
        await controller.login(mockUser);
      } catch (e) {
        expect(e.message).toBe('No User found');
      }
    });
  });

  describe('login failed 2', () => {
    beforeEach(async () => {
      const module = await initController([
        {
          provide: PrismaClientService,
          useValue: PrismaClientServiceMock({
            user: {
              findUniqueOrThrow: jest
                .fn()
                .mockReturnValue({ ...mockUser, status: false }),
            },
          }),
        },
        { provide: JwtService, useValue: JwtServiceMock({}) },
      ]);
      controller = module.get<AuthenticationController>(
        AuthenticationController,
      );
    });
    it('Password does not match', async () => {
      try {
        await controller.login({ ...mockUser, password: '' });
      } catch (e) {
        expect(e.message).toBe('Password does not match');
      }
    });

    it('User does not activated', async () => {
      try {
        await controller.login({ ...mockUser });
      } catch (e) {
        expect(e.message).toBe('User does not activated');
      }
    });
  });

  describe('login success 1', () => {
    beforeEach(async () => {
      const module = await initController([
        {
          provide: PrismaClientService,
          useValue: PrismaClientServiceMock({
            user: {
              findUniqueOrThrow: jest.fn().mockReturnValue({ ...mockUser }),
            },
            otp: {
              create: jest.fn().mockReturnValue(true),
            },
          }),
        },
        {
          provide: JwtService,
          useValue: JwtServiceMock({
            sign: jest.fn().mockReturnValue('jwt'),
          }),
        },
      ]);
      controller = module.get<AuthenticationController>(
        AuthenticationController,
      );
    });

    it('Login success and return access token', async () => {
      const res = await controller.login({ ...mockUser });
      expect(res).toEqual({ access_token: 'jwt' });
    });
  });
});
