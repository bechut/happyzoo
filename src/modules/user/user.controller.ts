import { CreateUserDto } from 'src/dto/user.dto';
import { Controller, Body, Post } from '@nestjs/common';
import { PrismaClientService } from 'src/packages/prisma-client/prisma-client.service';
import { v4 } from 'uuid';
import { PrismaClient as HappyZooClient } from 'prisma/client/happyzoo';

@Controller('user')
export class UserController {
  client: HappyZooClient;
  constructor(private readonly prismaClientService: PrismaClientService) {
    this.client = this.prismaClientService.getHappyZooClient();
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const user_id = v4();
    await this.client.$transaction([
      this.client.user.create({
        data: {
          id: user_id,
          email: body.email,
          password: body.password,
        },
      }),
      this.client.profile.create({
        data: {
          first_name: body.first_name,
          last_name: body.last_name,
          user_id,
        },
      }),
    ]);
    return 'User has been created';
  }
}
