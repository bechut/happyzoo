import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationController } from './authentication.controller';

import { PrismaclientModule } from '../packages/prismaclient/prismaclient.module';
import { PrismaClientService } from '../packages/prismaclient/prismaclient.service';

import { mockUserClientFindUniqueOrThrow } from '../unit_test/mock-user-client';
import { mockOtpClientCreate } from '../unit_test/mock-otp-client';

import { JwtModule } from '../packages/jwt/jwt.module';
import { mockUser } from '../unit_test/mock-data';

jest.mock('bcrypt', () => ({
  compare: (a: string, b: string) => a === b,
}));

describe('AuthenticationController', () => {
  let controller: AuthenticationController;
  let dto: any;

  describe('Login failed', () => {
    dto = {
      email: mockUser.email,
      password: mockUser.password,
      first_name: mockUser.profile.first_name,
      last_name: mockUser.profile.last_name,
    };

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [PrismaclientModule, JwtModule],
        controllers: [AuthenticationController],
        providers: [
          {
            provide: PrismaClientService,
            useValue: {
              happyZoo: () => {
                return {
                  user: {
                    findUniqueOrThrow: () =>
                      mockUserClientFindUniqueOrThrow({ ...dto }),
                  },
                };
              },
            },
          },
        ],
      }).compile();

      controller = module.get<AuthenticationController>(
        AuthenticationController,
      );
    });

    afterEach(() => {
      dto = {
        email: mockUser.email,
        password: mockUser.password,
        first_name: mockUser.profile.first_name,
        last_name: mockUser.profile.last_name,
        status: false,
      };
    });

    it('Password dows not match', async () => {
      try {
        await controller.createUser({ ...dto, password: '' });
      } catch (e) {
        expect(e.message).toBe('Password dows not match');
      }
    });

    it('User is not activated', async () => {
      try {
        await controller.createUser({ ...dto });
      } catch (e) {
        expect(e.message).toBe('User is not activated');
      }
    });
  });

  describe('Login success', () => {
    dto = {
      email: mockUser.email,
      password: mockUser.password,
      first_name: mockUser.profile.first_name,
      last_name: mockUser.profile.last_name,
    };

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [PrismaclientModule, JwtModule],
        controllers: [AuthenticationController],
        providers: [
          {
            provide: PrismaClientService,
            useValue: {
              happyZoo: () => {
                return {
                  user: {
                    findUniqueOrThrow: () =>
                      mockUserClientFindUniqueOrThrow({ ...dto, status: true }),
                  },
                  otp: {
                    create: () => mockOtpClientCreate(),
                  },
                };
              },
            },
          },
        ],
      }).compile();

      controller = module.get<AuthenticationController>(
        AuthenticationController,
      );
    });

    it('return access token', async () => {
      const res = await controller.createUser({ ...dto });
      expect(res.message).toBe('Login successfully');
      expect(typeof res.access_token).toBe('string');
    });
  });
});
