import {
    BaseEntity,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { ServiciosEntity } from "./servicios.entity";
import { UsuarioEntity } from "./usuario.entity";


@Entity("servicios_estilista")
export class ServiciosEstilistaEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>ServiciosEntity, (servicio)=>servicio.estilista)
    servicio:ServiciosEntity

    @ManyToOne(()=>UsuarioEntity, (usuario)=>usuario.servicios)
    usuario:UsuarioEntity
    

    
}