import { Injectable } from '@nestjs/common';
import { JwtService as JWTS } from '@nestjs/jwt';

@Injectable()
export class JwtService {
  constructor(private readonly jWTS: JWTS) {}
  get() {
    return this.jWTS;
  }
}
