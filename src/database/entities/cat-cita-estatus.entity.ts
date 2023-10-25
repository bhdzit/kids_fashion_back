import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { CitaEntity } from "./cita.entity";



@Entity("cat-cita-estatus")
export class CatCitaEstatusEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("varchar")
    estatus:string;

    @OneToMany(()=>CitaEntity, (cita)=>cita.estatus)
    cita:CitaEntity;
}