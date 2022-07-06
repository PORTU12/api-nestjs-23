import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from 'src/entities/Auth.entity';
import { UserEntity } from 'src/entities/user.entity';
import { ProduitEntity } from '../entities/produit.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]),
    AuthModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }), ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
