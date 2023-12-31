
import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { ServiciosProductoEntity } from "./servicios-productos.entity";


@Entity("productos")
export class ProductoEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    nombre:string;

    @Column({type: "integer"})
    cantidad:number;

    @OneToMany(()=>ServiciosProductoEntity,(servicio)=>servicio.producto)
    servicio:ServiciosProductoEntity

}