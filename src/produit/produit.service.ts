import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from 'src/entities/Auth.entity';
import { UserEntity } from 'src/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProduitDto } from '../dto/create-produit.dto';
import { UpdateProduitDto } from '../dto/update-produit.dto';
import { ProduitEntity } from '../entities/produit.entity';
import { UserRoleEnum } from './enums/user-role.enum';

@Injectable()
export class ProduitService {
  constructor(@InjectRepository(ProduitEntity)
  private ProduitRepository: Repository<ProduitEntity>) {}

  createProduit(cv: ProduitDto, user) {
    const newProduit = this.ProduitRepository.create(cv);//cv construit à partir du dto
    newProduit.user = user//associe l'utilisateur à newProduit, newproduit chercher user et stocke user
    return this.ProduitRepository.save(newProduit);
  }

  async findAllProduct(): Promise<ProduitEntity[]> {
    return await this.ProduitRepository.find();
  }

  async findOneProduct(id: number) {
    const product = await this.ProduitRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Le cv d'id ${id} n'existe pas`);
    }
    return product;
  }

  ModifProduit(id: number, updateProduitDto: UpdateProduitDto) {
    return this.ProduitRepository.update(id, updateProduitDto);
  }

  SupprimerProduit(id: number): Promise<DeleteResult> {
    return this.ProduitRepository.delete(id);
  }
}