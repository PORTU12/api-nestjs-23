import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserEntity } from "src/entities/user.entity";
import { ManyToOne } from "typeorm";

export class ProduitDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    prodname: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price:number
}
