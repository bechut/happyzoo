import { Injectable } from '@nestjs/common';
import { JwtService as JS } from '@nestjs/jwt';

@Injectable()
export class JwtService {
    constructor(private readonly JwtS: JS) { }

    get() { return this.JwtS }
}
