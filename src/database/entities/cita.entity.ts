import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { ServiciosEntity } from './servicios.entity';
import { CatCitaEstatusEntity } from './cat-cita-estatus.entity';

@Entity('cita')
export class CitaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.cita)
  estilista: UsuarioEntity;

  @ManyToOne(() => ServiciosEntity, (servicio) => servicio.servicio)
  servicio: ServiciosEntity;

  @ManyToOne(() => CatCitaEstatusEntity, (estatus) => estatus.cita)
  estatus: CatCitaEstatusEntity;

  @Column({ type: 'timestamp' })
  fecha: Date;
}