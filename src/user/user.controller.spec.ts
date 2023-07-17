import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

import { PrismaclientModule } from '../packages/prismaclient/prismaclient.module';
import { PrismaClientService } from '../packages/prismaclient/prismaclient.service';

import { CreateUserDto } from './user.dto';

import { mockProfileClientCreate } from '../unit_test/mock-profile-client';
import { mockUserClientCreate } from './../unit_test/mock-user-client';
import { mockUser } from '../unit_test/mock-data';

describe('UserController', () => {
  let controller: UserController;
  let dto: CreateUserDto;

  describe('Create user failed', () => {
    dto = {
      email: mockUser.email,
      password: mockUser.password,
      first_name: mockUser.profile.first_name,
      last_name: mockUser.profile.last_name,
    };

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [PrismaclientModule],
        controllers: [UserController],
        providers: [
          {
            provide: PrismaClientService,
            useValue: {
              happyZoo: () => {
                return {
                  user: {
                    create: () => mockUserClientCreate({ ...dto }),
                  },
                  profile: {
                    create: () => mockProfileClientCreate({}),
                  },
                };
              },
            },
          },
        ],
      }).compile();

      controller = module.get<UserController>(UserController);
    });

    it('User exists', async () => {
      try {
        await controller.createUser(dto);
      } catch (e) {
        expect(e.message).toBe('User exists');
      }
    });
  });

  describe('Create user success', () => {
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [PrismaclientModule],
        controllers: [UserController],
        providers: [
          {
            provide: PrismaClientService,
            useValue: {
              happyZoo: () => {
                return {
                  user: {
                    create: () => mockUserClientCreate({ ...dto, email: '' }),
                  },
                  profile: {
                    create: () => mockProfileClientCreate({}),
                  },
                };
              },
            },
          },
        ],
      }).compile();

      controller = module.get<UserController>(UserController);
    });

    it('User has been created', async () => {
      const dto = {
        email: mockUser.email,
        password: mockUser.password,
        first_name: mockUser.profile.first_name,
        last_name: mockUser.profile.last_name,
      };

      const res = await controller.createUser(dto);
      expect(res).toBe('User has been created');
    });
  });
});
