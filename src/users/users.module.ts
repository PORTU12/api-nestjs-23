import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/Auth/constants';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from 'src/Auth/jwt.strategy';
import { ProduitEntity } from 'src/entities/produit.entity';
/*Configure forFeature() in the UserModule to define
the repositories are registered in the current scope. With that in place, we can inject the
UsersRepository into the UsersService using "@InjectRepository()"*/
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UserService, JwtStrategy]
})
export class UsersModule {}
