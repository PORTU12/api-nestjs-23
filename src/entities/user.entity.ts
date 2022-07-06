import { ProduitEntity } from "../entities/produit.entity";
import { UserRoleEnum } from "../produit/enums/user-role.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    public username: string

    @Column()
    public password: string

    @Column({
        type: 'enum',
        enum: UserRoleEnum,
        default: UserRoleEnum.USER
    })
    role: string

    @Column()
    public email:string

    @OneToMany(
        type=> ProduitEntity,
        (produit)=> produit.user,
    )
    produits: ProduitEntity;
    
}