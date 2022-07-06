import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from './users.service'
import { UserDto } from "src/dto/create-user.dto";


@Controller('users')
export class UsersController {
  constructor(private userService: UserService) { }
  
  @Get()
  async getAll(): Promise<UserDto[]> {
    return this.userService.findAll()
  }
  @Post()
  async createUser(@Body() newUser: UserDto): Promise<UserDto>{
    return this.userService.create(newUser)
  }
  @Get(':id')
  async getOne(@Param() id: number): Promise<UserDto>{
    return this.userService.getById(id)
  }
  @Put(':id')
  async UpdateUser(@Param('id') id: number, @Body() userdto: UserDto): Promise<UserDto>{
    return this.userService.update(id, userdto)
  }
  @Delete(':id')
  async DeleteUser(@Param('id') id: number): Promise<UserDto>{
    return this.userService.delete(id)
  }
}