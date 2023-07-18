import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { PrismaClientService } from './../packages/prismaclient/prismaclient.service';
import { LoginDto } from './authentication.dto';
import { compare } from 'bcrypt';
import { v4 } from 'uuid';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly prismaClientService: PrismaClientService) {}

  @Post()
  async createUser(@Body() body: LoginDto) {
    const user = await this.prismaClientService
      .happyZoo()
      .user.findUniqueOrThrow({
        where: {
          email: body.email,
        },
      });
    if (!compare(body.password, user.password))
      throw new BadRequestException('Password dows not match');
    else if (!user.status)
      throw new BadRequestException('User is not activated');

    const otp = v4().slice(0, 4);
    await this.prismaClientService.happyZoo().otp.create({
      data: {
        user_id: user.id,
        otp,
      },
    });
    return 'User has been created';
  }
}
