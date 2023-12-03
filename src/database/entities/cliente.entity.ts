
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { CitaEntity } from "./cita.entity";


@Entity("cliente")
export class ClienteEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "varchar"})
    nombre:string;
    
    @Column({type: "varchar"})
    tel:string;

    @Column({type: "varchar"})
    padre:string;

    @Column({type: "varchar"})
    correo:string;

    ultimoCorte:Date;

    @OneToMany(() => CitaEntity,(cita)=>cita.cliente)
    citas:CitaEntity[];

}