import { UserEntity } from "src/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuthEntity } from "./Auth.entity";

@Entity()
export class ProduitEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    prodname: string;

    @Column()
    price: number

   @ManyToOne(
        type=> UserEntity,
        (user)=> user.produits,
    )
    user: UserEntity
}