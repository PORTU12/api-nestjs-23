import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginCredentialsDto{

    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    
    @IsNotEmpty()
    @IsString()
    password: string;
}