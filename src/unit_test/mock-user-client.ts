import { CreateUserDto } from './../user/user.dto';
import { mockUser } from './mock-data';
import { BadRequestException } from '@nestjs/common';

export const mockUserClientCreate = (payload: CreateUserDto) => {
  if (payload.email === mockUser.email)
    throw new BadRequestException('User exists');
  return payload;
};

export const mockUserClientFindUniqueOrThrow = (payload: CreateUserDto) => {
  if (payload.email !== mockUser.email)
    throw new BadRequestException('No user found');
  return payload;
};
