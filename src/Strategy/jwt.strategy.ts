import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './constants';
import { payloadInterface } from './payload.interface';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private AuthRepository: Repository<UserEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: payloadInterface) {
    const user = await this.AuthRepository.findOne({username: payload.username});
    const user1 = console.log(user)
    const payload1 = console.log(payload)
//retourner l'utilisateur privé du password et du salt
    if (user){
      const {password, ...result} = user;
      return result;
    }else{
      throw new UnauthorizedException();
    }
  }
}