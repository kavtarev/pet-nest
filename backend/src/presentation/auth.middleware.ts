import { JwtService } from '@nestjs/jwt';

import { Injectable, NestMiddleware, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthRepo } from 'src/infrastracture/peros/auth.repository';

@Injectable()
export class AuthCheck implements NestMiddleware {
  constructor(
    private readonly authRepo: AuthRepo,
    private readonly jwtService: JwtService
  ) { }
  async use(req: Request, res: Response, next: NextFunction) {
    console.log(345);

    const auth = req.headers.authorization
    if (!auth) {
      throw new UnauthorizedException('idi na hui')
    }

    const jwt = auth.replace('Bearer ', '');
    const payload = this.jwtService.decode(jwt, { json: true });

    const user = await this.authRepo.findById(payload?.sub)

    if (!user) {

      throw new NotFoundException('no such use32r')
    }

    console.log(user);

    next();
  }
}
