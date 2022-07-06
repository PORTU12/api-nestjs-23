import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LoginCredentialsDto } from 'src/dto/LoginCredentialsDto';
import { UserSubscribeDto } from 'src/dto/UserSubscribe.dto';
import { AuthEntity } from 'src/entities/Auth.entity';
import { AuthService } from './auth.service';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService) { }

    @Post('register')
    @ApiCreatedResponse({ description: 'User Register' })
    register(
        @Body() userData: UserSubscribeDto
    ): Promise<AuthEntity> {
        return this.authservice.subscribe(userData)
    }
    @Post('login')
    @ApiCreatedResponse({ description: 'User Login' })
    Userlogin(
        @Body() userData: LoginCredentialsDto
    ) {
        return this.authservice.Login(userData)
    }
    @Get()
    findAll(){
        return this.authservice.findAll()
    }
}
