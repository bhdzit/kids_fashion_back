
import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Entity("hoarios")
export class HorarioEntity extends BaseEntity {
 
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>UsuarioEntity, (usuario)=>usuario.horario)
    usuario:UsuarioEntity;

    @Column({type: "integer"})
    diaSeman:number;
    
    @Column({type: "timestamp"})
    start:Date;

    @Column({type: "timestamp"})
    end:Date;

}