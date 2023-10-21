
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { ServiciosEstilistaEntity } from "./servicios-estilista.entity";



@Entity("usuarios")
export class UsuarioEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    nombre:string;

    @Column({type: "varchar"})
    usuario:string;

    @Column({type: "varchar",nullable:true})
    password:string;

    @Column({type: "integer",nullable:true})
    rol:number;

    @OneToMany(() => ServiciosEstilistaEntity,(usuario)=>usuario.usuario)
    servicios:ServiciosEstilistaEntity;


}