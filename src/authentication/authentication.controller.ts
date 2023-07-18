import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { PrismaClientService } from './../packages/prismaclient/prismaclient.service';
import { LoginDto } from './authentication.dto';
import { compare } from 'bcrypt';
import { v4 } from 'uuid';
import { JwtService } from '../packages/jwt/jwt.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly prismaClientService: PrismaClientService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async createUser(@Body() body: LoginDto) {
    const user = await this.prismaClientService
      .happyZoo()
      .user.findUniqueOrThrow({
        where: {
          email: body.email,
        },
      });

    if (!(await compare(body.password, user.password)))
      throw new BadRequestException('Password dows not match');
    else if (!user.status)
      throw new BadRequestException('User is not activated');

    const otp = v4();
    await this.prismaClientService.happyZoo().otp.create({
      data: {
        user_id: user.id,
        otp,
      },
    });
    const access_token = this.jwtService.get().sign({ id: otp.slice(0, 6) });
    return { access_token, message: 'Login successfully' };
  }
}
