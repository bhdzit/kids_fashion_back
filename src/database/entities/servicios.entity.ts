
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { ServiciosProductoEntity } from "./servicios-productos.entity";


@Entity("servicios")
export class ServiciosEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    nombre:string;

    @Column({type: "integer"})
    tiempo:number;

    @Column({type: "integer"})
    costo:number;
    
    @OneToMany(() => ServiciosProductoEntity,(productos)=>productos.servicio )
    productos:ServiciosProductoEntity
}