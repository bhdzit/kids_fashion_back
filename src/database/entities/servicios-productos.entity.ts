import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { ProductoEntity } from "./producto.entity";
import { ServiciosEntity } from "./servicios.entity";


@Entity("servicios_productos")
export class ServiciosProductoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>ServiciosEntity, (servicio)=>servicio.productos)
    servicio:ServiciosEntity
    
    @ManyToOne(()=>ProductoEntity, (producto)=>producto.servicio)
    producto:ProductoEntity;

    @Column({type: "integer"})
    cantidad:number;
    
}