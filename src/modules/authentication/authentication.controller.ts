import { v4 } from 'uuid';
import { Controller, Body, BadRequestException, Post } from '@nestjs/common';
import { compare } from 'bcrypt';
import { PrismaClient as HappyZooClient } from '../../../prisma/client/happyzoo';
import { UserLogInDto } from '../../dto/user.dto';
import { JwtService } from '../../packages/jwt/jwt.service';
import { PrismaClientService } from '../../packages/prisma-client/prisma-client.service';

@Controller('authentication')
export class AuthenticationController {
  client: HappyZooClient;
  constructor(
    private readonly prismaClientService: PrismaClientService,
    private readonly jwtService: JwtService,
  ) {
    this.client = this.prismaClientService.getHappyZooClient();
  }

  @Post('login')
  async login(@Body() body: UserLogInDto) {
    const user = await this.client.user.findUniqueOrThrow({
      where: { email: body.email },
    });
    if (!compare(body.password, user.password))
      throw new BadRequestException('Password does not match');
    else if (!user.status)
      throw new BadRequestException('User does not activated');
    const tempOtp = v4();
    const otp = `${tempOtp[0]}${tempOtp[12]}${tempOtp[19]}${tempOtp[22]}${tempOtp[25]}${tempOtp[33]}`;
    await this.client.otp.create({
      data: {
        value: otp,
        user_id: user.id,
      },
    });
    return {
      access_token: this.jwtService.get().sign({ a: user.id, b: otp }),
    };
  }
}
