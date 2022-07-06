import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProduitEntity } from "./produit.entity";

@Entity()
export class AuthEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    public firstname: string

    @Column()
    public lastname: string
    
}