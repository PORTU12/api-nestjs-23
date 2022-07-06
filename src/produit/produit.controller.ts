import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req, ParseIntPipe } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitDto } from '../dto/create-produit.dto'
import { UpdateProduitDto } from '../dto/update-produit.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/Auth/JwtAuth.guards';
import { UserEntity } from 'src/entities/user.entity';
import { ProduitEntity } from 'src/entities/produit.entity';
import { User } from 'src/decorators/user.decorateurs';
import { AuthEntity } from 'src/entities/Auth.entity';
import {Request } from 'express'

@ApiTags('Produits')

@Controller('produit')
export class ProduitController {
  constructor(private readonly produitService: ProduitService) {}

  @Post()
  //@UseGuards(JwtAuthGuard)
  async create(@Body() createProduitDto: ProduitDto, @User() user: UserEntity) {
    //const user = await this.produitService.createProduit(createProduitDto);
    const request = user.produits
    return await this.produitService.createProduit(createProduitDto, request.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async TrouveProduits(/*@User() request: UserEntity*/){
    const produit = await this.produitService.findAllProduct()
    return produit;
  }
  @Get(':id')
  TrouveProduit(@Param('id', ParseIntPipe) id):Promise<ProduitEntity>  {
    return this.produitService.findOneProduct(id);
  }

  @Put(':id')
  Modifier(@Param('id') id: number, @Body() updateProduitDto: UpdateProduitDto): Promise<UpdateResult> {
    return this.produitService.ModifProduit(id, updateProduitDto);
  }

  @Delete(':id')
  Supprimer(@Param('id') id: number): Promise<DeleteResult>{
    return this.produitService.SupprimerProduit(id);
  }
}
