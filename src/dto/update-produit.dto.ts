import { PartialType } from '@nestjs/swagger';
import { ProduitDto } from './create-produit.dto';

export class UpdateProduitDto extends PartialType(ProduitDto) {}
