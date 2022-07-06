import { Module } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitEntity } from '../entities/produit.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProduitEntity])],
  controllers: [ProduitController],
  providers: [ProduitService]
})
export class ProduitModule {}
