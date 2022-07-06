import { HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { UserEntity } from '../entities/user.entity';
import { UserDto } from "src/dto/create-user.dto";
import { UpdateUserDto } from "src/dto/update-user.dto";
import { AuthEntity } from "src/entities/Auth.entity";

@Injectable()
/*We add five methods in our service,*/
export class UserService {
  constructor(@InjectRepository(AuthEntity)
  private userRepository: Repository<AuthEntity>) {}
  
  async getById(id: number) {
    const user = await this.userRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new HttpException(`Cet utilisateur n'existe pas`, HttpStatus.NOT_FOUND);
  }
 
  async create(userData: UserDto) : Promise<AuthEntity>{
    return this.userRepository.save(userData);
  }

  async findAll(): Promise<AuthEntity[]>{
    return this.userRepository.find();
  }

  update(id: number, updateBookDto: UpdateUserDto): Promise<UpdateResult>{
    const updateUser = this.getById(id)
    return this.userRepository.update(id, updateBookDto)  }

  delete(id: number) : Promise<AuthEntity> {
    const deleteUser = this.getById(id)
    return deleteUser;
  }
}