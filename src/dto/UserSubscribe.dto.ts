import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserSubscribeDto{

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}