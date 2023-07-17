import { PrismaClientService } from './../packages/prismaclient/prismaclient.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { genSalt, hash } from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly prismaClientService: PrismaClientService) {}
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const user = await this.prismaClientService.happyZoo().user.create({
      data: {
        email: body.email,
        password: await hash(body.password, await genSalt(10)),
      },
    });
    await this.prismaClientService.happyZoo().profile.create({
      data: {
        user_id: user.id,
        first_name: body.first_name,
        last_name: body.last_name,
      },
    });
    return 'User has been created';
  }
}
